export interface IRootResponse<T> {
  status: boolean;
  message: string;
  data: T;
}
