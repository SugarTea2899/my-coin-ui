import { GET_HISTORY, GET_HISTORY_SUCCESS } from "./constants";

export const getHistory = () => ({
  type: GET_HISTORY
});

export const loadHistory = (history) => ({
  type: GET_HISTORY_SUCCESS,
  history
})