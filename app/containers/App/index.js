/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { memo } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';
import { makeStyles } from '@material-ui/core';
import WalletPage from '../WalletPage';
import HistoryPage from '../HistoryPage';
import BlockPage from '../BlockPage';
import { connect, useSelector } from 'react-redux';
import LoadingIndicator from '../../components/LoadingIndicator';
import TransactionPage from '../TransactionPage';
import Alert from '../../components/Alert';
import ConfirmAlert from '../../components/ConfirmAlert';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { makeSelectAlert, makeSelectConfirmAlert } from './selectors';
import BlockDetailPage from '../BlockDetailPage';

export function App({alert, confirmAlert}) {
  const classes = useStyles();
  const globalState = useSelector(state => state.global);

  return (
    <div className={classes.container}>
      {globalState.loading && <LoadingIndicator />}
      <Alert {...alert} />
      <ConfirmAlert {...confirmAlert} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/wallets" component={WalletPage} />
        <Route path="/history" component={HistoryPage} />
        <Route path="/blocks/:index" component={BlockDetailPage}/>
        <Route path="/blocks" component={BlockPage} />
        <Route path='/transactions' component={TransactionPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}

const useStyles = makeStyles({
  container: {
    width: '100%',
    height: '100%',
  },
});

const mapStateToProps = createStructuredSelector({
  alert: makeSelectAlert(),
  confirmAlert: makeSelectConfirmAlert()
})

const withConnect = connect(
  mapStateToProps,
  undefined
);

export default compose(
  withConnect,
  memo
)(App);
