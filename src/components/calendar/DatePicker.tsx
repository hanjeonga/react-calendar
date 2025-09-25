import React, { useRef, useState } from "react";
import { Calendar } from "./Calendar";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import * as styles from "./Calendar.style";
import { CalendarBaseProps } from "../../types/calendar.type";

export const DatePicker: React.FC<CalendarBaseProps> = ({
  value,
  onChange,
  monthFormat,
  customInput,
  customIcon,
  theme,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  useOutsideClick(wrapperRef, () => setOpen(false));

  return (
    <div ref={wrapperRef} className={styles.calendarWrapper}>
      <div className={styles.inputBox} onClick={() => setOpen(!open)}>
        {customInput ?? (
          <span>{value ? value.toDateString() : "Select date"}</span>
        )}
        {customIcon ?? <span>📅</span>}
      </div>
      {open && (
        <div className={styles.popup}>
          <Calendar
            value={value}
            onSelect={(d) => {
              onChange?.(d);
              setOpen(false);
            }}
            locale={monthFormat}
            theme={theme}
          />
        </div>
      )}
    </div>
  );
};
