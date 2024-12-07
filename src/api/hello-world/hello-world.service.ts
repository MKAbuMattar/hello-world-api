import {HelloWorldRepository} from '@/api/hello-world/hello-world.repository';
import type {HelloWorldRepositoryResponse} from '@/api/hello-world/hello-world.types';
import type {PaginationParamsType} from '@/utils/pagination-params.util';

export class HelloWorldService {
  #HelloWorldRepository: HelloWorldRepository;

  constructor() {
    this.#HelloWorldRepository = new HelloWorldRepository();
  }

  public async getAll(
    params: PaginationParamsType,
  ): Promise<HelloWorldRepositoryResponse> {
    return await this.#HelloWorldRepository.getAll(params);
  }
}
