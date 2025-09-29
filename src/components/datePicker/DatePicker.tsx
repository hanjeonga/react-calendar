import React, { useRef, useState } from "react";
import "./DatePicker.css";
import { DatePickerProps } from "../../types/calendar.type";
import { Calendar } from "../calendar/Calendar";
import { formatDate } from "../../utils/format";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { FaRegCalendarAlt } from "react-icons/fa";

export const DatePicker: React.FC<DatePickerProps> = ({
  value,
  onChange,
  displayMode = "dropdown",
  customInput,
  customIcon,
  theme,
  monthFormat = "en",
  dateFormat = "YYYY.MM.DD",
  locale = "en",
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Date | null>(value ?? new Date());

  useOutsideClick(ref, () => {
    if (displayMode === "dropdown") setOpen(false);
  });

  const handleSelect = (val: Date | any) => {
    if (val instanceof Date) {
      setSelected(val);
      onChange?.(val);
      if (displayMode === "dropdown") setOpen(false);
    }
  };

  const renderIcon = () => {
    if (!customIcon) return <FaRegCalendarAlt className="iconSize" />;
    if (typeof customIcon === "string")
      return (
        <img
          src={customIcon}
          alt="calendar"
          style={{ width: 18, height: 18 }}
        />
      );
    return customIcon;
  };

  return (
    <div ref={ref} className={"container"}>
      {customInput ? (
        <div onClick={() => setOpen((v) => !v)}>{customInput}</div>
      ) : (
        <div
          className="inputBox"
          role="button"
          aria-label="Select date"
          onClick={() => setOpen((v) => !v)}
        >
          <input
            className="input"
            readOnly
            placeholder={formatDate(new Date(), dateFormat)}
            value={selected ? formatDate(selected, dateFormat) : ""}
            aria-label="Date input"
          />
          <div className="iconWrap">{renderIcon()}</div>
        </div>
      )}

      {open && displayMode === "dropdown" && (
        <div className="dropdown">
          <Calendar
            mode="single"
            value={selected}
            onSelect={handleSelect}
            monthFormat={monthFormat}
            theme={theme}
            locale={locale}
          />
        </div>
      )}

      {open && displayMode === "modal" && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0,0,0,0.25)",
          }}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <Calendar
              mode="single"
              value={selected}
              onSelect={handleSelect}
              monthFormat={monthFormat}
              theme={theme}
              locale={locale}
            />
          </div>
        </div>
      )}
    </div>
  );
};
