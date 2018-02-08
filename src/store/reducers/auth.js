import {
  TYPE_LOGIN_ATTEMPT,
  TYPE_LOGIN_INVALID,
  TYPE_LOGIN_SUCCESS,
  TYPE_LOGOUT_SUCCESS,
  TYPE_LOGIN_REFRESH,
} from '../../actions/auth';

const defaultState = {
  isLoggedIn: false,
  username: '',
  isError: false,
  message: '',
};

const auth = (state = defaultState, action) => {
  const { type, username = '', message = '' } = action;

  switch (type) {
    case TYPE_LOGIN_ATTEMPT: {
      return {
        ...state,
        message: 'Logging in...',
        isError: false,
      };
    }
    case TYPE_LOGIN_SUCCESS: {
      return {
        ...state,
        isLoggedIn: true,
        username,
        message,
        isError: false,
      };
    }
    case TYPE_LOGIN_INVALID: {
      return {
        ...state,
        message,
        isError: true,
      };
    }
    case TYPE_LOGOUT_SUCCESS: {
      return {
        ...state,
        isLoggedIn: false,
      };
    }
    case TYPE_LOGIN_REFRESH: {
      return {
        ...state,
        message,
        username,
        isError: false,
      };
    }
    default: return state;
  }
};

export { defaultState };
export default auth;
