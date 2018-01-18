import { applyMiddleware, createStore, compose } from 'redux';
import { offline } from '@redux-offline/redux-offline';
import offlineConfig from '@redux-offline/redux-offline/lib/defaults';
import axios from 'axios';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import getAppVersion from './helpers/AppVersion';
// Middlewares
import middlewares from './middlewares';
// Reducers
import combinedReducers from './reducers';

const persistStorage = (store, options, callback) => {
  AsyncStorage.getItem('reduxPersist:appVersion')
    .then((itemValue) => {
      const getPersistedStore = () => persistStore(
        store,
        { storage: AsyncStorage, ...options },
        callback,
      );
      const currentAppVersion = getAppVersion;

      if (itemValue) {
        // If version is identified
        const app = JSON.parse(itemValue);

        if (app && app.version !== currentAppVersion) {
          getPersistedStore().purge();

          AsyncStorage.setItem(
            'reduxPersist:appVersion',
            JSON.stringify({ version: currentAppVersion }),
          );
        } else {
          getPersistedStore(); // .purge to clean the offline data
        }
      } else {
        // If no, define one
        AsyncStorage.setItem(
          'reduxPersist:appVersion',
          JSON.stringify({ version: currentAppVersion }),
        );
      }
    });
};

const reduxOfflineConfig = {
  ...offlineConfig,
  persist: persistStorage,
  effect: effect => axios(effect),
  discard: (error, action, retries) => {
    const { response } = error;

    return (response && response.status >= 400) || retries > 10;
  },
};

const myMiddlewares = [...middlewares];

if (__DEV__) {
  myMiddlewares.push(logger);
}

const store = createStore(
  combinedReducers,
  compose(
    applyMiddleware(...myMiddlewares),
    offline(reduxOfflineConfig),
  ),
);

export default store;
