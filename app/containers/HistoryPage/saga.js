import { call, put, takeLatest } from "@redux-saga/core/effects";
import { getHistoryAPI } from "../../apis";
import { loadHistory } from "./actions";
import { GET_HISTORY } from "./constants";

function* getHistory () {
  try {
    const result = yield call(getHistoryAPI);
    
    yield put(loadHistory(result.payload));
  } catch (error) {
    console.log(error.message);
  }
}

export default function* historySaga() {
  yield takeLatest(GET_HISTORY, getHistory)
}
