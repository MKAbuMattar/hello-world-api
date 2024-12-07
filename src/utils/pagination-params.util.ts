import {logger} from '@/libs/logger.lib';
import {Utilities} from '@/utils/utilities.util';

export type PaginationParamsType = {
  page: number | string;
  limit: number | string;
  skip: number | string | undefined;
  maxLimit: number;
  defaultLimit: number;
};

export class PaginationParams {
  #Utilities: Utilities;
  #params: PaginationParamsType;

  constructor(params: PaginationParamsType) {
    this.#Utilities = new Utilities();
    this.#params = params;
    this.getPagination = this.getPagination.bind(this);
  }

  public getPagination(): Omit<
    PaginationParamsType,
    'maxLimit' | 'defaultLimit'
  > {
    logger.info(
      `PaginationParams - getPagination: ${JSON.stringify({page: this.#params.page, limit: this.#params.limit, skip: this.#params.skip})}`,
    );

    const limit =
      this.#Utilities.clamp(
        this.#Utilities.convertStringToNumber(this.#params.limit),
        1,
        this.#params.maxLimit,
      ) || this.#params.defaultLimit;
    let page =
      Math.max(this.#Utilities.convertStringToNumber(this.#params.page), 1) ||
      1;
    let skip = this.#Utilities.clamp(
      (page - 1) * this.#Utilities.convertStringToNumber(this.#params.limit),
      0,
      1e4,
    );

    if (this.#params.skip !== undefined) {
      skip =
        this.#Utilities.clamp(
          this.#Utilities.convertStringToNumber(this.#params.skip) ?? 0,
          0,
          1e4,
        ) || 0;
      page = Math.floor(skip / limit) + 1;
    }

    logger.info(
      `PaginationParams - getPagination: ${JSON.stringify({page: page, limit: limit, skip: skip})}`,
    );

    return {page, skip, limit};
  }
}
