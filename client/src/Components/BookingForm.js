import { useState, useEffect } from 'react';
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
  DialogContentText,
} from '@material-ui/core';
import { stringifyData, verifyInput } from '../utils';

const useStyles = makeStyles({
  submitButton: {
    backgroundColor: 'orange',
    textTransform: 'none',
  },
  infoFields: {
    width: '47%',
  },
});

const BookingForm = ({ showForm, setShowForm }) => {
  const bookingServices = ['housekeeping', 'dogwalk'];
  const [bookingInfo, setBookingInfo] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    bookingtype: '',
    bookingDate: '',
    bookingTime: '',
  });
  const [successSubmission, setSuccessSubmission] = useState(false);

  const submitForm = () => {
    let url = 'https://bookingapi-b86e.restdb.io/rest/bookings';

    let jsonData = stringifyData(bookingInfo);
    const requestOptions = {
      method: 'POST',
      headers: {
        'x-apikey': '5d03eb2a27bc5b75bfeb7c7a',
        'Content-Type': 'application/json',
      },
      body: jsonData,
    };

    fetch(url, requestOptions)
      .then((res) => {
        setSuccessSubmission(true);
        setBookingInfo({
          name: '',
          email: '',
          address: '',
          city: '',
          state: '',
          zip: '',
          bookingtype: '',
          bookingDate: '',
          bookingTime: '',
        });
      })
      .catch((err) => console.log('error found: ', err));
  };

  const classes = useStyles();

  const handleClose = (e) => {
    e.preventDefault();
    setShowForm(false);
  };

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

  return (
    <form>
      <Dialog open={showForm} onClose={handleClose} fullWidth>
        {successSubmission ? (
          <div>
            <DialogTitle sx={{ fontWeight: 200 }}>
              Submission Successful
            </DialogTitle>
            <DialogContentText style={{ paddingLeft: 25, paddingBottom: 30 }}>
              Thank you for submitting a booking.
            </DialogContentText>
          </div>
        ) : (
          <div>
            <DialogTitle sx={{ fontWeight: '200' }}>Create Booking</DialogTitle>
            <DialogContent>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Name"
                  type="text"
                  variant="outlined"
                  className={classes.infoFields}
                  onChange={(e) =>
                    setBookingInfo({ ...bookingInfo, name: e.target.value })
                  }
                />
                <FormControl className={classes.infoFields}>
                  <InputLabel>Booking Type</InputLabel>
                  <Select
                    value={bookingInfo.bookingtype}
                    onChange={(e) => handleBooking(e, 'bookingtype')}
                    displayEmpty={true}
                    renderValue={
                      bookingInfo.bookingtype.length === 0 ||
                      bookingInfo.bookingtype === ''
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
                  margin="dense"
                  id="name"
                  label="Email"
                  type="email"
                  variant="outlined"
                  className={classes.infoFields}
                  onChange={(e) =>
                    setBookingInfo({ ...bookingInfo, email: e.target.value })
                  }
                />

                <TextField
                  margin="dense"
                  id="name"
                  label="Booking Date"
                  type="text"
                  variant="outlined"
                  className={classes.infoFields}
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
                  margin="dense"
                  id="name"
                  label="Street Address"
                  type="text"
                  variant="outlined"
                  className={classes.infoFields}
                  onChange={(e) =>
                    setBookingInfo({
                      ...bookingInfo,
                      address: e.target.value,
                    })
                  }
                />
                <TextField
                  margin="dense"
                  id="name"
                  label="Booking Time"
                  type="text"
                  variant="outlined"
                  className={classes.infoFields}
                  onChange={(e) =>
                    setBookingInfo({
                      ...bookingInfo,
                      bookingTime: e.target.value,
                    })
                  }
                />
              </div>
              <TextField
                margin="dense"
                id="name"
                label="City"
                type="text"
                className={classes.infoFields}
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
                  className={classes.infoFields}
                  margin="dense"
                  id="name"
                  label="State"
                  type="text"
                  variant="outlined"
                  onChange={(e) =>
                    setBookingInfo({ ...bookingInfo, state: e.target.value })
                  }
                />
                <TextField
                  className={classes.infoFields}
                  margin="dense"
                  id="name"
                  label="Zip Code"
                  type="number"
                  variant="outlined"
                  onChange={(e) =>
                    setBookingInfo({ ...bookingInfo, zip: e.target.value })
                  }
                />
              </div>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={handleSubmit}
                variant="outlined"
                disabled={verifyInput(bookingInfo)}
                onClick={submitForm}
                className={classes.submitButton}
              >
                Create booking
              </Button>
            </DialogActions>{' '}
          </div>
        )}
      </Dialog>
    </form>
  );
};
export default BookingForm;
