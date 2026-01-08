// import { useCallback, useEffect, useMemo, useRef, useState } from "react";
// import { useIsFocused } from "@react-navigation/native";

// import type { CalendarMarking, CalendarMarkings } from "@sanlorenzo/ui";

// import type { TimeslotModel } from "~/features/common/data/models/TimeslotModel";
// import {
//   formatToYYYYMMDD,
//   toYearMonthString,
// } from "~/features/common/utils/DateUtils";

// interface UseCalendarSelectorParams {
//   selectedColor: string;
//   getTimeslots: (
//     startDate: string,
//     endDate: string,
//   ) => Promise<TimeslotModel[]>;
//   enabled?: boolean;
// }

// export interface CalendarSelectorResult {
//   today: Date;
//   currentMonth: string;
//   onMonthChange: (data: { year: number; month: number }) => void;
//   markedDates: CalendarMarkings;
//   timeslots: TimeslotModel[];
//   selectedDate: string | null;
//   setSelectedDate: (date: string | null) => void;
//   loading: boolean;
// }

// export const useCalendarSelector = ({
//   getTimeslots,
//   enabled = true,
//   selectedColor,
// }: UseCalendarSelectorParams): CalendarSelectorResult => {
//   const isFocused = useIsFocused();
//   const today = useRef(new Date());

//   const [currentMonth, setCurrentMonth] = useState(() => {
//     return toYearMonthString(
//       today.current.getFullYear(),
//       today.current.getMonth() + 1,
//     );
//   });

//   const [timeslotsByMonth, setTimeslotsByMonth] = useState<
//     Record<string, TimeslotModel[]>
//   >({});
//   const [timeslots, setTimeslots] = useState<TimeslotModel[]>([]);
//   const [selectedDate, setSelectedDate] = useState<string | null>(null);
//   const [loading, setLoading] = useState(false);

//   const getAvailableDatesForCalendar = useCallback(
//     (slots: TimeslotModel[]): CalendarMarkings => {
//       const result: Record<string, CalendarMarking> = {};

//       slots.forEach((slot) => {
//         if (!slot.date || !slot.timeslots || slot.timeslots.length === 0)
//           return;
//         const dateParts = slot.date.split("T");
//         const dateStr = dateParts[0];
//         if (!dateStr) return;

//         const marking: CalendarMarking = {
//           disabled: false,
//           selected: false,
//           selectedColor,
//           customStyles: {
//             container: { borderRadius: 5 },
//           },
//         };
//         result[dateStr] = marking;
//       });

//       return result as CalendarMarkings;
//     },
//     [selectedColor],
//   );

//   const fetchTimeslots = useCallback(async () => {
//     setLoading(true);
//     const [year, month] = currentMonth.split("-");
//     const now = new Date();
//     const isCurrentMonth =
//       Number(year) === now.getFullYear() &&
//       Number(month) === now.getMonth() + 1;

//     let start: Date;
//     if (isCurrentMonth) {
//       start = new Date(
//         now.getFullYear(),
//         now.getMonth(),
//         now.getDate(),
//         8,
//         0,
//         0,
//         0,
//       );
//     } else {
//       start = new Date(Number(year), Number(month) - 1, 1, 8, 0, 0, 0);
//     }

//     const end = new Date(Number(year), Number(month), 1, 8, 0, 0, 0);
//     const startDate = formatToYYYYMMDD(start) || "";
//     const endDate = formatToYYYYMMDD(end) || "";

//     try {
//       const result = await getTimeslots(startDate, endDate);

//       if (result.length === 0) {
//         setLoading(false);
//         return;
//       }

//       setTimeslots(result);
//       setTimeslotsByMonth((prev) => ({ ...prev, [currentMonth]: result }));
//     } catch (error) {
      
//       console.warn("Error fetching timeslots:", error);
//     } finally {
//       setLoading(false);
//     }
//   }, [currentMonth, getTimeslots]);

//   useEffect(() => {
//     if (!enabled) return;
//     if (isFocused) {
//       const cached = timeslotsByMonth[currentMonth];
//       if (!cached) {
//         void fetchTimeslots();
//       } else {
//         setTimeslots(cached);
//       }
//     }
//   }, [currentMonth, isFocused, enabled, timeslotsByMonth, fetchTimeslots]);

//   const onMonthChange = (monthObj: { year: number; month: number }) => {
//     setCurrentMonth(toYearMonthString(monthObj.year, monthObj.month));
//   };

//   const markedDates = useMemo<CalendarMarkings>(() => {
//     const newMarkedDates: Record<string, CalendarMarking> = {
//       ...getAvailableDatesForCalendar(timeslots),
//     };

//     if (selectedDate) {
//       const existingMarking: CalendarMarking | undefined =
//         newMarkedDates[selectedDate];
//       if (existingMarking) {
//         const updatedMarking: CalendarMarking = {
//           disabled: existingMarking.disabled,
//           selected: true,
//           selectedColor: selectedColor,
//           customStyles: {
//             container: { borderRadius: 6 },
//           },
//         };
//         newMarkedDates[selectedDate] = updatedMarking;
//       }
//     }
//     return newMarkedDates as CalendarMarkings;
//   }, [timeslots, selectedColor, selectedDate, getAvailableDatesForCalendar]);

//   const result: CalendarSelectorResult = {
//     today: today.current,
//     currentMonth,
//     onMonthChange,
//     markedDates,
//     timeslots,
//     selectedDate,
//     setSelectedDate,
//     loading,
//   };

//   return result;
// };
