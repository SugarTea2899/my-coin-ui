import { SET_LOADING } from "./constants";

export const initialState = {
  loading: false,
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {...state, loading: action.loading}
    default:
      return state;
  }
}

export default appReducer;
