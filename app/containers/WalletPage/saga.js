import { call, put, take, takeLatest } from '@redux-saga/core/effects';
import React from 'react';
import {
  COPY_ADDRESS,
  GET_WALLET,
  MINING_BLOCK,
  MINING_BLOCK_CONFIRM,
  OPEN_TRANSACTION,
  SEND_TRANSACTION,
} from './constants';
import * as api from '../../apis';
import {
  getWallet,
  miningBlock,
  sendTransaction,
  updateMyTransactions,
  updateTransaction,
  updateWallet,
} from './actions';
import { BLOCK_CREATED, LOCAL_STORAGE_PRIVATE_KEY, TRANSACTION_CREATED } from '../../utils/constants';
import { copyToClipboard } from '../../utils/helpers';
import { setLoading, updateAlert, updateConfirmAlert } from '../App/actions';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import socket from '../../utils/socketClient';

function* getWalletSaga() {
  try {
    const privateKey = localStorage.getItem(LOCAL_STORAGE_PRIVATE_KEY);
    const resultWallet = yield call(api.getWallet, privateKey);
    const resultTransaction = yield call(api.getMyTransactionAPI, privateKey);

    yield put(updateMyTransactions(resultTransaction.payload.transactions));
    yield put(
      updateWallet(resultWallet.payload.address, resultWallet.payload.balance),
    );
  } catch (error) {
    console.log(error.message);
  }
}

function* openTransaction({ dispatch }) {
  try {
    const transactionDialog = {
      open: true,
      onSend: (address, amount) => {
        dispatch(sendTransaction(address, amount, dispatch));
        dispatch(updateTransaction({ open: false }));
      },
      onClose: () => dispatch(updateTransaction({ open: false })),
    };

    yield put(updateTransaction(transactionDialog));
  } catch (error) {
    console.log(error.message);
  }
}

function* sendTransactionSaga({ address, amount, dispatch }) {
  try {
    yield put(setLoading(true));

    yield call(
      api.sendTransactionAPI,
      address,
      amount,
      localStorage.getItem(LOCAL_STORAGE_PRIVATE_KEY),
    );

    const alert = {
      open: true,
      title: 'Alert',
      content: `Send transaction successfully.`,
      onClose: () => dispatch(updateAlert({ open: false })),
    };

    socket.emit(TRANSACTION_CREATED);

    yield put(getWallet());
    yield put(updateAlert(alert));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setLoading(false));
    console.log(error.message);
  }
}

function* copyAddress({ address, dispatch }) {
  try {
    copyToClipboard(address);

    const alert = {
      open: true,
      title: 'Alert',
      content: `Your address copied`,
      onClose: () => dispatch(updateAlert({ open: false })),
    };

    yield put(updateAlert(alert));
  } catch (error) {
    console.log(error.message);
  }
}

function* miningBlockConfirm({ dispatch }) {
  try {
    const confirmAlert = {
      open: true,
      title: 'Mining Block',
      content: 'Do you want to mining block? It will take a time.',
      onNo: () => dispatch(updateConfirmAlert({ open: false })),
      onYes: () => {
        dispatch(updateConfirmAlert({ open: false }));
        dispatch(miningBlock(dispatch));
      },
    };

    yield put(updateConfirmAlert(confirmAlert));
  } catch (error) {
    console.log(error.message);
  }
}

function* miningBlockSaga({ dispatch }) {
  try {
    yield put(setLoading(true));

    const result = yield call(
      api.miningBlockAPI,
      localStorage.getItem(LOCAL_STORAGE_PRIVATE_KEY),
    );
    const content = (
      <>
        <Typography>
          {`New block was found. Block index: ${result.payload.newBlock.index}.`}
        </Typography>
        <Typography>
          You have been rewarded 50 coin.
        </Typography>
        <Typography>
          Check it{' '}
          <Link
            onClick={() => dispatch(updateAlert({ open: false }))}
            to={`/history`}
          >
            here.
          </Link>
        </Typography>
      </>
    );

    socket.emit(BLOCK_CREATED);

    const alert = {
      open: true,
      title: 'New Block',
      content: content,
      onClose: () => dispatch(updateAlert({ open: false })),
    };

    yield put(getWallet())
    yield put(updateAlert(alert));
    yield put(setLoading(false));
  } catch (error) {
    console.log(error.message);
    yield put(setLoading(false));
  }
}

export default function* walletSaga() {
  yield takeLatest(GET_WALLET, getWalletSaga);
  yield takeLatest(OPEN_TRANSACTION, openTransaction);
  yield takeLatest(COPY_ADDRESS, copyAddress);
  yield takeLatest(MINING_BLOCK_CONFIRM, miningBlockConfirm);
  yield takeLatest(MINING_BLOCK, miningBlockSaga);
  yield takeLatest(SEND_TRANSACTION, sendTransactionSaga);
}
