import { DECREMENT_ACTION, INCREMENT_ACTION } from '../constants/constants';

// ACTION => THE ACTION THAT YOU WANNA IMPLEMENT

// set the increment action
export const increment = () => {
  return {
    type: INCREMENT_ACTION
  };
};

// set the decrement action
export const decrement = () => {
  return {
    type: DECREMENT_ACTION
  };
};
