import { call, put, take, takeLatest } from "@redux-saga/core/effects";
import { GET_WALLET, OPEN_TRANSACTION } from "./constants";
import * as api from '../../apis';
import { updateTransaction, updateWallet } from "./actions";
import { LOCAL_STORAGE_PRIVATE_KEY } from "../../utils/constants";

function* getWallet() {
  try {
    const privateKey = localStorage.getItem(LOCAL_STORAGE_PRIVATE_KEY)
    const result = yield call(api.getWallet, privateKey);
    yield put(updateWallet(result.payload.address, result.payload.balance));
  } catch (error) {
    console.log(error.message);
  }
}

function* openTransaction ({dispatch}) {
  try {
    const transactionDialog = {
      open: true,
      onSend: () => {},
      onClose: () => dispatch(updateTransaction({open: false}))
    }

    yield put(updateTransaction(transactionDialog));
  } catch (error) {
    console.log(error.message);
  }
}

export default function* walletSaga() {
  yield takeLatest(GET_WALLET, getWallet);
  yield takeLatest(OPEN_TRANSACTION, openTransaction)
}
