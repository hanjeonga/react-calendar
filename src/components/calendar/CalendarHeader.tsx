import React, { useState } from "react";
import * as styles from "./Calendar.css";
import { formatMonth } from "../../utils/format";
import { LocaleType } from "../../utils/locale";
import { makeYearRange } from "../../utils/helpers";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface Props {
  year: number;
  month: number; // 1..12
  onYearChange: (y: number) => void;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  monthFormat?: LocaleType;
}

export const CalendarHeader: React.FC<Props> = ({
  year,
  month,
  onYearChange,
  onPrevMonth,
  onNextMonth,
  monthFormat = "en",
}) => {
  const [openYears, setOpenYears] = useState<boolean>(false);
  const years = makeYearRange(year, 100);

  return (
    <div className={styles.header}>
      <div className={styles.yearContainer}>
        <button
          type="button"
          className={styles.yearButton}
          onClick={() => setOpenYears((v) => !v)}
          aria-expanded={openYears}
          aria-controls="year-panel"
          aria-haspopup="listbox"
        >
          {year}
        </button>

        {openYears && (
          <div
            id="year-panel"
            className={styles.yearPanel}
            role="listbox"
            aria-label="Select year"
            onMouseLeave={() => setOpenYears(false)}
          >
            {years.map((y) => (
              <div
                key={y}
                role="option"
                aria-selected={y === year}
                className={y === year ? styles.yearActive : styles.yearItem}
                onClick={() => {
                  onYearChange(y);
                  setOpenYears(false);
                }}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    onYearChange(y);
                    setOpenYears(false);
                  }
                }}
              >
                {y}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className={styles.monthContainer}>
        <button
          className={styles.monthButton}
          type="button"
          onClick={onPrevMonth}
          aria-label="Previous month"
        >
          <IoIosArrowBack className={styles.monthButtonIcon} />
        </button>
        <div className={styles.monthText}>
          {formatMonth(month - 1, monthFormat)} {year}
        </div>
        <button
          className={styles.monthButton}
          type="button"
          onClick={onNextMonth}
          aria-label="Next month"
        >
          <IoIosArrowForward className={styles.monthButtonIcon} />
        </button>
      </div>
    </div>
  );
};
