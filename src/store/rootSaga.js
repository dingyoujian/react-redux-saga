import { all } from "redux-saga/effects";
import EvaluateSaga from "src/containers/Evaluate/saga";

export default function* rootSaga() {
  yield all([EvaluateSaga()]);
}
