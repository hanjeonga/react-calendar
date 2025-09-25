import React, { useState } from "react";
import { getYearRange } from "../../utils/date";
import * as styles from "./Calendar.style";

interface YearPanelProps {
  currentYear: number;
  onSelect: (year: number) => void;
}

export const CalendarYearPanel: React.FC<YearPanelProps> = ({
  currentYear,
  onSelect,
}) => {
  const [centerYear, setCenterYear] = useState(currentYear);
  const years = getYearRange(centerYear);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button onClick={() => setCenterYear((y) => y - 100)}>◀</button>
        <span>
          {centerYear - 100} ~ {centerYear + 100}
        </span>
        <button onClick={() => setCenterYear((y) => y + 100)}>▶</button>
      </div>
      <div className={styles.yearPanel}>
        {years.map((y) => (
          <div
            key={y}
            className={y === currentYear ? styles.activeYear : styles.year}
            onClick={() => onSelect(y)}
          >
            {y}
          </div>
        ))}
      </div>
    </div>
  );
};
