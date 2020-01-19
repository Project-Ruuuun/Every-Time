import { createAction, handleActions } from 'redux-actions';

// Default State
const initialState = {
  logined: false
};

// Actions
const AUTHORIZED = "Authorized";

export const setAuth = createAction(AUTHORIZED);


export default handleActions({
  [AUTHORIZED]: (state, action) => {
    let newState = {
      ...state,
      logined: action.payload.logined,
    }
    return newState;
  }
}, initialState);
