export const formatDate = date => {
  const dateF = new Date(date);
  const formattedDate = dateF.toLocaleString('uk-UA', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
  return formattedDate;
};
