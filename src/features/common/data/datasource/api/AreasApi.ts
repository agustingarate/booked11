// import type { AreaModel } from '../../models/AreaModel';

// import type { HttpClient } from '@/src/features/common/domain/interfaces/HttpClient';

// interface AreasApi {
//   getAreas(): Promise<AreaModel[]>;
// }

// class AreasApiImpl implements AreasApi {
//   private readonly httpClient: HttpClient;

//   constructor(httpClient: HttpClient) {
//     this.httpClient = httpClient;
//   }

//   async getAreas(): Promise<AreaModel[]> {
//     const response = await this.httpClient.get<AreaModel[]>('/areas', {
//       page: 1,
//       limit: 10000,
//     });
//     return response.data ?? [];
//   }
// }

// export { AreasApiImpl };
// export type { AreasApi };
