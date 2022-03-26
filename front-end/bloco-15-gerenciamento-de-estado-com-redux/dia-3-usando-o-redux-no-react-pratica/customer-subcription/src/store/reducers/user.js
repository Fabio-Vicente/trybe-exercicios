import { LOGIN } from '../actions/user';

const INITIAL_STATE = {
  email: '',
  password: '',
  isLogged: false,
}

const user = (state = INITIAL_STATE, { type, email, password }) => {
  switch (type) {
    case LOGIN:
      return {
        ...state,
        email,
        password,
        isLogged: true,
      };
    default:
      return state;
  }
}

export default user;
