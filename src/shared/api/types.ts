export type BasicResponse<T> = {
  success: boolean;
  products: T;
  message: string;
};
