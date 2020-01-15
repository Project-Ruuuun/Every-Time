import { combineReducers } from 'redux';
import authReducer from './authReducers';

const allReducers = combineReducers({
  authReducer,
});

export default allReducers;