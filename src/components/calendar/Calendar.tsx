import React from "react";
import { useCalendar } from "../../hooks/useCalendar";
import { CalendarHeader } from "./CalendarHeader";
import { CalendarBody } from "./CalendarBody";
import { LocaleType } from "../../utils/locale";
import { CalendarTheme } from "../../types/calendar.type";

interface CalendarProps {
  value?: Date | null;
  onSelect: (date: Date) => void;
  locale?: LocaleType;
  theme?: CalendarTheme;
  range?: { startDate: Date | null; endDate: Date | null };
}

export const Calendar: React.FC<CalendarProps> = ({
  value,
  onSelect,
  locale = "en",
  theme,
  range,
}) => {
  const { year, month, setYear, prevMonth, nextMonth } = useCalendar(value);

  return (
    <div>
      <CalendarHeader
        year={year}
        month={month}
        onYearChange={setYear}
        onPrevMonth={prevMonth}
        onNextMonth={nextMonth}
        locale={locale}
      />
      <CalendarBody
        year={year}
        month={month}
        selected={value}
        onSelect={onSelect}
        locale={locale}
        theme={theme}
        range={range}
      />
    </div>
  );
};
