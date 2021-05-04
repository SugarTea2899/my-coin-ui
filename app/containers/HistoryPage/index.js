import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import MyAppBar from '../../components/MyAppBar';
import MyList from './MyList';

const HistoryPage = () => {
  const classes = useStyle();

  return (
    <div className={classes.container}>
      <MyAppBar />
      <Grid container spacing={5} style={{ padding: '3%' }}>
        <Grid container item xs={6}>
          <MyList />
        </Grid>
        <Grid container item xs={6}>
          <MyList />
        </Grid>
      </Grid>
    </div>
  );
};

const useStyle = makeStyles({
  container: {
    width: '100%',
    height: '100%',
  },
});

export default HistoryPage;
