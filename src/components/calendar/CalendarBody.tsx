import React from "react";
import "./Calendar.css";
import {
  getDaysInMonth,
  getFirstDayOfMonth,
  isSameDay,
  isWithinRange,
} from "../../utils/date";
import { formatDay } from "../../utils/format";
import { RangeValue, CalendarCoreProps } from "../../types/calendar.type";
import { CalendarDay } from "./CalendarDay";

interface Props {
  year: number;
  month: number; // 1..12
  selected?: Date | null;
  range?: RangeValue | null;
  onDayClick: (d: Date) => void;
  hoverDate?: Date | null;
  setHoverDate?: (d: Date | null) => void;
  locale?: "en" | "ko" | "number";
  theme?: CalendarCoreProps["theme"];
  threshold?: number;
}

export const CalendarBody: React.FC<Props> = ({
  year,
  month,
  selected,
  range,
  onDayClick,
  hoverDate,
  setHoverDate,
  locale = "en",
  theme,
  threshold,
}) => {
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);

  const weeks: (Date | null)[][] = [];
  let current: (Date | null)[] = Array(firstDay).fill(null);

  for (let d = 1; d <= daysInMonth; d++) {
    current.push(new Date(year, month - 1, d));
    if (current.length === 7) {
      weeks.push(current);
      current = [];
    }
  }
  if (current.length) {
    while (current.length < 7) current.push(null);
    weeks.push(current);
  }

  const inHoverRange = (date: Date) => {
    if (range?.startDate && !range?.endDate && hoverDate) {
      const s = range.startDate;
      const e = hoverDate;
      const start = s < e ? s : e;
      const end = s < e ? e : s;
      return date >= start && date <= end;
    }
    return false;
  };

  const isDisabled = (date: Date) => {
    if (!range?.startDate || threshold == null) return false;
    const max = new Date(range.startDate);
    max.setDate(max.getDate() + threshold);
    return date > max;
  };

  return (
    <div>
      <div className="weekRow">
        {Array.from({ length: 7 }).map((_, i) => (
          <div key={i}>{formatDay(i, locale)}</div>
        ))}
      </div>

      <div className="daysGrid">
        {weeks.flat().map((date, idx) => {
          if (!date) return <div key={idx} />;
          const selectedSingle = selected && isSameDay(date, selected);
          const inRange =
            range && isWithinRange(date, range.startDate, range.endDate);
          const hoverIn = inHoverRange(date);
          const isRangeStart =
            range?.startDate && isSameDay(date, range.startDate);
          const isRangeEnd = range?.endDate && isSameDay(date, range.endDate);
          const disabled = isDisabled(date);

          return (
            <CalendarDay
              key={idx}
              date={date}
              day={date.getDate()}
              isSelected={!!selectedSingle}
              isInRange={!!inRange || !!hoverIn}
              isRangeStart={!!isRangeStart}
              isRangeEnd={!!isRangeEnd}
              onClick={() => !disabled && onDayClick(date)}
              onMouseEnter={() => setHoverDate && setHoverDate(date)}
              onMouseLeave={() => setHoverDate && setHoverDate(null)}
              disabled={disabled}
              theme={theme}
            />
          );
        })}
      </div>
    </div>
  );
};
