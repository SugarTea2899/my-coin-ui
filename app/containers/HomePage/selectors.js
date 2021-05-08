import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const makeSelectAlert = () =>
  createSelector(
    selectHome,
    homeState => homeState.alert,
  );

const makeSelectConfirmAlert = () =>
  createSelector(
    selectHome,
    homeState => homeState.confirmAlert,
  );

export { makeSelectAlert, makeSelectConfirmAlert };
