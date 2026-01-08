// import type { GetSignedUrlParams } from "~/features/common/data/models/params/GetSignedUrlParams";
// import type ImagesRepository from "~/features/common/domain/repository/ImagesRepository";

// export class UploadImageUseCase {
//   private imagesRepository: ImagesRepository;

//   constructor(imagesRepository: ImagesRepository) {
//     this.imagesRepository = imagesRepository;
//   }

//   async execute(params: GetSignedUrlParams, data: Uint8Array) {
//     const signedUrl = await this.imagesRepository.getSignedUrl(params);
//     let uploadedUrl = false;

//     if (signedUrl.uploadUrl) {
//       uploadedUrl = await this.uploadImage(signedUrl.uploadUrl, data, params);
//     }

//     return uploadedUrl ? signedUrl.fileUrl : null;
//   }

//   async uploadImage(url: string, data: Uint8Array, params: GetSignedUrlParams) {
//     const contentLength = params.fileSize.toString();

//     const headers = {
//       "Content-Type": `image/${params.fileExtension}`,
//       "Content-Length": contentLength,
//     };

//     return this.imagesRepository.uploadImage(url, data, headers);
//   }
// }
