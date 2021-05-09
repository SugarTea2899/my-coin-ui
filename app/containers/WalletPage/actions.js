import {
  GET_WALLET,
  OPEN_TRANSACTION,
  UPDATE_TRANSACTION,
  UPDATE_WALLET,
} from './constants';

export const updateWallet = (address, balance) => ({
  type: UPDATE_WALLET,
  address,
  balance,
});

export const getWallet = () => ({
  type: GET_WALLET,
});

export const updateTransaction = transactionDialog => ({
  type: UPDATE_TRANSACTION,
  transactionDialog,
});

export const openTransaction = dispatch => ({
  type: OPEN_TRANSACTION,
  dispatch,
});
