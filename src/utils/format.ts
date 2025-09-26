import { LocaleType } from "./locale";

export const formatMonth = (idx0: number, locale: LocaleType = "en") => {
  if (locale === "ko")
    return [
      "1월",
      "2월",
      "3월",
      "4월",
      "5월",
      "6월",
      "7월",
      "8월",
      "9월",
      "10월",
      "11월",
      "12월",
    ][idx0];
  if (locale === "number") return String(idx0 + 1);
  return [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ][idx0];
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
