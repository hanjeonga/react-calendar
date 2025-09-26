import { style } from "@vanilla-extract/css";

export const container = style({
  position: "relative",
  display: "inline-block",
  width: 260,
  fontFamily: "inherit",
});

export const inputBox = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  border: "1px solid #dcdcdc",
  borderRadius: 8,
  padding: "6px 10px",
  background: "#fff",
  cursor: "pointer",
});

export const input = style({
  border: "none",
  outline: "none",
  background: "transparent",
  fontSize: 14,
  width: "100%",
});

export const iconWrap = style({
  marginLeft: 8,
  display: "inline-flex",
  alignItems: "center",
});

export const dropdown = style({
  position: "absolute",
  top: "calc(100% + 8px)",
  left: 0,
  zIndex: 999,
});
