// import type { NotificationModel } from '../../models/NotificationModel';

// import type { HttpClient } from '@/src/features/common/domain/interfaces/HttpClient';

// interface NotificationsApi {
//   getNumberOfUnreadNotifications(): Promise<number>;
// }

// class NotificationsApiImpl implements NotificationsApi {
//   private readonly httpClient: HttpClient;

//   constructor(httpClient: HttpClient) {
//     this.httpClient = httpClient;
//   }

//   async getNumberOfUnreadNotifications(): Promise<number> {
//     const response = await this.httpClient.get<NotificationModel[]>(
//       `/notifications`,
//       {
//         page: 1,
//         read: false,
//         limit: 1,
//       }
//     );
//     return response.pagination?.total ?? 0;
//   }
// }

// export { NotificationsApiImpl };
// export type { NotificationsApi };
