import React from "react";
import { LocaleType } from "../utils/locale";

export type CalendarMode = "single" | "range";

export interface CalendarTheme {
  daySelectedBg?: string;
  daySelectedColor?: string;
  daySelectedRadius?: string;
  rangeBg?: string;
  rangeColor?: string;
  hoverBg?: string;
}

export type RangeValue = {
  startDate: Date | null;
  endDate: Date | null;
};

export interface CalendarCoreProps {
  mode?: CalendarMode;
  value?: Date | RangeValue | null;
  onSelect?: (value: Date | RangeValue | null) => void;
  threshold?: number;
  monthFormat?: LocaleType;
  theme?: CalendarTheme;
  locale?: LocaleType;
}

export interface DatePickerProps {
  value?: Date | null;
  onChange?: (date: Date | null) => void;
  monthFormat?: LocaleType;
  customInput?: React.ReactNode;
  customIcon?: React.ReactNode | string; // React node or string path to svg
  theme?: CalendarTheme;
  displayMode?: "dropdown" | "modal";
  dateFormat?: "YYYY.MM.DD" | "YYYY-MM-DD" | "MM/DD/YYYY";
  locale?: LocaleType;
}

export interface RangePickerProps {
  startDate?: Date | null;
  endDate?: Date | null;
  onChange?: (range: RangeValue) => void;
  separator?: "~" | "-";
  monthFormat?: LocaleType;
  customInput?: React.ReactNode;
  customIcon?: React.ReactNode | string;
  theme?: CalendarTheme;
  displayMode?: "dropdown" | "modal";
  threshold?: number;
  dateFormat?: "YYYY.MM.DD" | "YYYY-MM-DD" | "MM/DD/YYYY";
  locale?: LocaleType;
}
