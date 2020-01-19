// homeReducers.js
import {
  createAction,
  handleActions
} from 'redux-actions';
import { Map } from 'immutable';

// initial State
const initialState = Map({
  buttons:[
    {
      id    : 0,
      name  : 'one',
      show  : true
    },
    {
      id    : 1,
      name  : 'two',
      show  : true
    }
  ]
})

// Actions
const CHANGE_BTN_SHOW = 'home/CHANGE_BTN_SHOW';

// Action Creators
export const test = createAction(CHANGE_BTN_SHOW, id => id);

// Reducer
export default handleActions({
  [CHANGE_BTN_SHOW]: (state, action) => ({
    ...state,
    buttons: state.buttons.map(
      btn =>
        btn.id === action.payload
        ? {...btn, show: !btn.show }
        : btn
    ),
  }),
}, initialState)