import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  makeStyles,
} from '@material-ui/core';
import { useEffect, useState } from 'react';

const useStyles = makeStyles({
  bookingTable: {
    width: '98.5%',
    margin: '0 auto',
  },
  title: {
    backgroundColor: 'darkgrey',
  },
});

const BookingTable = () => {
  const classes = useStyles();
  const createBookings = (
    customer,
    email,
    address,
    bookingType,
    bookingDate
  ) => {
    return { customer, email, address, bookingType, bookingDate };
  };

  const [bookingData, setBookingData] = useState(null);

  const fetchBookings = () => {
    let url = 'https://bookingapi-b86e.restdb.io/rest/bookings';

    fetch(url, {
      headers: {
        'x-apikey': '5d03eb2a27bc5b75bfeb7c7a',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setBookingData(sortBookings(data));
      })
      .catch((err) => console.errror(err));
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  function sortBookings(bookingDetails) {
    return bookingDetails.sort((a, b) => a.datetime - b.datetime);
  }

  function transformDate(date) {
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
  return (
    <TableContainer component={Paper} className={classes.bookingTable}>
      <Table sx={{ minWidth: 650 }} aria-label="bookings table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.title}>Customer</TableCell>
            <TableCell className={classes.title} align="center">
              Email
            </TableCell>
            <TableCell className={classes.title} align="center">
              Address
            </TableCell>
            <TableCell className={classes.title} align="right">
              Booking Type
            </TableCell>
            <TableCell className={classes.title} align="right">
              Booking Date/Time
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bookingData &&
            bookingData.map((booking) => (
              <TableRow
                key={booking.customer}
                sx={{ '&:last-child td, &last-child th': { borders: 0 } }}
              >
                <TableCell>{booking.name}</TableCell>
                <TableCell align="center">{booking.email}</TableCell>
                <TableCell align="center">{booking.address}</TableCell>
                <TableCell align="right">{booking.bookingtype}</TableCell>
                <TableCell align="right">
                  {transformDate(booking.datetime)}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BookingTable;
