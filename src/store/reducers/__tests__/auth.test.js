import auth, { defaultState } from '../auth';
import {
  TYPE_LOGIN_ATTEMPT,
  TYPE_LOGIN_INVALID,
  TYPE_LOGIN_SUCCESS,
  TYPE_LOGOUT_ATTEMPT,
  TYPE_LOGOUT_SUCCESS,
  TYPE_LOGIN_REFRESH,
} from '../../../actions/auth';

describe('auth', () => {
  // Initial state
  it('should provide the initial state', () => {
    expect(auth(undefined, {})).toEqual(defaultState);
  });

  // Login
  it('should handle LOGIN_ATTEMPT action', () => {
    const type = TYPE_LOGIN_ATTEMPT;

    expect(auth(defaultState, { type }))
      .toEqual({
        ...defaultState,
        message: 'Logging in...',
      });
  });

  it('should handle LOGIN_SUCCESS action', () => {
    const action = {
      type: TYPE_LOGIN_SUCCESS,
      username: 'testLogin',
    };

    expect(auth(defaultState, action))
      .toEqual({
        ...defaultState,
        isLoggedIn: true,
        username: 'testLogin',
      });
  });

  it('should handle LOGIN_INVALID action', () => {
    const action = {
      type: TYPE_LOGIN_INVALID,
      message: 'This is an error message.',
    };

    expect(auth(defaultState, action))
      .toEqual({
        ...defaultState,
        isError: true,
        message: 'This is an error message.',
      });
  });

  // Logout
  it('should handle LOGOUT_SUCCESS action', () => {
    const loggedInState = auth(defaultState, {
      type: TYPE_LOGIN_SUCCESS,
      username: 'testLogin',
    });
    const type = TYPE_LOGOUT_SUCCESS;

    expect(auth(loggedInState, { type }))
      .toEqual({
        ...loggedInState,
        isLoggedIn: false,
      });
  });

  // Refresh
  it('should handle REFRESH_SUCCESS action', () => {
    const afterErrorState = auth(defaultState, {
      type: TYPE_LOGIN_INVALID,
      message: 'This is an error message.',
    });
    const type = TYPE_LOGIN_REFRESH;

    expect(auth(afterErrorState, { type }))
      .toEqual({
        ...afterErrorState,
        message: '',
        username: '',
        isError: false,
      });
  });
});
