import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHistory = state => state.history || initialState;

const makeSelectBlocks = () =>
  createSelector(
    selectHistory,
    historyState => historyState.blocks,
  );

const makeSelectBlock = index =>
  createSelector(
    selectHistory,
    historyState => historyState.blocks[index],
  );

const makeSelectTransactions = () =>
  createSelector(
    selectHistory,
    historyState => historyState.transactions,
  );

const makeSelectTransaction = (id) => createSelector(
  selectHistory,
  historyState => historyState.transactions.filter((tx) => tx.id === id)[0]
)

export { makeSelectBlocks, makeSelectBlock,  makeSelectTransactions, makeSelectTransaction };
