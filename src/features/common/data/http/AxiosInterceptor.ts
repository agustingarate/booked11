import type {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import { AxiosError } from 'axios';

import { useAuthStore } from '@features/auth/domain/store/authStore';

export class AxiosInterceptor {
  static setup(instance: AxiosInstance): void {
    instance.interceptors.request.use((request: InternalAxiosRequestConfig) => {
      if (__DEV__) {
        console.log(
          `📤 Service ${request.method?.toUpperCase()} ${request.url}`
        );
        if (request.data) {
          console.log(
            `📤 Service body:`,
            JSON.stringify(request.data, null, 2)
          );
        }
        if (request.params) {
          console.log(
            `📤 Service params:`,
            JSON.stringify(request.params, null, 2)
          );
        }
      }
      return request;
    });

    instance.interceptors.response.use(
      (response: AxiosResponse) => {
        if (__DEV__) {
          console.log(
            `✅ ${response.config.method?.toUpperCase()} ${response.config.url}`
          );
          console.log(`✅ Status: ${response.status}`);
          console.log(`✅ Response: ${JSON.stringify(response.data, null, 2)}`);
        }
        return response;
      },
      (error: unknown) => {
        if (error instanceof AxiosError && error.response?.status === 401) {
          // Si recibimos un 401 (no autorizado), limpiamos la sesión
          useAuthStore.getState().clearAuthData();
        }

        if (__DEV__ && error instanceof AxiosError) {
          if (error.response) {
            console.log(
              `❌ ${error.config?.method?.toUpperCase()} ${error.config?.url}`
            );
            console.log(`❌ Status: ${error.response.status}`);
            console.log(
              `❌ Response: ${JSON.stringify(error.response.data, null, 2)}`
            );
          } else {
            console.log(`❌ Network Error:`, error.message);
          }
        }
        return Promise.reject(
          error instanceof Error ? error : new Error('Unknown error')
        );
      }
    );
  }
}
