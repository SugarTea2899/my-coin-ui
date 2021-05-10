import {
  COPY_ADDRESS,
  GET_WALLET,
  MINING_BLOCK,
  MINING_BLOCK_SUCCESS,
  MINING_BLOCK_CONFIRM,
  OPEN_TRANSACTION,
  UPDATE_TRANSACTION,
  UPDATE_WALLET,
  UPDATE_MY_TRANSACTIONS,
  SEND_TRANSACTION,
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

export const copyAddress = (address, dispatch) => ({
  type: COPY_ADDRESS,
  address,
  dispatch
})


export const miningBlockConfirm = (dispatch) => ({
  type: MINING_BLOCK_CONFIRM,
  dispatch
});

export const miningBlockSuccess = (block) => ({
  type: MINING_BLOCK_SUCCESS,
  block
});

export const miningBlock = (dispatch) => ({
  type: MINING_BLOCK,
  dispatch
})

export const updateMyTransactions = (myTransactions) => ({
  type: UPDATE_MY_TRANSACTIONS,
  myTransactions
})


export const sendTransaction = (address, amount, dispatch) => ({
  type: SEND_TRANSACTION,
  address,
  amount,
  dispatch
})
