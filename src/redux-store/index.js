import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import rootReducer from './reducers';

const history = createBrowserHistory();

const middleware = [...getDefaultMiddleware(), routerMiddleware(history)];

const reducers = rootReducer(history);

export default function configureAppStore(preloadedState) {
  const store = configureStore({
    reducer: reducers,
    middleware,
    preloadedState,
  });

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () =>
      store.replaceReducer(rootReducer(history))
    );
  }

  return store;
}
