import { ADD_CUSTOMER, TOOGLE_CUSTOMERS_ORDER, REMOVE_CUSTOMER } from '../actions/customers';

const INITIAL_STATE = {
  customersList: [],
  sortedCustomersList: [],
  isSorted: false,
}

const customers = (state = INITIAL_STATE, { type, customer }) => {
  switch(type) {
    case ADD_CUSTOMER:
      return {
        ...state,
        customersList: [...state.customersList, customer],
        sortedCustomersList: [...state.customersList, customer].sort((prev, next) =>
          prev.name > next.name ? 1 : -1)
      }
    case TOOGLE_CUSTOMERS_ORDER:
      return {
        ...state,
        isSorted: !state.isSorted,
      }
    case REMOVE_CUSTOMER:
      const removedCustomerIndex = state.customersList.indexOf(customer);
      const removedCustomerSortedIndex = state.sortedCustomersList.indexOf(customer);
      return {
        ...state,
        customersList: [
          ...state.customersList.slice(0, removedCustomerIndex),
          ...state.customersList.slice(removedCustomerIndex + 1),
        ],
        sortedCustomersList: [
          ...state.sortedCustomersList.slice(0, removedCustomerSortedIndex),
          ...state.sortedCustomersList.slice(removedCustomerSortedIndex + 1),
        ],
      }
    default:
      return state;
  }
}

export default customers;
