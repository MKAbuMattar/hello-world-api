import {DatabaseConnector} from '@/configs/database-connector.config';
import {RegisterRoutes} from '@/generated/routes';
import {logger} from '@/libs/logger.lib';
import {
  errorHandlers,
  notFoundHandler,
} from '@/middlewares/error-handler.middleware';
import requestLogger from '@/middlewares/request-logger.middleware';
import buildApiSpecAndRoutes from '@/scripts/tsoa.script';
import {env} from '@/utils/env-config.util';
import axios from 'axios';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, {type Express, type Request, type Response} from 'express';
import helmet from 'helmet';
import cron from 'node-cron';
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

cron.schedule('* * * * *', async () => {
  try {
    const healthCheckUrl = env.HOST.includes('localhost')
      ? `http://${env.HOST}:${env.PORT}${env.HEALTH_CHECK_PATH}`
      : `https://${env.HOST}${env.HEALTH_CHECK_PATH}`;
    logger.info(`Performing health check at ${healthCheckUrl}`);
    const response = await axios.get(healthCheckUrl);
    logger.info(
      `Health check status: ${response.status} - ${response.statusText}`,
    );
    logger.info(`Health check response data: ${JSON.stringify(response.data)}`);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      logger.error(
        `Axios error during health check: ${error?.message} ${JSON.stringify({
          url: error?.config?.url,
          method: error?.config?.method,
          data: error?.response?.data,
          status: error?.response?.status,
        })}`,
      );
    } else {
      logger.error('Unexpected error during health check:', error);
    }
  }
});

app.use(router);

// Not found handler
app.use(notFoundHandler);

// Error handlers
app.use(errorHandlers);
