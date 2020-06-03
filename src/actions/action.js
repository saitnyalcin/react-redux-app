import {
  INCREMENT_ACTION,
  DECREMENT_ACTION,
  SIGNIN_ACTION
} from '../constants/constants';

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

// set the login action
export const login = () => {
  return {
    type: SIGNIN_ACTION
  };
};
