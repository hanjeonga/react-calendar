import React, { useRef, useState } from "react";
import { Calendar } from "./Calendar";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { useRangeSelect } from "../../hooks/useRangeSelect";
import * as styles from "./Calendar.style";
import { CalendarRangeProps } from "../../types/calendar.type";

export const RangePicker: React.FC<CalendarRangeProps> = ({
  startDate,
  endDate,
  onChange,
  threshold,
  monthFormat,
  customInput,
  customIcon,
  theme,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  useOutsideClick(wrapperRef, () => setOpen(false));

  const {
    startDate: s,
    endDate: e,
    handleSelect,
  } = useRangeSelect(onChange, threshold);

  return (
    <div ref={wrapperRef} className={styles.calendarWrapper}>
      <div className={styles.inputBox} onClick={() => setOpen(!open)}>
        {customInput ?? (
          <span>
            {s ? s.toDateString() : "Start"} ~ {e ? e.toDateString() : "End"}
          </span>
        )}
        {customIcon ?? <span>📅</span>}
      </div>
      {open && (
        <div className={styles.popup}>
          <Calendar
            value={e ?? s}
            onSelect={handleSelect}
            locale={monthFormat}
            theme={theme}
            range={{ startDate: s, endDate: e }}
          />
        </div>
      )}
    </div>
  );
};
