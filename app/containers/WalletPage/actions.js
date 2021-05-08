import { UPDATE_WALLET } from "./constants";

export const updateWallet = (address, balance) => ({
  type: UPDATE_WALLET,
  address,
  balance
})
