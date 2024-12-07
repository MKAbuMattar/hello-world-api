import type {IHelloWorldResponse} from '@/api/hello-world/hello-world.model';
import {HelloWorldService} from '@/api/hello-world/hello-world.service';
import {logger} from '@/libs/logger.lib';
import {ServiceResponse} from '@/models/service-response.model';
import {env} from '@/utils/env-config.util';
import type {PaginationParamsType} from '@/utils/pagination-params.util';
import {
  Controller,
  Get,
  Query,
  Route,
  SuccessResponse,
  Tags,
} from '@tsoa/runtime';
import {StatusCodes} from 'http-status-codes';

@Route('v1')
@Tags('Hello World')
export class HelloWorldController extends Controller {
  #HelloWorldService: HelloWorldService;

  constructor() {
    super();
    this.#HelloWorldService = new HelloWorldService();
  }

  @Get()
  @SuccessResponse(StatusCodes.OK, 'Hello World')
  public async getHelloWorld(
    @Query('page') page?: string,
    @Query('limit') limit?: string,
    @Query('skip') skip?: string,
  ): Promise<IHelloWorldResponse | unknown> {
    try {
      this.setStatus(200);
      logger.info('Hello World Controller - getHelloWorld');
      logger.info(
        `Hello World Controller - getHelloWorld :${JSON.stringify({page: page, limit: limit, skip: skip})}`,
      );

      const params: PaginationParamsType = {
        page: page || '1',
        limit: limit || env.MONGO_DEFAULT_LIMIT.toString(),
        skip: skip || undefined,
        maxLimit: env.MONGO_MAX_LIMIT,
        defaultLimit: env.MONGO_DEFAULT_LIMIT,
      };

      const data = await this.#HelloWorldService.getAll(params);

      return ServiceResponse.success('Hello World', data);
    } catch (error) {
      this.setStatus(StatusCodes.INTERNAL_SERVER_ERROR);
      return ServiceResponse.failure('An unexpected error occurred.', error);
    }
  }
}
