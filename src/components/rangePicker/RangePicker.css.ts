import { style } from "@vanilla-extract/css";

export const container = style({
  position: "relative",
  display: "inline-block",
});

export const inputBox = style({
  display: "flex",
  alignItems: "center",
  gap: 8,
  border: "1px solid #ddd",
  borderRadius: 8,
  padding: "6px 10px",
  background: "#fff",
  cursor: "pointer",
  minWidth: 300,
});

export const input = style({
  border: "none",
  outline: "none",
  background: "transparent",
  width: 110,
  textAlign: "center",
});

export const separator = style({
  color: "#666",
  margin: "0 6px",
});

export const iconWrap = style({
  marginLeft: 8,
  display: "inline-flex",
});

export const dropdown = style({
  position: "absolute",
  top: "calc(100% + 8px)",
  left: 0,
  zIndex: 999,
  background: "#fff",
  border: "1px solid #ddd",
  borderRadius: 8,
  padding: 10,
  boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
  maxHeight: 440,
  overflowY: "auto",
});

export const modalOverlay = style({
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.25)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
});

export const modalContent = style({
  background: "#fff",
  borderRadius: 10,
  padding: 12,
  minWidth: 360,
  maxHeight: "80vh",
  overflowY: "auto",
});

export const actions = style({
  display: "flex",
  justifyContent: "flex-end",
  gap: 8,
  marginTop: 8,
});

export const confirmBtn = style({
  background: "#007bff",
  color: "#fff",
  border: "none",
  padding: "6px 12px",
  borderRadius: 6,
  cursor: "pointer",
});

export const cancelBtn = style({
  background: "#eee",
  color: "#333",
  border: "none",
  padding: "6px 12px",
  borderRadius: 6,
  cursor: "pointer",
});
