// import type { ClaimSchema } from "@sanlorenzo/validators";

// import type { ClaimStatus } from "./Types";
// import type { CategoryModel } from "~/features/claims/data/models/CategoryModel";
// import { getFormattedDate } from "../../utils/DateUtils";

// interface ClaimCommentModel {
//   id?: number;
//   content?: string;
//   createdAt?: string;
//   updatedAt?: string;
// }

// export interface ClaimModel extends Partial<ClaimSchema> {
//   id?: number;
//   status?: ClaimStatus;
//   userId?: number;
//   createdAt?: string;
//   updatedAt?: string;
//   claimComments?: ClaimCommentModel[];
//   response?: string;
//   claimCategory?: Partial<Omit<CategoryModel, "id">>;
//   claimSubCategory?: Partial<Omit<CategoryModel, "id">>;
//   getFormattedCreatedAt?: () => string;
//   getFormattedUpdatedAt?: () => string;
//   getMostRecentComment?: () => ClaimCommentModel | undefined;
// }

// const createClaimsList = (claims: ClaimModel[]): ClaimModel[] => {
//   return claims.map((claim) => createClaimModel(claim));
// };

// const createClaimModel = (data: ClaimModel): ClaimModel => ({
//   ...data,
//   getFormattedCreatedAt: () => {
//     return getFormattedDate(data.createdAt ?? "");
//   },
//   getFormattedUpdatedAt: () => {
//     return getFormattedDate(data.updatedAt ?? "");
//   },
//   getMostRecentComment: () => {
//     return data.claimComments?.[0];
//   },
// });

// export { createClaimModel, createClaimsList };
