export const cn = (...xs: (string | false | null | undefined)[]) =>
  xs.filter(Boolean).join(" ");

export const makeYearRange = (centerYear: number, span = 100) =>
  Array.from({ length: span * 2 + 1 }, (_, i) => centerYear - span + i);
