export function sortBookings(bookingDetails) {
  // sorting by date times in ascending order
  return bookingDetails.sort(
    (a, b) => new Date(a.datetime) - new Date(b.datetime)
  );
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

export function stringifyData(bookingInfo) {
  return JSON.stringify({
    name: bookingInfo.name,
    email: bookingInfo.email,
    state: bookingInfo.state,
    address: bookingInfo.address,
    city: bookingInfo.city,
    zip: Number(bookingInfo.zip),
    bookingtype: bookingInfo.bookingtype,
    datetime: `${bookingInfo.bookingDate} ${bookingInfo.bookingTime}`,
  });
}

// quick verfication that all fields have info on them
export function verifyInput(bookingInfo) {
  let length = Object.keys(bookingInfo).length - 1;
  return (
    Object.values(bookingInfo).filter((value) => value.length > 0).length ===
    length
  );
}
