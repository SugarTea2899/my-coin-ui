import { UPDATE_WALLET } from "./constants"

export const initialState = {
  address: '',
  balance: '',
}


const WalletReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_WALLET:
      return {...state, address: action.address, balance: action.balance};
    default:
      return state;
  }
}

export default WalletReducer;
