import { call, put, takeEvery } from "redux-saga/effects";
import * as actionType from "./actionType";
import request from "src/fetch/request";

function* fetchEvaluate({ payload }) {
  const res = yield call(request.fetchEvaluate, payload);
  yield put({ type: actionType.SET_EVALUATE, payload });
}

function* watchEvaluate() {
  yield takeEvery(actionType.FETCH_EVALUATE, fetchEvaluate);
}

export default watchEvaluate;
