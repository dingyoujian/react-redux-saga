import * as actionType from "./actionType";

const initialState = {
  list: []
};
export const EvaluateReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case actionType.INIT_EVALUATE:
      return Object.assign({}, state, initialState);
    default:
      return state;
  }
};
