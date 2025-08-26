import type {Model} from 'mongoose';
import type {HelloWorldDocument} from '@/api/hello-world/hello-world.document';
import {HelloWorldModel} from '@/api/hello-world/hello-world.model';
import type {HelloWorldRepositoryResponse} from '@/api/hello-world/hello-world.types';
import {
  PaginationParams,
  type PaginationParamsType,
} from '@/utils/pagination-params.util';
import {Utilities} from '@/utils/utilities.util';

export class HelloWorldRepository {
  #Utilities: Utilities;
  #model: Model<HelloWorldDocument>;

  constructor() {
    this.#Utilities = new Utilities();
    this.#model = new HelloWorldModel().model;
  }

  public async getAll(
    params: PaginationParamsType,
  ): Promise<HelloWorldRepositoryResponse> {
    const {limit, skip, page} = new PaginationParams(params).getPagination();

    const [results, totalCount] = await Promise.all([
      this.#model
        .find({})
        .sort({title: 1})
        .limit(this.#Utilities.convertStringToNumber(limit))
        .skip(this.#Utilities.convertStringToNumber(skip)),

      this.#model.countDocuments(),
    ]);

    const lastItemIndex: number =
      this.#Utilities.convertStringToNumber(skip) + results?.length;
    const totalPages: number = Math.ceil(
      totalCount / this.#Utilities.convertStringToNumber(limit),
    );

    return {
      count: results?.length,
      totalCount: totalCount,
      page: this.#Utilities.convertStringToNumber(page),
      totalPages: totalPages,
      lastItemIndex: lastItemIndex >= totalCount ? null : lastItemIndex,
      data: results,
    };
  }
}
