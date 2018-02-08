import {
  TYPE_LOGIN_ATTEMPT,
  TYPE_LOGIN_INVALID,
  TYPE_LOGIN_SUCCESS,
  TYPE_LOGOUT_ATTEMPT,
  TYPE_LOGOUT_SUCCESS,
  TYPE_LOGIN_REFRESH,
  login,
  logout,
  refreshLoginView,
} from '../auth';
import configureMockStore from 'redux-mock-store';
import { NavigationActions } from 'react-navigation';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('auth', () => {
  it('should return login action creator, async', () => {
    const expectedActions = [
      { type: TYPE_LOGIN_ATTEMPT, username: 'testUsername', password: 'testPassword' },
      { type: TYPE_LOGIN_SUCCESS, username: 'testUsername' },
      { type: NavigationActions.NAVIGATE, routeName: 'Home' },
    ];
    const store = mockStore({});

    return store.dispatch(login('testUsername', 'testPassword')).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should return logout action creator, async', () => {
    const expectedActions = [
      { type: TYPE_LOGOUT_ATTEMPT },
      { type: TYPE_LOGOUT_SUCCESS },
      { type: NavigationActions.NAVIGATE, routeName: 'Login' },
    ];
    const store = mockStore({});

    return store.dispatch(logout()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should return refresh login action creator', () => {
    expect(refreshLoginView()).toEqual({ type: TYPE_LOGIN_REFRESH });
  });
});
