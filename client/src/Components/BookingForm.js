import { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  DialogActions,
  Button,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles({
  submitButton: {
    backgroundColor: 'orange',
    textTransform: 'none',
  },
});

const BookingForm = ({ showForm, setShowForm }) => {
  const [bookingInfo, setBookingInfo] = useState({
    name: '',
    email: '',
    steetAddres: '',
    city: '',
    state: '',
    zipcode: '',
    bookingType: '',
    bookingDate: '',
    bookingTime: '',
  });

  const classes = useStyles();

  const handleClose = (e) => {
    e.preventDefault();
    setShowForm(false);
  };

  const bookingServices = ['Housekeeping', 'Dog Walk', 'Chimney Cleaning'];

  const handleBooking = (e, type) => {
    e.preventDefault();
    let temp = { ...bookingInfo };
    temp[type] = e.target.value;

    setBookingInfo(temp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const Placeholder = ({ children }) => {
    return <div style={{ color: 'grey' }}>{children}</div>;
  };

  const test = 1;
  return (
    <form>
      <Dialog open={showForm} onClose={handleClose} fullWidth>
        <DialogTitle sx={{ fontWeight: '200' }}>Create Booking</DialogTitle>
        <DialogContent>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="text"
              halfWidth
              variant="outlined"
              style={{ width: '47%' }}
              onChange={(e) =>
                setBookingInfo({ ...bookingInfo, name: e.target.value })
              }
            />
            <FormControl style={{ width: '47%' }}>
              <InputLabel>Booking Type</InputLabel>
              <Select
                value={bookingInfo.bookingType}
                onChange={(e) => handleBooking(e, 'bookingType')}
                halfWidth
                displayEmpty="true"
                renderValue={
                  bookingInfo.bookingType.length === 0 ||
                  bookingInfo.bookingType === ''
                    ? () => <Placeholder>Booking Type</Placeholder>
                    : undefined
                }
              >
                {bookingServices.map((service) => (
                  <MenuItem key={service} value={service}>
                    {service}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email"
              type="email"
              halfWidth
              variant="outlined"
              style={{ width: '47%' }}
              onChange={(e) =>
                setBookingInfo({ ...bookingInfo, email: e.target.value })
              }
            />

            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Booking Date"
              type="text"
              halfWidth
              variant="outlined"
              style={{ width: '47%' }}
              onChange={(e) =>
                setBookingInfo({
                  ...bookingInfo,
                  bookingDate: e.target.value,
                })
              }
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Street Address"
              type="text"
              halfWidth
              variant="outlined"
              style={{ width: '47%' }}
              onChange={(e) =>
                setBookingInfo({
                  ...bookingInfo,
                  streetAddress: e.target.value,
                })
              }
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Booking Time"
              type="text"
              halfWidth
              variant="outlined"
              style={{ width: '47%' }}
              onChange={(e) =>
                setBookingInfo({
                  ...bookingInfo,
                  bookingTime: e.target.value,
                })
              }
            />
          </div>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="City"
            type="text"
            style={{ width: '47%' }}
            halfWidth
            variant="outlined"
            onChange={(e) =>
              setBookingInfo({ ...bookingInfo, city: e.target.value })
            }
          />
          <div
            style={{
              width: '47%',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <TextField
              style={{
                width: '48%',
              }}
              autoFocus
              margin="dense"
              id="name"
              label="State"
              type="text"
              halfWidth
              variant="outlined"
              onChange={(e) =>
                setBookingInfo({ ...bookingInfo, state: e.target.value })
              }
            />
            <TextField
              style={{
                width: '48%',
              }}
              autoFocus
              margin="dense"
              id="name"
              label="Zip Code"
              type="number"
              quarterWidth
              variant="outlined"
              onChange={(e) =>
                setBookingInfo({ ...bookingInfo, zipcode: e.target.value })
              }
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleSubmit}
            variant="outlined"
            className={classes.submitButton}
          >
            Create booking
          </Button>
        </DialogActions>
      </Dialog>
    </form>
  );
};
export default BookingForm;
