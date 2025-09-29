import { style } from "@vanilla-extract/css";

export const wrapper = style({
  background: "#fff",
  border: "1px solid #e6e6e6",
  borderRadius: 10,
  padding: 20,
  width: 320,
  boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
});

export const header = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: 10,
});

export const yearContainer = style({
  alignSelf: "flex-start",
  position: "relative",
});

export const yearButton = style({
  cursor: "pointer",
  border: "none",
  background: "transparent",
  fontSize: 24,
  fontWeight: 700,
  padding: 0,
  selectors: { "&:hover": { borderColor: "#eee" } },
});

export const yearPanel = style({
  width: "150%",
  maxHeight: 240,
  borderRadius: 8,
  border: "1px solid #ddd",
  background: "#fff",
  boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
  overflowY: "auto",
  fontSize: 20,
  padding: 8,
  position: "absolute",
  zIndex: 2000,

  // Firefox
  scrollbarWidth: "auto",
  scrollbarColor: "blue transparent",

  // Webkit
  selectors: {
    "&::-webkit-scrollbar": {
      width: "10px",
      height: "10px",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#007bff",
      borderRadius: "4px",
    },
    "&::-webkit-scrollbar-track": {
      background: "transparent",
    },
  },
});

export const yearItem = style({
  padding: "6px 8px",
  borderRadius: 4,
  cursor: "pointer",
  selectors: { "&:hover": { background: "#f6f6f6" } },
});

export const yearActive = style([
  yearItem,
  { background: "#007bff", color: "#fff", fontWeight: 600 },
]);

export const monthContainer = style({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: 15,
});

export const monthButton = style({
  cursor: "pointer",
  backgroundColor: "transparent",
  border: "none",
});

export const monthButtonIcon = style({
  fontSize: 24,
  pointerEvents: "none",
});

export const monthText = style({
  fontSize: 20,
  fontWeight: 600,
});

export const weekRow = style({
  display: "grid",
  gridTemplateColumns: "repeat(7, 1fr)",
  textAlign: "center",
  fontSize: 12,
  color: "#666",
  marginBottom: 6,
});

export const daysGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(7, 1fr)",
  gap: 6,
});

export const dayCell = style({
  width: 36,
  height: 36,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 6,
  cursor: "pointer",
  userSelect: "none",
  selectors: { "&:hover": { background: "#f3f3f3" } },
});

export const daySelected = style({
  background: "#007bff",
  color: "#fff",
  borderRadius: "50%",
});

export const dayRange = style({
  background: "rgba(0,123,255,0.08)",
  color: "#000",
  borderRadius: 0,
});

export const rangeStart = style({
  background: "#007bff",
  color: "#fff",
  borderRadius: "50% 0 0 50%",
});

export const rangeEnd = style({
  background: "#007bff",
  color: "#fff",
  borderRadius: "0 50% 50% 0",
});

export const dayHoverInRange = style({
  background: "rgba(0,123,255,0.12)",
});
