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

const useStyles = makeStyles({
  bookingTable: {
    width: '98.5%',
    margin: '0 auto',
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
  const data = [
    createBookings(
      'Jon Stewart',
      'jon@daily.show',
      '5323 Levander Loop Austin, TX. 78702',
      'Housekeeping',
      'June 5, 2019 at 9:00am'
    ),
    createBookings(
      'Stephen Colbert',
      'stephen@daily.show',
      '5332 Levander loop Austin, Tx',
      'Housekeeping',
      'June 5, 2019 at 9:00am'
    ),
    createBookings(
      'Trevor Noah',
      'trevor@daily.show',
      '5332 Levander loop Austin, Tx',
      'Housekeeping',
      'June 5, 2019 at 9:00am'
    ),
    createBookings(
      'Testing name',
      'jon@daily.show',
      '5332 Levander loop Austin, Tx',
      'Housekeeping',
      'June 5, 2019 at 9:00am'
    ),
  ];
  return (
    <TableContainer component={Paper} className={classes.bookingTable}>
      <Table sx={{ minWidth: 650 }} aria-label="bookings table">
        <TableHead>
          <TableRow>
            <TableCell>Customer</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Address</TableCell>
            <TableCell align="right">Booking Type</TableCell>
            <TableCell align="right">Booking Date/Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((booking) => (
            <TableRow
              key={booking.customer}
              sx={{ '&:last-child td, &last-child th': { borders: 0 } }}
            >
              <TableCell align="">{booking.customer}</TableCell>
              <TableCell align="center">{booking.email}</TableCell>
              <TableCell align="center">{booking.address}</TableCell>
              <TableCell align="right">{booking.bookingType}</TableCell>
              <TableCell align="right">{booking.bookingDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BookingTable;
