import { useState } from "react";

/**
 * initial: Date | null
 * months 1..12
 */
export const useCalendar = (initial?: Date | null) => {
  const init = initial ?? new Date();
  const [year, setYear] = useState<number>(init.getFullYear());
  const [month, setMonth] = useState<number>(init.getMonth() + 1);

  const prevMonth = () => {
    setMonth((m) => {
      if (m === 1) {
        setYear((y) => y - 1);
        return 12;
      }
      return m - 1;
    });
  };

  const nextMonth = () => {
    setMonth((m) => {
      if (m === 12) {
        setYear((y) => y + 1);
        return 1;
      }
      return m + 1;
    });
  };

  return { year, month, setYear, setMonth, prevMonth, nextMonth };
};
