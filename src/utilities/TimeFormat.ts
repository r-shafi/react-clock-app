// UNUSED: INTL.DateTimeFormat Gives Same Result

function formatValue(value: number) {
  return value < 10 ? `0${value}` : value;
}

export function formatTime(date: Date) {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const format = hours >= 12 ? 'PM' : 'AM';
  const hours12 = hours % 12;
  return `${formatValue(hours12)}:${formatValue(minutes)}:${formatValue(
    seconds
  )} ${format}`;
}
