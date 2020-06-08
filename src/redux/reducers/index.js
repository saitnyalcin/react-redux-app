import { combineReducers } from 'redux';
import counterReducer from './counterReducer';

// you can combine all reducers with the method
const rootReducer = combineReducers({
  counter: counterReducer
});

export default rootReducer;
