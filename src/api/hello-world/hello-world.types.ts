import type {HelloWorldDocument} from '@/api/hello-world/hello-world.document';

export interface HelloWorldRepositoryResponse {
  count: number;
  totalCount: number;
  page: number;
  totalPages: number;
  lastItemIndex: number | null;
  data: any;
}
