export type LocaleType = "en" | "ko" | "number";

export const monthNames: Record<LocaleType, string[]> = {
  en: [
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
  ],
  ko: [
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
  ],
  number: Array.from({ length: 12 }, (_, i) => String(i + 1)),
};

export const dayNames: Record<LocaleType, string[]> = {
  en: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  ko: ["일", "월", "화", "수", "목", "금", "토"],
  number: ["0", "1", "2", "3", "4", "5", "6"],
};
