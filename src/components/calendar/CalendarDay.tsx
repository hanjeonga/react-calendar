import React from "react";
import * as styles from "./Calendar.style";
import { CalendarTheme } from "../../types/calendar.type";

interface CalendarDayProps {
  day: number;
  isSelected?: boolean;
  isInRange?: boolean;
  isRangeStart?: boolean;
  isRangeEnd?: boolean;
  onSelect: () => void;
  theme?: CalendarTheme;
}

export const CalendarDay: React.FC<CalendarDayProps> = ({
  day,
  isSelected,
  isInRange,
  isRangeStart,
  isRangeEnd,
  onSelect,
  theme,
}) => {
  let className = styles.day;

  if (isSelected) className = styles.selectedDay;
  if (isInRange) className = styles.rangeDay;
  if (isRangeStart) className = styles.rangeStart;
  if (isRangeEnd) className = styles.rangeEnd;

  const customStyle: React.CSSProperties = {};
  if (isSelected) {
    customStyle.background = theme?.daySelectedBg ?? "#007bff";
    customStyle.color = theme?.daySelectedColor ?? "#fff";
    customStyle.borderRadius = theme?.daySelectedRadius ?? "50%";
  }
  if (isInRange) {
    customStyle.background = theme?.rangeBg ?? "#cce5ff";
    customStyle.color = theme?.rangeColor ?? "#000";
  }

  return (
    <div className={className} style={customStyle} onClick={onSelect}>
      {day}
    </div>
  );
};
