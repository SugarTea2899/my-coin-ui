import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';

const Transaction = () => {
  const classes = useStyle();
  return (
    <Grid container className={classes.container}>
      <Grid container item xs={3}>
        <Grid container item xs={4}>
          <div className={classes.transaction}>
            <Typography className={classes.Tx}>Tx</Typography>
          </div>
        </Grid>
        <Grid container item xs={8}>
          <Typography className={classes.blueText}>1712785</Typography>
          <Typography className={classes.grayText}>40 sec ago</Typography>
        </Grid>
      </Grid>
      <Grid container item xs={4}>
        <Typography className={classes.blueText}>
          <span style={{ color: 'black' }}>From</span> 0xc365c3315c1213...
        </Typography>
        <Typography className={classes.blueText}>
          <span style={{ color: 'black' }}>To</span> 0xc365c3315c1213...
        </Typography>
      </Grid>
      <Grid container item xs={2}>
        <div className={classes.status}>
          <Typography className={classes.statusText}>Success</Typography>
        </div>
      </Grid>
      <Grid container item xs={3} justify='center' alignItems='center'>
        <Typography className={classes.blueText} style={{ color: 'black' }}>
          Amount:
        </Typography>
        <Typography className={classes.blueText}>&nbsp;&nbsp;50</Typography>
      </Grid>
    </Grid>
  );
};

const useStyle = makeStyles({
  container: {
    marginBottom: '2%',
    paddingBottom: '2%',
    borderBottom: '1px solid #e0e0e0'
  },
  transaction: {
    width: '40px',
    height: '40px',
    background: '#bdbdbd',
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Tx: {
    color: 'white',
    fontSize: '0.9rem',
  },
  blueText: {
    color: '#2196f3',
    fontSize: '0.9rem',
  },
  grayText: {
    color: '#bdbdbd',
    fontSize: '0.7rem',
  },
  status: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusText: {
    color: '#66bb6a',
    fontSize: '0.85rem',
    fontWeight: 'bolder',
  },
});

export default Transaction;
