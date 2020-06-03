import { INCREMENT_ACTION, DECREMENT_ACTION } from '../constants/constants';

// REDUCER => BASED ON THE ACTION, IT WILL MODIFY THE STORE

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT_ACTION:
      return state + 1;
    case DECREMENT_ACTION:
      return state - 1;

    default:
      return state;
  }
};

export default counterReducer;
