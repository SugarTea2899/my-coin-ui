/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import { Grid, makeStyles } from '@material-ui/core';
import React, { useEffect } from 'react';
import MyAppBar from '../../components/MyAppBar';
import { fetchData } from '../../utils/apiClient';
import messages from './messages';
import ScrollableTabsButtonAuto from './TabSection';

export default function HomePage() {
  const classes = useStyles();

  useEffect(() => {
    const getData = async () => {
      const res = await fetchData('post', '/wallets');
      console.log(res);
    };

    getData();
  }, []);
  return (
    <div className={classes.container}>
      <MyAppBar />
      <div className={classes.tabSection}>
        <Grid container>
          <Grid container item xs={4} />
          <Grid container item xs={4}>
            <ScrollableTabsButtonAuto />
          </Grid>
          <Grid container item xs={4} />
        </Grid>
      </div>
    </div>
  );
}

const useStyles = makeStyles({
  container: {
    width: '100%',
    height: '100%',
  },
  tabSection: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
});
