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
  padding: "10px 16px",
  background: "#fff",
  cursor: "pointer",
});

export const input = style({
  width: "100%",
  border: "none",
  background: "transparent",
  outline: "none",
  fontSize: 16,
});

export const iconWrap = style({
  display: "inline-flex",
  alignItems: "center",
});

export const iconSize = style({
  fontSize: 18,
});

export const dropdown = style({
  position: "absolute",
  top: "calc(100% + 8px)",
  left: 0,
  zIndex: 999,
});
