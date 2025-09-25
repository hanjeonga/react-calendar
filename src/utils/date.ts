// utils/date.ts

/** 같은 날짜인지 비교 */
export function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

/** 월의 일 수 */
export function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month, 0).getDate();
}

/** 해당 월의 첫 요일 (0=일, 1=월 …) */
export function getFirstDayOfMonth(year: number, month: number): number {
  return new Date(year, month - 1, 1).getDay();
}

/** 200년 범위 (기준연도 -100 ~ +100) */
export function getYearRange(centerYear: number): number[] {
  return Array.from({ length: 201 }, (_, i) => centerYear - 100 + i);
}
