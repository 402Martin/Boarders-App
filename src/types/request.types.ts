export type QueryParams = { [key: string]: string | number | object | boolean };

export interface IPaginatedResponse {
  currentPage: number;
  hasMorePages: boolean;
  pageSize: number;
  totalPages: number;
  totalRows: number;
}

export interface IQuery {
  sort_by?: string | undefined;
  order_by?: string;
  page?: number;
  page_size?: number;
}
export interface IResponse<T> {
  data: T;
  pagination?: IPaginatedResponse;
}
export const IQueryInititaior = () => ({
  sort_by: '',
  order_by: '',
  page: 1,
  page_size: 20,
});