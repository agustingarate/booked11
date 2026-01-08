import type { Pagination } from '@common/data/models/Pagination';

interface BaseResponse<T> {
  message?: string;
  data?: T;
  statusCode?: number;
  pagination?: Pagination;
}

export type { BaseResponse };
