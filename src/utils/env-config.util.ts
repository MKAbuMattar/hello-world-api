import dotenv from 'dotenv';
import {cleanEnv, host, port, str} from 'envalid';

dotenv.config();

function getEnv() {
  return cleanEnv(process.env, {
    NODE_ENV: str({
      testDefault: 'test',
      choices: ['test', 'development', 'staging', 'production'],
      desc: 'The environment in which the application is running',
    }),
    HOST: host({
      testDefault: 'localhost',
      desc: 'The host on which the server will run',
    }),
    PORT: port({
      testDefault: 8080,
      desc: 'The port on which the server will run',
    }),
    CORS_WHITELIST: str({
      testDefault: 'http://localhost:*',
      desc: 'Comma-separated list of allowed origins for CORS',
    }),
    MONGODB_URI: str({
      testDefault: 'mongodb://localhost:27017/test',
      desc: 'MongoDB connection string',
    }),
    MONGO_MAX_LIMIT: str({
      testDefault: '150',
      desc: 'Maximum number of documents to return in a single query',
    }),
    MONGO_DEFAULT_LIMIT: str({
      testDefault: '20',
      desc: 'Default number of documents to return in a single query',
    }),
    HEALTH_CHECK_PATH: str({
      testDefault: '/api/health',
      desc: 'Path for health check endpoint',
    }),
  });
}

export const env = getEnv();
