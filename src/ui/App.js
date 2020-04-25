import React from 'react';
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router';

import AppBar from './shared-components/AppBar';
import routes from './routes';

const history = createBrowserHistory();

const App = () => {
  return (
    <ConnectedRouter history={history}>
      <AppBar />
      {routes}
    </ConnectedRouter>
  );
};

export default App;
