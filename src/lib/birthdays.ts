import type { Employee } from "../types";

export const birthdayStatusWindowDays = 30;

const collator = new Intl.Collator("vi", { sensitivity: "base" });

const calendarDateFormatter = new Intl.DateTimeFormat("vi-VN", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});

export interface BirthdayEntry {
  employee: Employee;
  daysFromToday: number;
  status: string;
}

export type BirthdayStatusFilter = "all" | "today" | "upcoming" | "past";
export type BirthdaySortMode = "nearest" | "upcoming" | "recent" | "name";

interface CalendarDate {
  day: number;
  month: number;
  year: number;
}

function parseCalendarDate(value: string): CalendarDate | null {
  const isoMatch = /^(\d{4})-(\d{1,2})-(\d{1,2})$/.exec(value);
  const vietnameseMatch = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec(value);

  const year = Number(isoMatch?.[1] ?? vietnameseMatch?.[3]);
  const month = Number(isoMatch?.[2] ?? vietnameseMatch?.[2]);
  const day = Number(isoMatch?.[3] ?? vietnameseMatch?.[1]);

  if (!year || !month || !day) {
    return null;
  }

  const candidate = new Date(year, month - 1, day);
  const isValid =
    candidate.getFullYear() === year &&
    candidate.getMonth() === month - 1 &&
    candidate.getDate() === day;

  return isValid ? { day, month, year } : null;
}

export function formatCalendarDate(value: string) {
  const parsedDate = parseCalendarDate(value);

  if (!parsedDate) {
    return value;
  }

  return calendarDateFormatter.format(
    new Date(parsedDate.year, parsedDate.month - 1, parsedDate.day),
  );
}

function toUtcDay(year: number, month: number, day: number) {
  return Date.UTC(year, month - 1, day);
}

function getDaysFromToday(dob: string, today: Date) {
  const parsedDob = parseCalendarDate(dob);

  if (!parsedDob) {
    return null;
  }

  const todayUtc = toUtcDay(
    today.getFullYear(),
    today.getMonth() + 1,
    today.getDate(),
  );
  const birthdayOffsets = [today.getFullYear() - 1, today.getFullYear(), today.getFullYear() + 1]
    .map((year) => toUtcDay(year, parsedDob.month, parsedDob.day))
    .map((birthdayUtc) => Math.round((birthdayUtc - todayUtc) / 86_400_000));

  return birthdayOffsets.reduce((closest, offset) =>
    Math.abs(offset) < Math.abs(closest) ? offset : closest,
  );
}

export function getBirthdayStatus(daysFromToday: number) {
  if (daysFromToday === 0) {
    return "Hôm nay là sinh nhật";
  }

  if (daysFromToday === 1) {
    return "Ngày mai";
  }

  if (daysFromToday === 2) {
    return "Ngày kia";
  }

  if (daysFromToday > 2) {
    return `Sắp tới sau ${daysFromToday} ngày`;
  }

  if (daysFromToday === -1) {
    return "Hôm qua";
  }

  if (daysFromToday === -2) {
    return "Hôm trước";
  }

  return `${Math.abs(daysFromToday)} ngày trước`;
}

export function isBirthdayWithinStatusWindow(daysFromToday: number) {
  return Math.abs(daysFromToday) <= birthdayStatusWindowDays;
}

export function getBirthdayEntries(
  employees: Employee[],
  today = new Date(),
): BirthdayEntry[] {
  return employees
    .map((employee) => {
      const daysFromToday = getDaysFromToday(employee.dob, today);

      if (daysFromToday === null) {
        return null;
      }

      return {
        employee,
        daysFromToday,
        status: getBirthdayStatus(daysFromToday),
      };
    })
    .filter((entry): entry is BirthdayEntry => entry !== null)
    .sort((first, second) => {
      const distanceDifference =
        Math.abs(first.daysFromToday) - Math.abs(second.daysFromToday);

      if (distanceDifference !== 0) {
        return distanceDifference;
      }

      const directionDifference = first.daysFromToday - second.daysFromToday;

      return (
        directionDifference ||
        collator.compare(first.employee.name, second.employee.name)
      );
    });
}

export function filterAndSortBirthdayEntries(
  entries: BirthdayEntry[],
  query: string,
  statusFilter: BirthdayStatusFilter,
  sortMode: BirthdaySortMode,
) {
  const normalizedQuery = query.trim().toLocaleLowerCase("vi");
  const matchingEntries = entries.filter(({ employee, daysFromToday }) => {
    const matchesQuery =
      !normalizedQuery ||
      employee.name.toLocaleLowerCase("vi").includes(normalizedQuery);
    const matchesStatus =
      statusFilter === "all" ||
      (statusFilter === "today" && daysFromToday === 0) ||
      (statusFilter === "upcoming" &&
        daysFromToday > 0 &&
        daysFromToday <= birthdayStatusWindowDays) ||
      (statusFilter === "past" &&
        daysFromToday < 0 &&
        daysFromToday >= -birthdayStatusWindowDays);

    return matchesQuery && matchesStatus;
  });

  if (sortMode === "nearest") {
    return matchingEntries;
  }

  return [...matchingEntries].sort((first, second) => {
    if (sortMode === "name") {
      return collator.compare(first.employee.name, second.employee.name);
    }

    if (sortMode === "upcoming") {
      const firstIsUpcoming = first.daysFromToday >= 0;
      const secondIsUpcoming = second.daysFromToday >= 0;

      if (firstIsUpcoming !== secondIsUpcoming) {
        return firstIsUpcoming ? -1 : 1;
      }

      return firstIsUpcoming
        ? first.daysFromToday - second.daysFromToday
        : second.daysFromToday - first.daysFromToday;
    }

    const firstIsPast = first.daysFromToday < 0;
    const secondIsPast = second.daysFromToday < 0;

    if (firstIsPast !== secondIsPast) {
      return firstIsPast ? -1 : 1;
    }

    return firstIsPast
      ? second.daysFromToday - first.daysFromToday
      : first.daysFromToday - second.daysFromToday;
  });
}
