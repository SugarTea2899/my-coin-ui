import { UPDATE_TRANSACTION, UPDATE_WALLET } from "./constants";

export const initialState = {
  address: '',
  balance: '',
  transaction: {
    open: false,
    onSend: () => {},
    onClose: () => {},
  }
}

const WalletReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_WALLET:
      return {...state, address: action.address, balance: action.balance};
    case UPDATE_TRANSACTION:
      return {...state, transaction: action.transactionDialog}
    default:
      return state;
  }
}

export default WalletReducer;
