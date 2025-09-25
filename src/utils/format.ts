// utils/format.ts
import { monthNames, dayNames, LocaleType } from "./locale";

export function formatMonth(month: number, locale: LocaleType = "en"): string {
  return monthNames[locale][month - 1];
}

export function formatDay(dayIndex: number, locale: LocaleType = "en"): string {
  return dayNames[locale][dayIndex];
}
