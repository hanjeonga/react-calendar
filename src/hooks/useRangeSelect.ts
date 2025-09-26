import { useState } from "react";
import { RangeValue } from "../types/calendar.type";
import { daysBetween } from "../utils/date";

/**
 * Manages temporary range selection + hover state
 */
export const useRangeSelect = (initial?: RangeValue) => {
  const init: RangeValue = initial ?? { startDate: null, endDate: null };
  const [range, setRange] = useState<RangeValue>(init);
  const [hoverDate, setHoverDate] = useState<Date | null>(null);

  const onSelect = (date: Date, threshold?: number) => {
    // if no start or already both set -> start new
    if (!range.startDate || (range.startDate && range.endDate)) {
      setRange({ startDate: date, endDate: null });
      return;
    }

    // start exists, end not set -> set end (or swap)
    if (range.startDate && !range.endDate) {
      if (date < range.startDate) {
        setRange({ startDate: date, endDate: range.startDate });
      } else {
        if (threshold && daysBetween(range.startDate, date) > threshold) {
          // exceed threshold -> ignore or clamp, here ignore selection
          return;
        }
        setRange({ startDate: range.startDate, endDate: date });
      }
    }
  };

  const reset = () => setRange({ startDate: null, endDate: null });
  const set = (r: RangeValue) => setRange(r);

  return { range, onSelect, reset, setRange: set, hoverDate, setHoverDate };
};
