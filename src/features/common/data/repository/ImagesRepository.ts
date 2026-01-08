// import type ImagesRepository from "../../domain/repository/ImagesRepository";
// import type { ImagesApi } from "../datasource/api/ImagesApi";
// import type { GetSignedUrlParams } from "../models/params/GetSignedUrlParams";
// import type { SignedUrl } from "../models/SignedUrl";

// class ImagesRepositoryImpl implements ImagesRepository {
//   private readonly api: ImagesApi;

//   constructor(api: ImagesApi) {
//     this.api = api;
//   }

//   async getSignedUrl(params: GetSignedUrlParams): Promise<SignedUrl> {
//     return this.api.getSignedUrl(params);
//   }

//   async uploadImage(
//     url: string,
//     data: Uint8Array,
//     headers: Record<string, string>,
//   ): Promise<boolean> {
//     return this.api.uploadImage(url, data, headers);
//   }
// }

// export { ImagesRepositoryImpl };
