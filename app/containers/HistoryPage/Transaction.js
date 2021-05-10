import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import { getTime, hideCharacter } from '../../utils/helpers';
import { WAITING_CONFIRM } from '../../utils/constants';
import { Link } from 'react-router-dom';

const Transaction = ({
  senderAddress,
  receiverAddress,
  amount,
  timeStamp,
  status,
  id,
}) => {
  const classes = useStyle();
  const statusColor = status === WAITING_CONFIRM ? 'red' : '#66bb6a';
  const statusText = status === WAITING_CONFIRM ? 'Waiting' : 'Success';
  return (
    <Grid container className={classes.container}>
      <Grid container item xs={3}>
        <Grid container item xs={4}>
          <div className={classes.transaction}>
            <Typography className={classes.Tx}>Tx</Typography>
          </div>
        </Grid>
        <Grid container item xs={8} direction="column">
          <Link style={{ textDecoration: 'none' }} to={`/transactions/${id}`} >
            <Typography className={classes.blueText}>{`${hideCharacter(
              id,
            )}`}</Typography>
          </Link>

          <Typography className={classes.grayText}>{`${getTime(
            timeStamp,
          )}`}</Typography>
        </Grid>
      </Grid>
      <Grid container item xs={4} direction="column">
        <Typography className={classes.blueText}>
          <span style={{ color: 'black' }}>From</span>{' '}
          {`${hideCharacter(senderAddress)}`}
        </Typography>
        <Typography className={classes.blueText}>
          <span style={{ color: 'black' }}>To</span>{' '}
          {`${hideCharacter(receiverAddress)}`}
        </Typography>
      </Grid>
      <Grid container item xs={2}>
        <div className={classes.status}>
          <Typography
            className={classes.statusText}
            style={{ color: statusColor }}
          >
            {statusText}
          </Typography>
        </div>
      </Grid>
      <Grid container item xs={3} justify="center" alignItems="center">
        <Typography className={classes.blueText} style={{ color: 'black' }}>
          Amount:
        </Typography>
        <Typography className={classes.blueText}>
          &nbsp;&nbsp;{amount}
        </Typography>
      </Grid>
    </Grid>
  );
};

const useStyle = makeStyles({
  container: {
    marginBottom: '2%',
    paddingBottom: '2%',
    borderBottom: '1px solid #e0e0e0',
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
    fontSize: '0.85rem',
    fontWeight: 'bolder',
  },
});

export default Transaction;
