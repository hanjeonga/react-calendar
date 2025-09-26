import React, { useState } from "react";
import { DatePicker } from "./components/datePicker/DatePicker";
import { RangePicker } from "./components/rangePicker/RangePicker";
import { formatDate } from "./utils/format";

export default function App() {
  const [single, setSingle] = useState<Date | null>(new Date());
  const [range, setRange] = useState<{
    startDate: Date | null;
    endDate: Date | null;
  }>({
    startDate: null,
    endDate: null,
  });

  return (
    <div
      style={{
        padding: 24,
        fontFamily:
          "system-ui, -apple-system, Segoe UI, Roboto, 'Helvetica Neue', Arial",
      }}
    >
      <h1>Calendar Library Demo</h1>

      <section style={{ marginBottom: 28 }}>
        <h2>DatePicker</h2>
        <DatePicker
          value={single}
          onChange={(d) => setSingle(d)}
          dateFormat="YYYY.MM.DD"
          displayMode="dropdown"
          monthFormat="en"
        />
        <div style={{ marginTop: 8 }}>
          Selected: {single ? formatDate(single, "YYYY.MM.DD") : "—"}
        </div>
      </section>

      <section>
        <h2>RangePicker</h2>
        <RangePicker
          startDate={range.startDate}
          endDate={range.endDate}
          onChange={(r) => setRange(r)}
          separator="~"
          displayMode="dropdown"
          monthFormat="en"
        />
        <div style={{ marginTop: 8 }}>
          Range:{" "}
          {range.startDate ? formatDate(range.startDate, "YYYY.MM.DD") : "--"}{" "}
          {range.endDate ? ` ~ ${formatDate(range.endDate, "YYYY.MM.DD")}` : ""}
        </div>
      </section>
    </div>
  );
}
