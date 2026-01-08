// import type { EventModel } from '../../models/EventModel';
// import type { TimeslotModel } from '../../models/TimeslotModel';
// import type { BookingType } from '../../models/Types';

// import type { AxiosHttpClient as HttpClient } from '@/src/features/common/data/http/HttpClient';

// // const isAnimalHealthBooking = (
// //   bookingType: BookingType,
// // ): bookingType is AnimalHealthBookingType => {
// //   return (
// //     bookingType === "VACCINATION" ||
// //     bookingType === "CASTRATION" ||
// //     bookingType === "DEWORMING"
// //   );
// // };

// interface EventsApi {
//   getAllEvents(areaId: number, scheduleId?: number): Promise<EventModel[]>;
//   getTimeslots(
//     eventId: number,
//     startDate: string,
//     endDate: string,
//     bookingType: BookingType
//   ): Promise<TimeslotModel[]>;
// }

// class EventsApiImpl implements EventsApi {
//   private readonly httpClient: HttpClient;

//   constructor(httpClient: HttpClient) {
//     this.httpClient = httpClient;
//   }

//   async getAllEvents(
//     areaId: number,
//     scheduleId?: number
//   ): Promise<EventModel[]> {
//     const response = await this.httpClient.get<EventModel[]>('/events', {
//       areaId,
//       scheduleId,
//       page: 1,
//       limit: 1000,
//     });

//     return response.data ?? [];
//   }

//   async getTimeslots(
//     eventId: number,
//     startDate: string,
//     endDate: string,
//     bookingType: BookingType
//   ): Promise<TimeslotModel[]> {
//     const response = await this.httpClient.get<TimeslotModel[]>(
//       `/events/${eventId}/timeslots`,
//       {
//         startDate,
//         endDate,
//         bookingType,
//       }
//     );

//     return response.data ?? [];

//     // console.log("bookingType", bookingType);
//     // console.log("eventId", eventId);
//     // console.log("startDate", startDate);
//     // console.log("endDate", endDate);
//     // await new Promise((resolve) => setTimeout(resolve, 800));

//     // // Retornar mock específico según el tipo de booking
//     // if (isAnimalHealthBooking(bookingType)) {
//     //   return AnimalCareTimeslotMock;
//     // }

//     // return TimeslotModelMock;
//   }
// }

// export { EventsApiImpl };
// export type { EventsApi };
