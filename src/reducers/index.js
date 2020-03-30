import counterReducer from './counter';
import loggedReducer from './isLogged';
import { combineReducers } from 'redux';

// you can combine all reducers with the method
const allReducer = combineReducers({
  counter: counterReducer,
  login: loggedReducer
});

export default allReducer;
