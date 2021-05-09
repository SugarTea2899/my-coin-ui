import { GET_HISTORY_SUCCESS } from './constants';

export const initialState = {
  blocks: [],
  transactions: [],
};

const HistoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HISTORY_SUCCESS:
      return {
        ...state,
        blocks: action.history.blocks,
        transactions: action.history.transactions,
      };
    default:
      return state;
  }
};

export default HistoryReducer;
