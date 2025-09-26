// utils/date.ts
export const getDaysInMonth = (year: number, month: number): number => {
  // month: 1..12
  return new Date(year, month, 0).getDate();
};

export const getFirstDayOfMonth = (year: number, month: number): number => {
  // month: 1..12
  return new Date(year, month - 1, 1).getDay();
};

export const isSameDay = (a: Date, b: Date) =>
  a.getFullYear() === b.getFullYear() &&
  a.getMonth() === b.getMonth() &&
  a.getDate() === b.getDate();

export const daysBetween = (a: Date, b: Date) => {
  const da = new Date(a.getFullYear(), a.getMonth(), a.getDate()).getTime();
  const db = new Date(b.getFullYear(), b.getMonth(), b.getDate()).getTime();
  return Math.round(Math.abs(da - db) / 86400000);
};

export const isWithinRange = (
  date: Date,
  start: Date | null,
  end: Date | null
) => {
  if (!start || !end) return false;
  const t = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  ).getTime();
  const s = new Date(
    start.getFullYear(),
    start.getMonth(),
    start.getDate()
  ).getTime();
  const e = new Date(
    end.getFullYear(),
    end.getMonth(),
    end.getDate()
  ).getTime();
  return t >= s && t <= e;
};
