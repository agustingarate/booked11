// import type EventsRepository from "../../domain/repository/EventsRepository";
// import type { EventsApi } from "../datasource/api/EventsApi";
// import type { EventModel } from "../models/EventModel";
// import type { TimeslotModel } from "../models/TimeslotModel";
// import type { BookingType } from "../models/Types";

// class EventsRepositoryImpl implements EventsRepository {
//   private readonly api: EventsApi;

//   constructor(api: EventsApi) {
//     this.api = api;
//   }

//   async getTimeslots(
//     eventId: number,
//     startDate: string,
//     endDate: string,
//     bookingType: BookingType,
//   ): Promise<TimeslotModel[]> {
//     return this.api.getTimeslots(eventId, startDate, endDate, bookingType);
//   }

//   async getEvents(areaId: number, scheduleId?: number): Promise<EventModel[]> {
//     return this.api.getAllEvents(areaId, scheduleId);
//   }
// }

// export { EventsRepositoryImpl };
