// locale.ts

export type LocaleType =
  | "en"
  | "ko"
  | "ja"
  | "zh"
  | "fr"
  | "de"
  | "es"
  | "it"
  | "ru"
  | "pt"
  | "number";

export const DEFAULT_LOCALE: LocaleType = "en";

// 월 이름
export const MONTHS: Record<LocaleType, string[]> = {
  en: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  ko: [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ],
  ja: [
    "1月",
    "2月",
    "3月",
    "4月",
    "5月",
    "6月",
    "7月",
    "8月",
    "9月",
    "10月",
    "11月",
    "12月",
  ],
  zh: [
    "一月",
    "二月",
    "三月",
    "四月",
    "五月",
    "六月",
    "七月",
    "八月",
    "九月",
    "十月",
    "十一月",
    "十二月",
  ],
  fr: [
    "janvier",
    "février",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "août",
    "septembre",
    "octobre",
    "novembre",
    "décembre",
  ],
  de: [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember",
  ],
  es: [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ],
  it: [
    "gennaio",
    "febbraio",
    "marzo",
    "aprile",
    "maggio",
    "giugno",
    "luglio",
    "agosto",
    "settembre",
    "ottobre",
    "novembre",
    "dicembre",
  ],
  ru: [
    "январь",
    "февраль",
    "март",
    "апрель",
    "май",
    "июнь",
    "июль",
    "август",
    "сентябрь",
    "октябрь",
    "ноябрь",
    "декабрь",
  ],
  pt: [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ],
  number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
};

// 요일 이름
export const WEEKDAYS: Record<LocaleType, string[]> = {
  en: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  ko: ["일", "월", "화", "수", "목", "금", "토"],
  ja: ["日", "月", "火", "水", "木", "金", "土"],
  zh: ["日", "一", "二", "三", "四", "五", "六"],
  fr: ["Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa"],
  de: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
  es: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"],
  it: ["Do", "Lu", "Ma", "Me", "Gi", "Ve", "Sa"],
  ru: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
  pt: ["Do", "Se", "Te", "Qu", "Qu", "Se", "Sa"],
  number: ["1", "2", "3", "4", "5", "6", "7"],
};

// 버튼 텍스트 (확인/취소)
export const BUTTON_TEXT: Record<
  LocaleType,
  { confirm: string; cancel: string }
> = {
  en: { confirm: "Confirm", cancel: "Cancel" },
  ko: { confirm: "확인", cancel: "취소" },
  ja: { confirm: "確認", cancel: "キャンセル" },
  zh: { confirm: "确认", cancel: "取消" },
  fr: { confirm: "Confirmer", cancel: "Annuler" },
  de: { confirm: "Bestätigen", cancel: "Abbrechen" },
  es: { confirm: "Confirmar", cancel: "Cancelar" },
  it: { confirm: "Conferma", cancel: "Annulla" },
  ru: { confirm: "Подтвердить", cancel: "Отмена" },
  pt: { confirm: "Confirmar", cancel: "Cancelar" },
  number: { confirm: "OK", cancel: "Cancel" },
};
