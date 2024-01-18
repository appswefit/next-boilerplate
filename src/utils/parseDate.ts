function zeroPad(numberStr: number) {
  return numberStr.toString().padStart(2, '0');
}

export default function parseDate(dateToParse: string) {
  const date = new Date(dateToParse);

  return `${zeroPad(date.getDate())}/${zeroPad(
    date.getMonth() + 1,
  )}/${date.getFullYear()} ${zeroPad(date.getHours())}:${zeroPad(
    date.getMinutes(),
  )}`;
}
