import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectWallet = state => state.wallet || initialState;

const makeSelectAddress = () => createSelector(
  selectWallet,
  walletState => walletState.address
)

const makeSelectBalance = () => createSelector(
  selectWallet,
  walletState => walletState.balance
)

const makeSelectTransaction = () => createSelector(
  selectWallet,
  walletState => walletState.transaction
)

export { makeSelectAddress, makeSelectBalance, makeSelectTransaction };
