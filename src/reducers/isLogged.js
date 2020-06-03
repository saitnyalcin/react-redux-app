import { SIGNIN_ACTION } from '../constants/constants';

// REDUCER => BASED ON THE ACTION, IT WILL MODIFY THE STORE

const loggedReducer = (state = true, action) => {
  switch (action.type) {
    case SIGNIN_ACTION:
      return !state;

    default:
      return state;
  }
};

export default loggedReducer;
