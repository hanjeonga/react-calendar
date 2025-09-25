import React, { useState } from "react";
import { formatMonth } from "../../utils/format";
import { CalendarYearPanel } from "./CalendarYearPanel";
import { LocaleType } from "../../utils/locale";
import * as styles from "./Calendar.style";

interface HeaderProps {
  year: number;
  month: number;
  onYearChange: (y: number) => void;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  locale?: LocaleType;
}

export const CalendarHeader: React.FC<HeaderProps> = ({
  year,
  month,
  onYearChange,
  onPrevMonth,
  onNextMonth,
  locale = "en",
}) => {
  const [showYearPanel, setShowYearPanel] = useState(false);

  return (
    <div className={styles.header}>
      {showYearPanel ? (
        <CalendarYearPanel
          currentYear={year}
          onSelect={(y) => {
            onYearChange(y);
            setShowYearPanel(false);
          }}
        />
      ) : (
        <>
          <span
            style={{ cursor: "pointer" }}
            onClick={() => setShowYearPanel(true)}
          >
            {year}
          </span>
          <div>
            <button onClick={onPrevMonth}>◀</button>
            <span>{formatMonth(month, locale)}</span>
            <button onClick={onNextMonth}>▶</button>
          </div>
        </>
      )}
    </div>
  );
};
