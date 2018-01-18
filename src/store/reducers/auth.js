const defaultState = {
  isLoggedIn: false,
  username: '',
};

const auth = (state = defaultState, action) => {
  const { type } = action;

  switch (type) {
    case 'LOGIN': {
      return Object.assign({}, state, {
        isLoggedIn: true,
        username: action.username,
      });
    }
    case 'LOGOUT': {
      return Object.assign({}, state, {
        isLoggedIn: false,
        username: '',
      });
    }
    default: return state;
  }
};

export default auth;
