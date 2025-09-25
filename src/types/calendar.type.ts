import { LocaleType } from "../utils/locale";

export interface CalendarTheme {
  daySelectedBg?: string;
  daySelectedColor?: string;
  daySelectedRadius?: string;
  rangeBg?: string;
  rangeColor?: string;
}

export interface CalendarBaseProps {
  value?: Date;
  onChange?: (date: Date) => void;
  monthFormat?: LocaleType;
  customInput?: React.ReactNode;
  customIcon?: React.ReactNode;
  theme?: CalendarTheme;
}

export interface CalendarRangeProps {
  startDate?: Date;
  endDate?: Date;
  onChange?: (range: { startDate: Date; endDate: Date }) => void;
  threshold?: number;
  monthFormat?: LocaleType;
  customInput?: React.ReactNode;
  customIcon?: React.ReactNode;
  theme?: CalendarTheme;
}
