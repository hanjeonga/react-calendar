import React from "react";
import {
  getDaysInMonth,
  getFirstDayOfMonth,
  isSameDay,
} from "../../utils/date";
import { formatDay } from "../../utils/format";
import { CalendarDay } from "./CalendarDay";
import { LocaleType } from "../../utils/locale";
import { CalendarTheme } from "../../types/calendar.type";
import * as styles from "./Calendar.style";

interface BodyProps {
  year: number;
  month: number;
  selected?: Date | null;
  range?: { startDate: Date | null; endDate: Date | null };
  onSelect: (d: Date) => void;
  locale?: LocaleType;
  theme?: CalendarTheme;
}

export const CalendarBody: React.FC<BodyProps> = ({
  year,
  month,
  selected,
  range,
  onSelect,
  locale = "en",
  theme,
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

  return (
    <div>
      <div className={styles.weekRow}>
        {Array.from({ length: 7 }).map((_, i) => (
          <div key={i}>{formatDay(i, locale)}</div>
        ))}
      </div>
      {weeks.map((week, i) => (
        <div className={styles.dayRow} key={i}>
          {week.map((date, j) => {
            if (!date) return <div key={j} />;
            const isSelected = selected && isSameDay(date, selected);
            const isInRange =
              range?.startDate &&
              range?.endDate &&
              date > range.startDate &&
              date < range.endDate;
            const isRangeStart =
              range?.startDate && isSameDay(date, range.startDate);
            const isRangeEnd = range?.endDate && isSameDay(date, range.endDate);

            return (
              <CalendarDay
                key={j}
                day={date.getDate()}
                isSelected={!!isSelected}
                isInRange={!!isInRange}
                isRangeStart={!!isRangeStart}
                isRangeEnd={!!isRangeEnd}
                onSelect={() => onSelect(date)}
                theme={theme}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};
