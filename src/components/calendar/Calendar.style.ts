import { style } from "@vanilla-extract/css";

export const calendarWrapper = style({
  position: "relative",
  display: "inline-block",
});

export const inputBox = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  border: "1px solid #ccc",
  padding: "6px 10px",
  borderRadius: "4px",
  cursor: "pointer",
});

export const popup = style({
  position: "absolute",
  top: "100%",
  left: 0,
  marginTop: "4px",
  border: "1px solid #ddd",
  borderRadius: "8px",
  background: "#fff",
  zIndex: 1000,
  boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
  padding: "12px",
});

export const header = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "8px",
});

export const yearPanel = style({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "4px",
  maxHeight: "200px",
  overflowY: "auto",
});

export const year = style({
  padding: "6px 8px",
  textAlign: "center",
  cursor: "pointer",
  borderRadius: "4px",
  ":hover": { background: "#f5f5f5" },
});

export const activeYear = style([
  year,
  {
    background: "#007bff",
    color: "#fff",
  },
]);

export const weekRow = style({
  display: "grid",
  gridTemplateColumns: "repeat(7, 1fr)",
  textAlign: "center",
  marginBottom: "4px",
  fontWeight: "bold",
});

export const dayRow = style({
  display: "grid",
  gridTemplateColumns: "repeat(7, 1fr)",
  textAlign: "center",
});

export const day = style({
  padding: "6px",
  cursor: "pointer",
  borderRadius: "50%",
  ":hover": { background: "#f0f0f0" },
});

export const selectedDay = style([
  day,
  {
    background: "#007bff",
    color: "#fff",
  },
]);

export const rangeDay = style([
  day,
  {
    background: "#cce5ff",
    color: "#000",
    borderRadius: "0",
  },
]);

export const rangeStart = style([selectedDay, { borderRadius: "50% 0 0 50%" }]);

export const rangeEnd = style([selectedDay, { borderRadius: "0 50% 50% 0" }]);
