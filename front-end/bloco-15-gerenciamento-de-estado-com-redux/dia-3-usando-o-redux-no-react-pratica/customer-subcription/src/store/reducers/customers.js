import { ADD_CUSTOMER } from '../actions/customers';

const INITIAL_STATE = [];

const customers = (state = INITIAL_STATE, { type, customer }) => {
  switch(type) {
    case ADD_CUSTOMER:
      return [...state, customer];
    default:
      return state;
  }
}

export default customers;
