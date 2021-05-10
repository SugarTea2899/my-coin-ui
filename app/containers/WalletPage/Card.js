import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import { hideCharacter } from '../../utils/helpers';

const Card = ({ title, icon, content, color, onClick, helper }) => {
  const classes = useStyle();
  const cursor = onClick ? 'pointer' : 'default';
  const handleClick = onClick ? onClick : () => {};

  return (
    <div className={classes.container} style={{background: color, cursor: cursor}} onClick={handleClick} > 
      <Grid container>
        <Grid container item xs={4}>
          {icon}
        </Grid>
        <Grid container item xs={8} direction='column'>
          <Typography className={classes.title}>{title}</Typography>
          {helper && <Typography className={classes.helper}>{helper}</Typography>}
          <Typography className={classes.content}>{hideCharacter(`${content}`, 40)}</Typography>
        </Grid>
      </Grid>
    </div>  
  );
};

const useStyle = makeStyles({
  container: {
    width: '100%',
    background: 'red',
    paddingTop: '7%',
    paddingBottom: '7%',
    paddingRight: '5%',
    borderRadius: 10
  },
  title: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: '1.5rem'
  },
  content: {
    color: 'white',
    fontSize: '0.8rem'
  },
  helper: {
    color: 'white',
    fontSize: '0.6rem',
    fontStyle: 'italic',
    fontWeight: 'bold'
  }
});

export default Card;
