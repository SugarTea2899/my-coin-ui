/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import { Grid, makeStyles } from '@material-ui/core';
import React, { memo, useEffect } from 'react';
import MyAppBar from '../../components/MyAppBar';
import { useInjectReducer } from '../../utils/injectReducer';
import ScrollableTabsButtonAuto from './TabSection';
import reducer from './reducer';
import saga from './saga';
import { useInjectSaga } from '../../utils/injectSaga';
import Alert from '../../components/Alert';
import ConfirmAlert from '../../components/ConfirmAlert';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { makeSelectAlert, makeSelectConfirmAlert } from './selectors';
import { LOCAL_STORAGE_PRIVATE_KEY } from '../../utils/constants';
import history from '../../utils/history';

const key = 'home';

export const HomePage = () => {
  const classes = useStyles();
  useInjectReducer({key, reducer});
  useInjectSaga({key, saga});

  if (localStorage.getItem(LOCAL_STORAGE_PRIVATE_KEY))
    history.replace('/wallets');
  
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

const mapStateToProps = createStructuredSelector({

});

const withConnect = connect(
  mapStateToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
