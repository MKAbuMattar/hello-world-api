import {logger} from '@/libs/logger.lib';
import mongoose, {type ConnectOptions} from 'mongoose';

export class DatabaseConnector {
  #URL: string;
  #connectionParams: ConnectOptions;

  constructor(
    URL: string,
    connectionParams: any = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    },
  ) {
    this.#URL = URL;
    this.#connectionParams = connectionParams;
  }

  public async connect(retries = 5, delay = 5000): Promise<void> {
    try {
      const connection = await mongoose.connect(
        this.#URL,
        this.#connectionParams,
      );
      logger.info(`Connected to MongoDB: ${connection.connection.host}`);
    } catch (err) {
      logger.error(`Error connecting to MongoDB: ${JSON.stringify(err)}`);
      if (retries > 0) {
        logger.info(`Retrying connection in ${delay / 1000} seconds...`);
        setTimeout(() => this.connect(retries - 1, delay), delay);
      } else {
        logger.error('Max retries reached. Could not connect to MongoDB.');
      }
    }
  }
}
