export interface IRootResponse<T> {
  status: boolean;
  message: string;
  response: T;
}
