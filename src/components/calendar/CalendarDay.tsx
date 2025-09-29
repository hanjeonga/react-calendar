import React from "react";
import "./Calendar.css";
import { CalendarTheme } from "../../types/calendar.type";

interface Props {
  date: Date;
  day: number;
  isSelected?: boolean;
  isInRange?: boolean;
  isRangeStart?: boolean;
  isRangeEnd?: boolean;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  disabled?: boolean;
  theme?: CalendarTheme;
}

export const CalendarDay: React.FC<Props> = ({
  date,
  day,
  isSelected,
  isInRange,
  isRangeStart,
  isRangeEnd,
  onClick,
  onMouseEnter,
  onMouseLeave,
  disabled,
  theme,
}) => {
  const style: React.CSSProperties = {};
  let className = "dayCell";

  if (isInRange) {
    className = `${className} ${"dayRange"}`;
    if (theme?.rangeBg) style.background = theme.rangeBg;
    if (theme?.rangeColor) style.color = theme.rangeColor;
  }

  if (isRangeStart) {
    className = "rangeStart";
    if (theme?.daySelectedBg) style.background = theme.daySelectedBg;
    if (theme?.daySelectedColor) style.color = theme.daySelectedColor;
  } else if (isRangeEnd) {
    className = "rangeEnd";
    if (theme?.daySelectedBg) style.background = theme.daySelectedBg;
    if (theme?.daySelectedColor) style.color = theme.daySelectedColor;
  } else if (isSelected) {
    className = `${className} ${"daySelected"}`;
    if (theme?.daySelectedBg) style.background = theme.daySelectedBg;
    if (theme?.daySelectedColor) style.color = theme.daySelectedColor;
    if (theme?.daySelectedRadius) style.borderRadius = theme.daySelectedRadius;
  }

  if (disabled) {
    style.opacity = 0.45;
    style.cursor = "not-allowed";
  }

  return (
    <div
      className={className}
      style={style}
      onClick={() => !disabled && onClick && onClick()}
      onMouseEnter={() => onMouseEnter && onMouseEnter()}
      onMouseLeave={() => onMouseLeave && onMouseLeave()}
      aria-disabled={disabled}
    >
      {day}
    </div>
  );
};
