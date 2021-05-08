import { ACCESS_WALLET, CREATE_PRIVATE_KEY, CREATE_PRIVATE_KEY_SUCCESS, UPDATE_HOME_ALERT } from "./constants";

export const createPrivateKey = (dispatch) => ({
  type: CREATE_PRIVATE_KEY,
  dispatch
});

export const accessWallet = (privateKey, dispatch) => ({
  type: ACCESS_WALLET,
  privateKey,
  dispatch
})
export const updateHomeAlert = (alert) => ({
  type: UPDATE_HOME_ALERT,
  alert,
});
