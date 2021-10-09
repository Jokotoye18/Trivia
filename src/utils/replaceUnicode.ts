export const replaceUnicode = (str: string): string => {
  return str.replace(/&quot;/g, '"').replace(/&#039;/g, "'");
};
