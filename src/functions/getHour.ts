export const getHour = (timestamp: number) => {
  const date = new Date(timestamp);

  const hours = date.getHours() + 3;
  const minutes = date.getMinutes();

  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');

  return `${formattedHours}:${formattedMinutes}`;
}
