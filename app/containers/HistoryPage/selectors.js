import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHistory = state => state.history || initialState;

const makeSelectBlocks = () =>
  createSelector(
    selectHistory,
    historyState => historyState.blocks,
  );

const makeSelectTransaction = () =>
  createSelector(
    selectHistory,
    historyState => historyState.transactions,
  );

export { makeSelectBlocks, makeSelectTransaction };
