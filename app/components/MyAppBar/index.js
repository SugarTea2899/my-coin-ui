import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export default function MyAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.logo}>
            My Wallet
          </Typography>
          <div className={classes.rightSection}>
            <Typography className={classes.title}>Transactions</Typography>
            <ExitToAppIcon className={classes.existButton} />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    justifyContent: 'flex-start',
    marginRight: theme.spacing(2),
  },
  title: {
    paddingRight: '8%',
    color: 'white',
    cursor: 'pointer',
  },
  existButton: {
    fontSize: '2rem',
    color: 'white',
    cursor: 'pointer',
    marginRight: '4%',
  },
  logo: {
    fontFamily: 'Freckle',
    color: 'white',
    width: '100%',
    fontSize: '1.8rem'
  },
  rightSection: {
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
}));
