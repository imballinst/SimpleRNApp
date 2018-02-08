import { NavigationActions } from 'react-navigation';

import { AppNavigator } from '../../routers';

const { getStateForAction } = AppNavigator.router;
const { init, NAVIGATE } = NavigationActions;

const initialNavState = getStateForAction(init());

const nav = (state = initialNavState, action) => {
  if (action.type === NAVIGATE) {
    let isDrawer = false;

    const firstIndexOfView = state.routes.findIndex((route) => {
      const { routeName, routes } = route;

      if (routes) {
        // Drawer has route.routes, which contains DrawerClose, DrawerOpen, DrawerToggle
        // The DrawerClose object has index and routes, indicating the current Drawer view
        isDrawer = true;

        return true;
      }
      return action.routeName === routeName;
    });

    if (firstIndexOfView === -1 || isDrawer) {
      return getStateForAction(action, state);
    }
    const newIndex = firstIndexOfView;
    const newRoutes = [...state.routes].splice(0, newIndex + 1);
    const newNav = { index: newIndex, routes: newRoutes };

    return newNav;
  }

  return state;
};

export default nav;
