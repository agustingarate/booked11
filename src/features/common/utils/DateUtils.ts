import { formatInTimeZone } from 'date-fns-tz';
// eslint-disable-next-line import/order
import { es } from 'date-fns/locale/es';

export function getDayNumber(
  dateString: string | Date,
  timeZone = 'UTC'
): string {
  return formatInTimeZone(dateString, timeZone, 'dd', {
    locale: es,
  });
}

export function getMonthAbbreviation(
  dateString: string | Date,
  timeZone = 'UTC'
): string {
  return formatInTimeZone(dateString, timeZone, 'MMM', {
    locale: es,
  });
}

export function getYear(dateString: string | Date, timeZone = 'UTC'): string {
  return formatInTimeZone(dateString, timeZone, 'yyyy', {
    locale: es,
  });
}

export function getFormattedDate(
  dateString: string | Date,
  timeZone = 'UTC'
): string {
  return formatInTimeZone(dateString, timeZone, 'dd/MM/yyyy', {
    locale: es,
  });
}

export function getTime(dateString: string | Date, timeZone = 'UTC'): string {
  const date = new Date(dateString);
  return formatInTimeZone(date, timeZone, 'HH:mm', {
    locale: es,
  });
}

export function formatToYYYYMMDD(
  date: Date | string,
  timeZone = 'UTC'
): string {
  return formatInTimeZone(date, timeZone, 'yyyy-MM-dd', {
    locale: es,
  });
}

export function toYearMonthString(year: number, month: number): string {
  return `${year}-${String(month).padStart(2, '0')}`;
}

export const completeDateFormatter = (dateString: string): string => {
  const formatted = formatInTimeZone(
    dateString,
    'UTC',
    "EEEE d 'de' MMMM, yyyy",
    {
      locale: es,
    }
  );
  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
};

export const DDMonthYYYYFormatter = (dateString: string): string => {
  const formatted = formatInTimeZone(dateString, 'UTC', "dd 'de' MMMM, yyyy", {
    locale: es,
  });
  return formatted;
};
export const DayMonthFormatter = (dateString: string): string => {
  const formatted = formatInTimeZone(dateString, 'UTC', "dd 'de' MMMM", {
    locale: es,
  });
  return formatted;
};

export const MonthAndYearFormatter = (dateString: string): string => {
  const formatted = formatInTimeZone(dateString, 'UTC', 'MMMM yyyy', {
    locale: es,
  });
  return formatted;
};
