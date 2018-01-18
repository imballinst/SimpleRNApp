const login = (username, password) => (dispatch) => {
  const promise = new Promise((resolve) => {
    dispatch({
      type: 'LOGIN_ATTEMPT',
      username,
    });

    resolve();
  });

  return promise.then(() => {
    if (password !== '') {
      // Pretend that we're logging in within 1 second
      setTimeout(() => {
        dispatch({
          type: 'LOGIN',
          username,
        });
      }, 1000);
    } else {
      dispatch({
        type: 'LOGIN_INVALID',
        message: 'Password is empty!',
      });
    }
  });
};

// maybe make it similar like login
const logout = () => ({ type: 'LOGOUT' });

export { login, logout };
