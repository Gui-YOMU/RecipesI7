export const formatDateToString = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

export const compareDates = (stringA: string, stringB: string): number => {
  if (stringA === stringB) return 0;
  return stringA > stringB ? 1 : -1;
};