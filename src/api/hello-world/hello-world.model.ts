import mongoose, {type Model, model, type Schema} from 'mongoose';
import type {HelloWorldDocument} from '@/api/hello-world/hello-world.document';
import {HelloWorldSchema} from '@/api/hello-world/hello-world.schema';
import type {HelloWorldRepositoryResponse} from '@/api/hello-world/hello-world.types';
import type {ServiceResponse} from '@/models/service-response.model';

export class HelloWorldModel {
  #schema: Schema;
  #model: Model<HelloWorldDocument>;

  constructor() {
    this.#schema = new HelloWorldSchema().schema;
    this.#model =
      mongoose?.models?.HelloWorld ||
      model<HelloWorldDocument>('HelloWorld', this.#schema);
  }

  public get model(): Model<HelloWorldDocument> {
    return this.#model;
  }
}

export interface IHelloWorldResponse
  extends ServiceResponse<HelloWorldRepositoryResponse | null> {}
