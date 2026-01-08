// import type { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
// import axios from 'axios';

// import type { S3BaseResponse } from './S3BaseResponse';

// import type { S3FilesClient } from '@/src/features/common/domain/interfaces/S3FilesClient';

// class AxiosS3FilesClient implements S3FilesClient {
//   private axiosInstance: AxiosInstance;
//   private readonly genericErrorMessage: string =
//     'No se ha podido cargar la imagen. Por favor, intentalo nuevamente.';

//   constructor(baseURL: string) {
//     this.axiosInstance = axios.create({
//       baseURL,
//     });
//   }

//   private onError(
//     axiosError: AxiosError<S3BaseResponse>
//   ): void | PromiseLike<void> {
//     throw new Error(axiosError.message);
//   }

//   private async handleResponse(
//     responsePromise: Promise<AxiosResponse<S3BaseResponse>>
//   ): Promise<boolean> {
//     const response = await responsePromise.catch(
//       (error: AxiosError<S3BaseResponse>) => this.onError(error)
//     );

//     if (!response) {
//       throw new Error(this.genericErrorMessage);
//     }
//     return true;
//   }

//   async put(
//     url: string,
//     data: unknown,
//     headers: Record<string, string>
//   ): Promise<boolean> {
//     return this.handleResponse(
//       this.axiosInstance.put<S3BaseResponse>(url, data, {
//         headers: {
//           ...headers,
//         },
//       })
//     );
//   }
// }

// export { AxiosS3FilesClient };
