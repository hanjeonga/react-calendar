import { LocaleType, MONTHS } from "./locale";

export const formatMonth = (monthIndex: number, locale: LocaleType) => {
  return MONTHS[locale][monthIndex];
};

export const formatDay = (dayIndex: number, locale: LocaleType = "en") => {
  if (locale === "ko")
    return ["일", "월", "화", "수", "목", "금", "토"][dayIndex];
  if (locale === "number") return String(dayIndex);
  return ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"][dayIndex];
};

export const formatDate = (
  date: Date | null,
  format: "YYYY.MM.DD" | "YYYY-MM-DD" | "MM/DD/YYYY" = "YYYY.MM.DD"
) => {
  if (!date) return "";
  const Y = date.getFullYear();
  const M = String(date.getMonth() + 1).padStart(2, "0");
  const D = String(date.getDate()).padStart(2, "0");
  switch (format) {
    case "YYYY-MM-DD":
      return `${Y}-${M}-${D}`;
    case "MM/DD/YYYY":
      return `${M}/${D}/${Y}`;
    default:
      return `${Y}.${M}.${D}`;
  }
};
