import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
// eslint-disable-next-line no-restricted-imports
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import App from './ui/App';
import getStore from './redux-store';
import theme from './ui/theme';
import './index.scss';

const store = getStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>
          <CssBaseline>
            <App />
          </CssBaseline>
        </StyledThemeProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
