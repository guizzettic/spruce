import './App.css';
import { createTheme, makeStyles } from '@material-ui/core/styles';
import Header from './Components/Header';
import { Button } from '@material-ui/core';
import BookingTable from './Components/BookingTable';
import { useState } from 'react';
import BookingForm from './Components/BookingForm';

const useStyles = makeStyles({
  container: {
    height: '100vh',
    width: '100vw',
    backgroundColor: 'lightgrey',
    display: 'flex',
    flexDirection: 'column',
  },
  bookingComponent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: '-5px',
  },
  bookingButon: {
    backgroundColor: 'orange',
    height: 40,
    borderRadius: 8,
    textTransform: 'none',
  },
});

function App() {
  const [showForm, setShowForm] = useState(false);
  const classes = useStyles();

  const openForm = (e) => {
    e.preventDefault();
    setShowForm(!showForm);
  };

  return (
    <div className={classes.container}>
      <Header />
      <div className={classes.bookingComponent}>
        <h1 style={{ fontWeight: 400 }}>Bookings</h1>
        <Button
          variant="contained"
          className={classes.bookingButon}
          onClick={openForm}
        >
          Create booking
        </Button>
      </div>
      {showForm && (
        <BookingForm showForm={showForm} setShowForm={setShowForm} />
      )}
      <BookingTable />

      <br />
    </div>
  );
}

export default App;
