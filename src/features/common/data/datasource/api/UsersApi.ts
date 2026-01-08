// import type { UserModel } from '../../models/UserModel';

// import type { HttpClient } from '@/src/features/common/domain/interfaces/HttpClient';

// interface UsersApi {
//   getUserData(): Promise<UserModel>;
// }

// class UsersApiImpl implements UsersApi {
//   private readonly httpClient: HttpClient;

//   constructor(httpClient: HttpClient) {
//     this.httpClient = httpClient;
//   }

//   async getUserData(): Promise<UserModel> {
//     const response = await this.httpClient.get<UserModel>('/users/me');

//     return response.data ?? {};
//   }
// }

// export { UsersApiImpl };
// export type { UsersApi };
