export const toLocaleNumber = (targetNumber = 0, locale = "ko-KR") =>
  targetNumber.toLocaleString(locale);
