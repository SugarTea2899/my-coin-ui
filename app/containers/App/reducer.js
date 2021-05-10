import { SET_LOADING, UPDATE_ALERT, UPDATE_CONFIRM } from "./constants";

export const initialState = {
  loading: false,
  alert: {
    open: false,
    title: '',
    content: '',
    onClose: () => {}
  },
  confirmAlert: {
    open: false,
    title: '',
    content: '',
    onYes: () => {},
    onNo: () => {}
  }
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {...state, loading: action.loading}
    case UPDATE_ALERT:
      return {...state, alert: action.alert}
    case UPDATE_CONFIRM:
      return {...state, confirmAlert: action.confirmAlert}
    default:
      return state;
  }
}

export default appReducer;
