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
    },
  ) {
    this.#URL = URL;
    this.#connectionParams = connectionParams;
  }

  public async connect(): Promise<void> {
    try {
      const connection = await mongoose.connect(
        this.#URL,
        this.#connectionParams,
      );
      logger.info(`Connected to MongoDB: ${connection.connection.host}`);
    } catch (err) {
      logger.error(`Error connecting to MongoDB: ${JSON.stringify(err)}`);
    }
  }
}
