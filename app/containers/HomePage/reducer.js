import { UPDATE_HOME_ALERT } from "./constants";

export const initialState = {
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

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_HOME_ALERT:
      return {...state, alert: action.alert};
    default:
      return state;
  }
}

export default homeReducer;
