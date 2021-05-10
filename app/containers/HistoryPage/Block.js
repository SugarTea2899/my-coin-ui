import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import { getTime, hideCharacter } from '../../utils/helpers';
import { Link } from 'react-router-dom';

const Block = ({ index, miner, data, timeStamp }) => {
  const classes = useStyle();
  return (
    <Grid container className={classes.container}>
      <Grid container item xs={3}>
        <Grid container item xs={4}>
          <div className={classes.block}>
            <Typography className={classes.bk}>Bk</Typography>
          </div>
        </Grid>
        <Grid container item xs={8} direction="column">
          <Link style={{textDecoration: 'none'}} to={`/blocks/${index}`}>
            <Typography className={classes.blueText}>{index}</Typography>
          </Link>
          <Typography className={classes.grayText}>
            {getTime(timeStamp)}
          </Typography>
        </Grid>
      </Grid>
      <Grid container item xs={3}>
        <Typography className={classes.blueText}>
          <span style={{ color: 'black' }}>Miner</span> {hideCharacter(miner)}
        </Typography>
        <Typography className={classes.grayText}>{`${
          data.length
        } transactions`}</Typography>
      </Grid>
      <Grid container item xs={6} justify="flex-end" alignItems="center">
        <Typography className={classes.blueText} style={{ color: 'black' }}>
          Reward:
        </Typography>
        <Typography className={classes.blueText}>&nbsp;&nbsp;50</Typography>
      </Grid>
    </Grid>
  );
};

const useStyle = makeStyles({
  container: {
    marginBottom: '2%',
    paddingBottom: '2.5%',
    borderBottom: '1px solid #e0e0e0',
  },
  block: {
    width: '40px',
    height: '40px',
    background: '#bdbdbd',
    borderRadius: 6,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bk: {
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
});

export default Block;
