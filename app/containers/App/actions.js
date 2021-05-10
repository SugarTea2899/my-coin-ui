import { SET_LOADING, UPDATE_ALERT, UPDATE_CONFIRM } from "./constants";

export const setLoading = (loading) => ({
  type: SET_LOADING,
  loading
});

export const updateAlert = (alert) => ({
  type: UPDATE_ALERT,
  alert,
});

export const updateConfirmAlert = (confirmAlert) => ({
  type: UPDATE_CONFIRM,
  confirmAlert
})