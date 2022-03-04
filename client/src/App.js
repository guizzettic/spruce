import logo from './logo.svg';
import './App.css';
import { createTheme, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  logo: {
    width: 200,
    height: 100,
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={classes.logo} alt="logo" />
        <p>hello</p>
      </header>
    </div>
  );
}

export default App;
