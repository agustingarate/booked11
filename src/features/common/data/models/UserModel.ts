// import { DDMonthYYYYFormatter } from '../../utils/DateUtils';
// import { firstLetterToUpperCase, getInitials } from '../../utils/Utils';

// import type { Role } from './Types';

// interface UserModel {
//   id?: number;
//   email?: string;
//   firstName?: string;
//   middleName?: string | undefined;
//   lastName?: string;
//   role?: Role;
//   profilePicture?: string;
//   governmentId?: string | undefined;
//   birthDate?: string;
//   addressLine1?: string | null;
//   addressLine2?: string;
//   city?: string;
//   postalCode?: string;
//   province?: string;
//   citizenship?: string | null;
//   mobilePhone?: string | null;
//   getFormattedBirthDate?: () => string;
//   getFormattedName?: () => string;
//   getFormattedLastName?: () => string;
//   getInitials?: () => string;
// }

// const createUserModel = (user: UserModel) => {
//   return {
//     ...user,
//     getFormattedBirthDate: () => {
//       return DDMonthYYYYFormatter(user.birthDate ?? '');
//     },
//     getFormattedName: () => {
//       return firstLetterToUpperCase(user.firstName ?? '');
//     },
//     getFormattedLastName: () => {
//       return firstLetterToUpperCase(user.lastName ?? '');
//     },
//     getInitials: () => {
//       return getInitials(user.firstName ?? '', user.lastName ?? '');
//     },
//   };
// };

// export { createUserModel };
// export type { UserModel };
