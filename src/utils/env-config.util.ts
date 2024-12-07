import dotenv from 'dotenv';
import {cleanEnv, host, port, str, testOnly} from 'envalid';

dotenv.config();

function getEnv() {
  return cleanEnv(process.env, {
    NODE_ENV: str({
      devDefault: testOnly('test'),
      choices: ['test', 'development', 'staging', 'production'],
      desc: 'The environment in which the application is running',
    }),
    HOST: host({
      devDefault: testOnly('localhost'),
      desc: 'The host on which the server will run',
    }),
    PORT: port({
      devDefault: testOnly(8080),
      desc: 'The port on which the server will run',
    }),
    CORS_WHITELIST: str({
      devDefault: testOnly('http://localhost:*'),
      desc: 'Comma-separated list of allowed origins for CORS',
    }),
    MONGODB_URI: str({
      devDefault: testOnly('mongodb://localhost:27017/test'),
      desc: 'MongoDB connection string',
    }),
    MONGO_MAX_LIMIT: str({
      devDefault: testOnly('150'),
      desc: 'Maximum number of documents to return in a single query',
    }),
    MONGO_DEFAULT_LIMIT: str({
      devDefault: testOnly('20'),
      desc: 'Default number of documents to return in a single query',
    }),
  });
}

export const env = getEnv();
