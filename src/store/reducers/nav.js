import { NavigationActions } from 'react-navigation';

import { AppNavigator } from '../../routers';

const { getStateForAction } = AppNavigator.router;
const { init, NAVIGATE } = NavigationActions;

const initialNavState = getStateForAction(init());

const nav = (state = initialNavState, action) => {
  if (action.type === NAVIGATE) {
    return getStateForAction(action, state);
  }

  return state;
};

export default nav;
