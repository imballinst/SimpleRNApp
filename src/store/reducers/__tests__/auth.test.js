import auth from '../auth';

describe('auth', () => {
  // Default state
  const defaultState = {
    isLoggedIn: false,
    username: '',
  };

  // Initial state
  it('should provide the initial state', () => {
    expect(auth(undefined, {})).toEqual(defaultState);
  });

  // Request actions
  it('should handle LOGIN action', () => {
    const type = 'LOGIN'
    const username = 'testLogin';

    expect(auth(defaultState, { type, username }))
      .toEqual({ isLoggedIn: true, username: 'testLogin'});
  });

  it('should handle LOGOUT action', () => {
    const type = 'LOGOUT';

    expect(auth(defaultState, { type }))
      .toEqual({ isLoggedIn: false, username: ''});
  });
});
