import logo from '../logo.svg';

import { createTheme, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  header: {
    position: 'relative',
    top: 0,
    left: 0,
    backgroundColor: 'white',
    height: '6vh',
  },
  logo: {
    textAlign: 'left',
    width: 100,
    padding: 5,
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <img src={logo} className={classes.logo} alt="logo" />
    </div>
  );
};

export default Header;
