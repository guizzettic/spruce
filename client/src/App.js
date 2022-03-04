import './App.css';
import { createTheme, makeStyles } from '@material-ui/core/styles';
import Header from './Components/Header';
import { Button } from '@material-ui/core';
import BookingTable from './Components/BookingTable';

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
    // backgroundColor: 'grey',
    marginTop: '-5px',
  },
  bookingButon: {
    backgroundColor: 'orange',
    height: 40,
    borderRadius: 8,
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Header />
      <div className={classes.bookingComponent}>
        <h1 style={{ fontWeight: 400 }}>Bookings</h1>
        <Button variant="contained" className={classes.bookingButon}>
          Create booking
        </Button>
      </div>
      <BookingTable />
    </div>
  );
}

export default App;
