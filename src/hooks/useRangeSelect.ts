import { useState } from "react";

export function useRangeSelect(
  onChange?: (range: { startDate: Date; endDate: Date }) => void,
  threshold?: number
) {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleSelect = (date: Date) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(date);
      setEndDate(null);
      onChange?.({ startDate: date, endDate: date });
    } else {
      if (date < startDate) return;

      if (threshold) {
        const maxEnd = new Date(startDate);
        maxEnd.setDate(maxEnd.getDate() + threshold);
        if (date > maxEnd) return;
      }

      setEndDate(date);
      onChange?.({ startDate, endDate: date });
    }
  };

  return { startDate, endDate, handleSelect };
}
