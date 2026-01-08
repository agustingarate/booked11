import type { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import axios from 'axios';

import type { HttpClient } from '@common/domain/interfaces/HttpClient';

import { AxiosInterceptor } from '@common/data/http/AxiosInterceptor';
import type { BaseResponse } from '@common/data/http/BaseResponse';
import type { ErrorResponse } from '@common/data/http/ErrorResponse';

class AxiosHttpClient implements HttpClient {
  private axiosInstance: AxiosInstance;
  private readonly genericErrorMessage: string =
    'Error de conexión. Por favor, intentá nuevamente más tarde.';

  constructor(baseURL: string, private getToken: () => string | null) {
    this.axiosInstance = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    AxiosInterceptor.setup(this.axiosInstance); //TODO: Store
  }

  private getHeaders(): Record<string, string> {
    const token = this.getToken();
    return token ? { Authorization: `Bearer ${token}` } : {};
  }

  private isErrorResponse(obj: unknown): obj is ErrorResponse {
    return (
      typeof obj === 'object' &&
      obj !== null &&
      'error' in obj &&
      'message' in obj &&
      'statusCode' in obj
    );
  }

  private onError<T>(
    axiosError: AxiosError<BaseResponse<T>>
  ): void | PromiseLike<void> {
    if (axiosError.response?.data.message) {
      throw Error(axiosError.response.data.message);
    } else if (axiosError.message) {
      throw Error(axiosError.message);
    } else {
      throw Error(this.genericErrorMessage);
    }
  }

  private async handleResponse<T>(
    responsePromise: Promise<AxiosResponse<BaseResponse<T>>>
  ): Promise<BaseResponse<T>> {
    const response = await responsePromise.catch(
      (error: AxiosError<BaseResponse<T>>) => this.onError<T>(error)
    );

    if (!response) {
      throw new Error(this.genericErrorMessage);
    }
    return response.data;
  }

  get<T>(url: string, params?: unknown): Promise<BaseResponse<T>> {
    const headers = this.getHeaders();
    return this.handleResponse<T>(
      this.axiosInstance.get<BaseResponse<T>>(url, { params, headers })
    );
  }

  post<T>(url: string, data: unknown): Promise<BaseResponse<T>> {
    const headers = this.getHeaders();
    return this.handleResponse<T>(
      this.axiosInstance.post<BaseResponse<T>>(url, data, { headers })
    );
  }

  put<T>(url: string, data: unknown): Promise<BaseResponse<T>> {
    const headers = this.getHeaders();
    return this.handleResponse<T>(
      this.axiosInstance.put<BaseResponse<T>>(url, data, { headers })
    );
  }

  patch<T>(url: string, data?: unknown): Promise<BaseResponse<T>> {
    const headers = this.getHeaders();
    return this.handleResponse<T>(
      this.axiosInstance.patch<BaseResponse<T>>(url, data, { headers })
    );
  }

  delete<T>(url: string, params?: unknown): Promise<BaseResponse<T>> {
    const headers = this.getHeaders();
    return this.handleResponse<T>(
      this.axiosInstance.delete<BaseResponse<T>>(url, { params, headers })
    );
  }
}

export { AxiosHttpClient };
