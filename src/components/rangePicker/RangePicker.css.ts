import { style } from "@vanilla-extract/css";

export const container = style({
  position: "relative",
  display: "inline-block",
});

// Display two input boxes side by side with a separator
export const inputBox = style({
  cursor: "pointer",
  minWidth: 300,
  border: "1px solid #ddd",
  borderRadius: 8,
  background: "#fff",
  padding: "10px 12px",
  display: "flex",
  alignItems: "center",
  gap: 10,
});

export const input = style({
  width: 110,
  border: "none",
  background: "transparent",
  outline: "none",
  textAlign: "center",
  fontSize: 16,
});

export const separator = style({
  color: "#444",
  fontSize: 16,
});

export const iconWrap = style({
  display: "inline-flex",
  marginLeft: 8,
});

export const iconSize = style({
  fontSize: 18,
});

export const dropdown = style({
  maxHeight: 440,
  background: "#fff",
  border: "1px solid #ddd",
  borderRadius: 8,
  padding: 20,
  boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
  position: "absolute",
  top: "calc(100% + 8px)",
  left: 0,
  zIndex: 999,
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

export const ButtonWrapper = style({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: 8,
  marginTop: 12,
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
