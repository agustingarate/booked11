// export type OrderDirection = "asc" | "desc";

// export type Role = "ADMIN" | "USER";

// export type AreaName =
//   | "MUSEUM"
//   | "PET_CARE"
//   | "DRIVERS_LICENSE"
//   | "POOL"
//   | "TENIS"
//   | "PADDLE";

// export type EventType = "MUSEUM" | "CASTRATION" | "VACCINATION";

// export type EventTypeStatus = "PUBLISHED" | "DRAFT" | "CANCELED";

// export type TicketType =
//   | "GENERAL"
//   | "INSTRUCTOR"
//   | "STUDENT"
//   | "RESIDENT"
//   | "INDIVIDUAL_SUBSCRIPTION"
//   | "FAMILY_SUBSCRIPTION"
//   | "UNDER_12"
//   | "UNDER_6"
//   | "RETIRED"
//   | "DISABLED";

// export type MuseumBookingType = "PRIVATE" | "EDUCATIONAL";

// export enum AnimalHealthBookingTypeEnum {
//   VACCINATION = "VACCINATION",
//   DEWORMING = "DEWORMING",
//   CASTRATION = "CASTRATION",
// }

// export enum SportsActivityBookingTypeEnum {
//   PADDLE = "PADDLE",
//   TENNIS = "TENNIS",
// }

// export enum PoolBookingTypeEnum {
//   POOL = "POOL",
// }

// export type SportsActivityBookingType =
//   keyof typeof SportsActivityBookingTypeEnum; //todo change

// export type AnimalHealthBookingType = keyof typeof AnimalHealthBookingTypeEnum;

// export type PoolBookingType = keyof typeof PoolBookingTypeEnum;
// export type SportsBookingType = PoolBookingType | SportsActivityBookingType;

// export type CreditType = "SPORTS" | "MUSEUM" | "POOL";

// export type BookingType =
//   | MuseumBookingType
//   | AnimalHealthBookingType
//   | SportsBookingType;

// export type PetType = "CAT" | "DOG" | "OTHER";

// export type AnimalAvailabilitiesOrderBy =
//   | "id"
//   | "startDate"
//   | "type"
//   | "neighborhood"
//   | "address"
//   | "status";

// export type AnimalAvailabilitiesOrderDirection = OrderDirection;

// export type BookingStatus =
//   | "PENDING"
//   | "CONFIRMED"
//   | "REDEEMED"
//   | "CANCELED"
//   | "USER_CANCELED"
//   | "ABORTED";

// export type PaymentStatus = "PENDING" | "COMPLETED" | "FAILED" | "CANCELED";

// export type PaymentMethod =
//   | "CREDIT_CARD"
//   | "DEBIT_CARD"
//   | "CASH"
//   | "MACRO_CLICK_PAGO"
//   | "FREE_DATE";

// export type TimeFilter = "future" | "past";

// export type ClaimStatus = "PENDING" | "RESOLVED" | "USER_CANCELED";

// export type ClaimsOrderBy = "createdAt";

// export type PetTyp = "CAT" | "DOG" | "OTHER";

// export type NewsOrderBy =
//   | "author"
//   | "date"
//   | "id"
//   | "include"
//   | "modified"
//   | "parent"
//   | "relevance"
//   | "slug"
//   | "include_slugs"
//   | "title";

// export type ProfileModifyUserFlow = "changeEmail" | "changePassword";
