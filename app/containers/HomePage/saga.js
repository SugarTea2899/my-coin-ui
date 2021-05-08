import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchData } from '../../utils/apiClient';
import { LOCAL_STORAGE_PRIVATE_KEY } from '../../utils/constants';
import { copyToClipboard } from '../../utils/helpers';
import history from '../../utils/history';
import { setLoading } from '../App/actions';
import { updateWallet } from '../WalletPage/actions';
import { updateHomeAlert } from './actions';
import { ACCESS_WALLET, CREATE_PRIVATE_KEY } from './constants';

function* createPrivateKey({ dispatch }) {
  try {
    yield put(setLoading(true));
    const result = yield call(fetchData, 'post', '/wallets');
    copyToClipboard(result);

    const alert = {
      open: true,
      title: 'Alert',
      content:
        'Your private key was copied to clip board.\nPlease store it carefully.',
      onClose: () => dispatch(updateHomeAlert({ open: false })),
    };

    yield put(setLoading(false));
    yield put(updateHomeAlert(alert));
  } catch (error) {
    const alert = {
      open: true,
      title: 'Alert',
      content: `${error.message}`,
      onClose: () => dispatch(updateHomeAlert({ open: false })),
    };

    yield put(setLoading(false));
    yield put(updateHomeAlert(alert));
  }
}

function* accessWallet({privateKey, dispatch}) {
  if (privateKey.length < 64) {
    const alert = {
      open: true,
      title: 'Alert',
      content: `Your private key is wrong`,
      onClose: () => dispatch(updateHomeAlert({ open: false })),
    };

    yield put(updateHomeAlert(alert));
    return;
  }

  try {
    yield put(setLoading(true));
    const result = yield call(fetchData, 'get', '/wallets', undefined, privateKey);

    localStorage.setItem(LOCAL_STORAGE_PRIVATE_KEY, privateKey);
    yield put(setLoading(false));

    yield put(updateWallet(result.payload.address, result.payload.balance));
    history.replace('/wallets');
  } catch (error) {
    const alert = {
      open: true,
      title: 'Alert',
      content: `${error.message}`,
      onClose: () => dispatch(updateHomeAlert({ open: false })),
    };

    yield put(setLoading(false));
    yield put(updateHomeAlert(alert));
  }
  

}
export default function* homeSaga() {
  yield takeLatest(CREATE_PRIVATE_KEY, createPrivateKey);
  yield takeLatest(ACCESS_WALLET, accessWallet)
}
