import { NavigationActions } from 'react-navigation';

const TYPE_LOGIN_ATTEMPT = 'LOGIN_ATTEMPT';
const TYPE_LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const TYPE_LOGIN_INVALID = 'LOGIN_INVALID';
const TYPE_LOGOUT_ATTEMPT = 'LOGOUT_ATTEMPT';
const TYPE_LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
const TYPE_LOGIN_REFRESH = 'LOGIN_REFRESH';

const login = (username, password) => (dispatch) => {
  const promise = new Promise((resolve, reject) => {
    dispatch({
      type: TYPE_LOGIN_ATTEMPT,
      username,
      password,
    });

    // Pretend that we're logging in within 0.25 second
    setTimeout(() => {
      if (password !== '') {
        resolve({
          type: TYPE_LOGIN_SUCCESS,
          username,
        });
      } else {
        reject();
      }
    }, 250);
  });

  return promise.then(obj => dispatch(obj))
    .then(() => dispatch(NavigationActions.navigate({ routeName: 'Home' })))
    .catch(() => dispatch({
      type: TYPE_LOGIN_INVALID,
      message: 'Password is empty!',
    }));
};

const logout = () => (dispatch) => {
  const promise = new Promise((resolve) => {
    dispatch({ type: TYPE_LOGOUT_ATTEMPT });

    // Pretend that we're logging out within 0.25 second
    setTimeout(() => {
      resolve({ type: TYPE_LOGOUT_SUCCESS });
    }, 250);
  });

  return promise.then(obj => dispatch(obj))
    .then(() => dispatch(NavigationActions.navigate({ routeName: 'Login' })));
};

const refreshLoginView = () => ({ type: TYPE_LOGIN_REFRESH });

export {
  TYPE_LOGIN_ATTEMPT,
  TYPE_LOGIN_INVALID,
  TYPE_LOGIN_SUCCESS,
  TYPE_LOGOUT_ATTEMPT,
  TYPE_LOGOUT_SUCCESS,
  TYPE_LOGIN_REFRESH,
  login,
  logout,
  refreshLoginView,
};
