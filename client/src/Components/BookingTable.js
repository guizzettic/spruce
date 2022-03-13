import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  makeStyles,
  LinearProgress,
} from '@material-ui/core';
import { useEffect, useState } from 'react';
import { sortBookings, transformDate } from '../utils';

const useStyles = makeStyles({
  bookingTable: {
    width: '98.5%',
    margin: '0 auto',
  },
  title: { backgroundColor: 'darkgrey' },
  sticky: { position: 'sticky', top: 0 },
  loadingBar: { padding: '40px 0', width: '100%' },
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
  const [loading, setLoading] = useState(true);

  const fetchBookings = () => {
    let url = 'https://bookingapi-b86e.restdb.io/rest/bookings';
    setLoading(true);

    fetch(url, {
      headers: {
        'x-apikey': '5d03eb2a27bc5b75bfeb7c7a',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setBookingData(sortBookings(data));
      })
      .catch((err) => console.errror(err));
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <TableContainer component={Paper} className={classes.bookingTable}>
      <Table sx={{ minWidth: 650 }} aria-label="bookings table">
        <TableHead>
          <TableRow className={classes.sticky}>
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
      {loading && (
        <div className={classes.loadingBar}>
          <LinearProgress />
        </div>
      )}
    </TableContainer>
  );
};

export default BookingTable;
