import type { BaseResponse } from '@common/data/http/BaseResponse';

/**
 * Represents an HTTP client that can make requests to a server.
 */
interface HttpClient {
  /**
   * Makes a GET request to the specified URL with optional parameters.
   *
   * @param url The URL to make the request to.
   * @param params Optional parameters to include in the request.
   * @returns A promise that resolves to the response data.
   */
  get<T>(url: string, params?: unknown): Promise<BaseResponse<T>>;
  /**
   * Makes a POST request to the specified URL with the provided data.
   *
   * @param url The URL to make the request to.
   * @param data The data to include in the request body.
   * @returns A promise that resolves to the response data.
   */
  post<T>(url: string, data: unknown): Promise<BaseResponse<T>>;
  /**
   * Makes a PUT request to the specified URL with the provided data.
   *
   * @param url The URL to make the request to.
   * @param data The data to include in the request body.
   * @returns A promise that resolves to the response data.
   */
  put<T>(url: string, data: unknown): Promise<BaseResponse<T>>;
  /**
   * Makes a DELETE request to the specified URL with optional parameters.
   *
   * @param url The URL to make the request to.
   * @param params Optional parameters to include in the request.
   * @returns A promise that resolves to the response data.
   */
  delete<T>(url: string, params?: unknown): Promise<BaseResponse<T>>;
  /**
   * Makes a PATCH request to the specified URL with the provided data.
   *
   * @param url The URL to make the request to.
   * @param data The data to include in the request body.
   * @returns A promise that resolves to the response data.
   */
  patch<T>(url: string, data?: unknown): Promise<BaseResponse<T>>;
}

export type { HttpClient };
