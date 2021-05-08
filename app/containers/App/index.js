/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';
import { makeStyles } from '@material-ui/core';
import WalletPage from '../WalletPage';
import HistoryPage from '../HistoryPage';
import BlockPage from '../BlockPage';
import { useSelector } from 'react-redux';
import LoadingIndicator from '../../components/LoadingIndicator';

export default function App() {
  const classes = useStyles();
  const globalState = useSelector(state => state.global);

  return (
    <div className={classes.container}>
      {globalState.loading && <LoadingIndicator />}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/wallets" component={WalletPage} />
        <Route path="/history" component={HistoryPage} />
        <Route path="/blocks" component={BlockPage} />
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
