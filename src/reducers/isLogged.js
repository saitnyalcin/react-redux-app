// REDUCER => BASED ON THE ACTION, IT WILL MODIFY THE STORE

const loggedReducer = (state = false, action) => {
  switch (action.type) {
    case 'SIGIN':
      return state;

    default:
      return state;
  }
};

export default loggedReducer;
