// import type { GetSignedUrlParams } from "../../models/params/GetSignedUrlParams";
// import type { SignedUrl } from "../../models/SignedUrl";
// import type { HttpClient } from "~/features/common/domain/interfaces/HttpClient";
// import type { S3FilesClient } from "~/features/common/domain/interfaces/S3FilesClient";

// interface ImagesApi {
//   getSignedUrl(params: GetSignedUrlParams): Promise<SignedUrl>;

//   uploadImage(
//     url: string,
//     data: Uint8Array,
//     headers: Record<string, string>,
//   ): Promise<boolean>;
// }

// class ImagesApiImpl implements ImagesApi {
//   private readonly httpClient: HttpClient;
//   private readonly s3FilesClient: S3FilesClient;

//   constructor(httpClient: HttpClient, s3FilesClient: S3FilesClient) {
//     this.httpClient = httpClient;
//     this.s3FilesClient = s3FilesClient;
//   }

//   async getSignedUrl(params: GetSignedUrlParams): Promise<SignedUrl> {
//     const response = await this.httpClient.post<SignedUrl>(
//       "/file-uploads/image-upload-url",
//       {
//         ...params,
//       },
//     );
//     return response.data ?? {};

//     // return {
//     //   uploadUrl: "https://www.google.com",
//     //   expiresIn: 1234567890,
//     //   fileUrl: "https://www.google.com",
//     // };
//   }

//   async uploadImage(
//     url: string,
//     data: Uint8Array,
//     headers: Record<string, string>,
//   ): Promise<boolean> {
//     return this.s3FilesClient.put(url, data, headers);
//     // return true;
//   }
// }

// export { ImagesApiImpl };
// export type { ImagesApi };
