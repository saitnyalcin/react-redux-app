import { INCREMENT_ACTION, DECREMENT_ACTION } from '../constants/constants';

const initState = {
  totalCount: 0
};

// REDUCER => BASED ON THE ACTION, IT WILL MODIFY THE STORE
const counterReducer = (state = initState, action) => {
  switch (action.type) {
    case INCREMENT_ACTION:
      return {
        totalCount: state.totalCount + 1
      };
    case DECREMENT_ACTION:
      return {
        totalCount: state.totalCount - 1
      };

    default:
      return state;
  }
};

export default counterReducer;
