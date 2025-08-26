import {Schema, SchemaTypes} from 'mongoose';
import type {HelloWorldDocument} from '@/api/hello-world/hello-world.document';

export class HelloWorldSchema extends Schema<HelloWorldDocument> {
  #schema: Schema;

  constructor() {
    super();

    this.#schema = new Schema({
      title: {
        type: SchemaTypes.String,
        require: true,
      },
      sulg: {
        type: SchemaTypes.String,
        require: true,
        unique: true,
        lowercase: true,
      },
      description: {
        type: SchemaTypes.String,
        default: null,
      },
      url: {
        type: SchemaTypes.String,
        default: null,
      },
      language_short: {
        type: SchemaTypes.String,
        default: null,
      },
      code: {
        type: SchemaTypes.String,
        require: true,
      },
    });
  }

  public get schema(): Schema<HelloWorldDocument> {
    return this.#schema;
  }
}
