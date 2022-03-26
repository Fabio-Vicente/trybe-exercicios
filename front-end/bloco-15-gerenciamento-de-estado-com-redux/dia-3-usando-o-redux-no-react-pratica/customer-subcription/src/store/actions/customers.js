export const ADD_CUSTOMER = 'ADD_CUSTOMER';
export const TOOGLE_CUSTOMERS_ORDER = 'TOOGLE_CUSTOMER_ORDER';
export const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER'

export const addCustomer = (customer) => ({
  type: ADD_CUSTOMER,
  customer,
})

export const toogleCustomersOrder = () => ({ type: TOOGLE_CUSTOMERS_ORDER });

export const removeCustomer = (customer) => ({
  type: REMOVE_CUSTOMER,
  customer,
})
