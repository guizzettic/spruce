export function sortBookings(bookingDetails) {
  return bookingDetails.sort((a, b) => a.datetime - b.datetime);
}

export function transformDate(date) {
  let formattedDate = new Date(date).toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour12: 'true',
    hour: 'numeric',
    minute: 'numeric',
  });
  formattedDate = formattedDate.split(',');
  return `${formattedDate[0]}, ${formattedDate[1]} at ${formattedDate[2]}`;
}
