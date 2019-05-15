import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(
    sagaMiddleware // 一个很便捷的 middleware，用来打印 action 日志
  )
);

sagaMiddleware.run(rootSaga);

export default store;
