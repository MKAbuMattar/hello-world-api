import {DatabaseConnector} from '@/configs/database-connector.config';
import {RegisterRoutes} from '@/generated/routes';
import {
  errorHandlers,
  notFoundHandler,
} from '@/middlewares/error-handler.middleware';
import requestLogger from '@/middlewares/request-logger.middleware';
import buildApiSpecAndRoutes from '@/scripts/tsoa.script';
import {env} from '@/utils/env-config.util';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, {type Express, type Request, type Response} from 'express';
import helmet from 'helmet';
import swaggerUi from 'swagger-ui-express';

new DatabaseConnector(env.MONGODB_URI).connect();

export const app: Express = express();
const router = express.Router();

app.set('trust proxy', true);
app.use(compression());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(
  cors({
    origin: env.CORS_WHITELIST,
    credentials: true,
  }),
);
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'", "'unsafe-inline'"],
        baseUri: ["'self'"],
        blockAllMixedContent: [],
        fontSrc: ["'self'", 'https:', 'data:'],
        frameAncestors: ["'self'"],
        imgSrc: ["'self'", 'data:'],
        objectSrc: ["'none'"],
        scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
        upgradeInsecureRequests: [],
      },
    },
  }),
);

if (env.isDevelopment) await buildApiSpecAndRoutes();

app.use(requestLogger);

// Routes
RegisterRoutes(app);

router.get('/', (_req: Request, res: Response) => {
  res.redirect('/docs');
});

router.use('/docs', swaggerUi.serve, (_req: Request, res: Response) => {
  import('@/generated/swagger.json').then((swaggerDocument) => {
    res.send(swaggerUi.generateHTML(swaggerDocument));
  });
});

app.use(router);

// Not found handler
app.use(notFoundHandler);

// Error handlers
app.use(errorHandlers);
