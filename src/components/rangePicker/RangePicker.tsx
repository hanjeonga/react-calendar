import React, { useEffect, useRef, useState } from "react";
import * as styles from "./RangePicker.css";
import { RangePickerProps, RangeValue } from "../../types/calendar.type";
import { Calendar } from "../calendar/Calendar";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { useRangeSelect } from "../../hooks/useRangeSelect";
import { formatDate } from "../../utils/format";
import { FaRegCalendarAlt } from "react-icons/fa";

export const RangePicker: React.FC<RangePickerProps> = ({
  startDate,
  endDate,
  onChange,
  separator = "~",
  displayMode = "dropdown",
  customInput,
  customIcon,
  monthFormat = "en",
  theme,
  threshold,
  dateFormat = "YYYY.MM.DD",
  locale = "en",
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);

  const { range, onSelect, setRange } = useRangeSelect({
    startDate: startDate ?? null,
    endDate: endDate ?? null,
  } as RangeValue);

  useOutsideClick(ref, () => {
    if (displayMode === "dropdown") {
      setRange({ startDate: null, endDate: null });
      setOpen(false);
    }
  });

  // props 변경 시 동기화 (확인 누른 이후 반영용)
  useEffect(() => {
    setRange({ startDate: startDate ?? null, endDate: endDate ?? null });
  }, [startDate, endDate]);

  const handleConfirm = () => {
    onChange?.(range);
    setOpen(false);
  };

  const renderIcon = () => {
    if (!customIcon) return <FaRegCalendarAlt className={styles.iconSize} />;
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
    <div ref={ref} className={styles.container}>
      {customInput ? (
        <div onClick={() => setOpen((v) => !v)}>{customInput}</div>
      ) : (
        <div
          className={styles.inputBox}
          role="group"
          aria-label="Date range"
          onClick={() => setOpen((v) => !v)}
        >
          <input
            className={styles.input}
            readOnly
            placeholder="Start Date"
            aria-label="Start date"
            value={
              range.startDate ? formatDate(range.startDate, dateFormat) : ""
            }
          />
          <div className={styles.separator}>{separator}</div>
          <input
            className={styles.input}
            readOnly
            placeholder="End Date"
            aria-label="End date"
            value={range.endDate ? formatDate(range.endDate, dateFormat) : ""}
          />
          <div className={styles.iconWrap}>{renderIcon()}</div>
        </div>
      )}

      {/* Dropdown 모드 */}
      {open && displayMode === "dropdown" && (
        <div className={styles.dropdown}>
          <Calendar
            mode="range"
            value={range}
            onSelect={(v) => {
              if (!v) return;
              if (v instanceof Date) onSelect(v, threshold);
              else setRange(v);
            }}
            monthFormat={monthFormat}
            theme={theme}
            locale={locale}
          />
          <div className={styles.ButtonWrapper}>
            <button
              className={styles.cancelBtn}
              onClick={() => {
                setRange({ startDate: null, endDate: null });
                setOpen(false);
              }}
            >
              취소
            </button>
            <button className={styles.confirmBtn} onClick={handleConfirm}>
              확인
            </button>
          </div>
        </div>
      )}

      {/* Modal 모드 */}
      {open && displayMode === "modal" && (
        <div
          className={styles.modalOverlay}
          onClick={() => {
            setRange({ startDate: null, endDate: null });
            setOpen(false);
          }}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <Calendar
              mode="range"
              value={range}
              onSelect={(v) => {
                if (!v) return;
                if (v instanceof Date) onSelect(v, threshold);
                else setRange(v);
              }}
              monthFormat={monthFormat}
              theme={theme}
              locale={locale}
            />
            <div className={styles.ButtonWrapper}>
              <button
                className={styles.cancelBtn}
                onClick={() => {
                  setRange({ startDate: null, endDate: null });
                  setOpen(false);
                }}
              >
                취소
              </button>
              <button className={styles.confirmBtn} onClick={handleConfirm}>
                확인
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
