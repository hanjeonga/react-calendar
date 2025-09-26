import React from "react";
import { useCalendar } from "../../hooks/useCalendar";
import { CalendarHeader } from "./CalendarHeader";
import { CalendarBody } from "./CalendarBody";
import { CalendarCoreProps, RangeValue } from "../../types/calendar.type";
import * as styles from "./Calendar.css";

export const Calendar: React.FC<CalendarCoreProps> = ({
  mode = "single",
  value,
  onSelect,
  threshold,
  monthFormat = "en",
  theme,
  locale = "en",
}) => {
  const rangeValue =
    value && typeof value === "object" && "startDate" in value
      ? (value as RangeValue)
      : null;
  const singleValue = value instanceof Date ? value : null;

  const initialForCalendar = singleValue ?? rangeValue?.startDate ?? new Date();
  const { year, month, setYear, prevMonth, nextMonth } =
    useCalendar(initialForCalendar);

  const handleDay = (date: Date) => {
    if (mode === "single") {
      onSelect?.(date);
      return;
    }

    // range mode
    if (!rangeValue || (!rangeValue.startDate && !rangeValue.endDate)) {
      onSelect?.({ startDate: date, endDate: null });
      return;
    }

    if (rangeValue.startDate && !rangeValue.endDate) {
      if (date >= rangeValue.startDate) {
        onSelect?.({ startDate: rangeValue.startDate, endDate: date });
      } else {
        onSelect?.({ startDate: date, endDate: rangeValue.startDate });
      }
      return;
    }

    // both set -> new start
    onSelect?.({ startDate: date, endDate: null });
  };

  return (
    <div className={styles.wrapper}>
      <CalendarHeader
        year={year}
        month={month}
        onYearChange={setYear}
        onPrevMonth={prevMonth}
        onNextMonth={nextMonth}
        monthFormat={monthFormat}
      />
      <CalendarBody
        year={year}
        month={month}
        selected={singleValue}
        range={rangeValue}
        onDayClick={handleDay}
        hoverDate={undefined}
        setHoverDate={undefined}
        locale={locale}
        theme={theme}
        threshold={threshold}
      />
    </div>
  );
};
