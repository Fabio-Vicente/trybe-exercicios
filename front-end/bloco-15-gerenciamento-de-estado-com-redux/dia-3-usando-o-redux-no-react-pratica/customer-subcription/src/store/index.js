import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import user from './reducers/user';
import customers from './reducers/customers'

const rootReducer = combineReducers({
  user,
  customers,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
