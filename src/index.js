import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import AppNavigatorWithStore from './routers';

const App = () => (
  <Provider store={store}>
    <AppNavigatorWithStore />
  </Provider>
);

export default App;
