import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Text from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components/macro';

const CodeText = styled(Text)`
  font-size: 0.85rem;
  background: #f1f1f1;
  padding: ${(props) => `${props.theme.spacing(3)}px`};
  margin-top: ${(props) => `${props.theme.spacing(2)}px`};
  margin-bottom: ${(props) => `${props.theme.spacing(2)}px`};
  color: ${(props) => props.theme.palette.secondary.main};
`;

const Home = () => {
  return (
    <Container>
      <Box mb={4}>
        <Text variant="h4" component="h1">
          Home
        </Text>
        <Text>
          Welcome to a React Starter Project. This project was created with
          &apos;some of the best&apos; current methods for building a React Web
          Application.
        </Text>
      </Box>
      <Box mb={4}>
        <Text variant="h5" component="h2">
          Create React App
        </Text>
        <Text>The application was built on the create-react-app method. </Text>
        <a
          href="https://github.com/facebook/create-react-app"
          title="Create React App Documentation"
        >
          Create React App Documentation
        </a>
        <Text>
          The application is <strong>not ejected</strong>, this means it still
          uses the default configuration from using create react app such as
          Babel and Webpack configuration.
        </Text>
      </Box>

      <Box mb={4}>
        <Text variant="h5" component="h2">
          Configuration
        </Text>
        <Text>
          We use eslint in the application along with plugins and babel. We also
          use prettier to help with code syntax and code style.
        </Text>
        <Text>
          These are configured with devDependencies such as the following:
        </Text>
        <CodeText>
          npm install --save-dev babel-eslint babel-plugin-macros
          eslint-config-airbnb eslint-config-prettier eslint-plugin-flowtype
          eslint-plugin-import eslint-plugin-prettier eslint-plugin-react
          eslint-plugin-react-hooks prettier
        </CodeText>
        <Text>
          We use an .eslintrc file to configure eslint along with plugin
          configuration and some additional rules. We also use a .prettierrc
          file with basic configuration.
        </Text>
        <Text>
          You can run the command `npm run lint` to run lint on the full
          project.
        </Text>
        <Text>
          Prop Types - the prop-types package is used for prop type validation
          for React Components. This ensures the correct read only value is sent
          to a component.{' '}
        </Text>
      </Box>

      <Box mb={4}>
        <Text variant="h5" component="h2">
          Routing
        </Text>
        <Text>
          We use React Router to handle routing. We also use Connected React
          Router to attach routing to redux.
        </Text>
        <CodeText>
          npm install --save react-router-dom connected-react-router history
        </CodeText>
        <a
          href="https://github.com/supasate/connected-react-router"
          title="Connected React Router"
        >
          Connected React Router
        </a>
        <Text>
          Using connected router allows us to Synchronize router state with
          redux store through uni-directional flow, Supports functional
          component hot reloading while preserving state (with react-hot-reload)
          and Dispatching of history methods (push, replace, go, goBack,
          goForward) works for both redux-thunk and redux-saga.
        </Text>
      </Box>
      <Box mb={4}>
        <Text variant="h5" component="h2">
          Hot Reloading
        </Text>
        <Text>
          We use the default configuration available for hot reloading with
          create-react-app. This does a `module.hot.accept` call to handle the
          hot reloading. Hot reloading means the application will not refresh on
          changes and allow for quicker development time, keeping state and prop
          values from before.
        </Text>
        <Text>
          However, with this basic setup, we do not maintain state on reloads.
          To get hot reloading working as expected with state, we would need to
          eject the application.{' '}
          <a href="https://blog.logrocket.com/validating-react-component-props-with-prop-types-ef14b29963fc/">
            Example
          </a>
        </Text>
      </Box>
      <Box mb={4}>
        <Text variant="h5" component="h2">
          Ejecting
        </Text>
        <Text>
          Whilst this application is tied to the create-react-app method, it
          could be ejected. This would mean you take ownership of the
          webpack/babel and other configurations. It creates a local version of
          the react-scripts which run so you are tied to a version. This is not
          the preferred approach, but it is available, once ejected you could
          add further configuration such as using the react-hot-loader package
          and configuration allowing to work with state.
        </Text>
      </Box>

      <Box mb={4}>
        <Box mb={1}>
          <Text variant="h5" component="h2">
            Packages
          </Text>
          <Text>This project uses a range of other packages worth noting.</Text>
        </Box>
        <Box mb={1}>
          <Paper elevation={0} variant="outlined">
            <Box p={2}>
              <Text variant="h6" component="h4">
                react-uuid
              </Text>
              <Text>
                This is a helper package for generating a uuid in React. Useful
                for key objects in React.
              </Text>
              <CodeText>uuid()</CodeText>
            </Box>
          </Paper>
        </Box>
        <Box mb={1}>
          <Paper elevation={0} variant="outlined">
            <Box p={2}>
              <Text variant="h6" component="h4">
                notistack
              </Text>
              <Text>
                Notistack is a Snackbar library which makes it extremely easy to
                display notifications on your web apps. In this specific
                application which uses Material UI for styling it is used in
                conjunction with this library.
              </Text>
              <CodeText>uuid()</CodeText>
            </Box>
          </Paper>
        </Box>
      </Box>

      <Box mb={4}>
        <Box mb={1}>
          <Text variant="h5" component="h2">
            Redux
          </Text>
          <Text>
            We use Redux for state management. In this application we are using
            the @reduxjs/toolkit approach.
          </Text>
        </Box>
        <Box mb={1}>
          <Paper elevation={0} variant="outlined">
            <Box p={2}>
              <Text>Redux Toolkit includes these APIs: </Text>
              <Text>
                <strong>configureStore</strong>(): wraps createStore to provide
                simplified configuration options and good defaults. It can
                automatically combine your slice reducers, adds whatever Redux
                middleware you supply, includes redux-thunk by default, and
                enables use of the Redux DevTools Extension.
              </Text>
              <Text>
                <strong>createReducer</strong>(): that lets you supply a lookup
                table of action types to case reducer functions, rather than
                writing switch statements. In addition, it automatically uses
                the immer library to let you write simpler immutable updates
                with normal mutative code, like state.todos[3].completed = true.
              </Text>
              <Text>
                <strong>createAction</strong>(): generates an action creator
                function for the given action type string. The function itself
                has toString() defined, so that it can be used in place of the
                type constant.
              </Text>
              <Text>
                <strong>createSlice</strong>(): accepts an object of reducer
                functions, a slice name, and an initial state value, and
                automatically generates a slice reducer with corresponding
                action creators and action types.{' '}
              </Text>
              <Text>
                <strong>createAsyncThunk</strong>: accepts an action type string
                and a function that returns a promise, and generates a thunk
                that dispatches pending/resolved/rejected action types based on
                that promise{' '}
              </Text>
              <Text>
                <strong>createEntityAdapter</strong>: generates a set of
                reusable reducers and selectors to manage normalized data in the
                store The createSelector utility from the Reselect library,
                re-exported for ease of use.
              </Text>
            </Box>
          </Paper>
        </Box>
      </Box>

      <Box mb={4}>
        <Text variant="h5" component="h2">
          Styling
        </Text>
        <Text>Information about Styled-components to come</Text>
      </Box>

      <Box mb={4}>
        <Text variant="h5" component="h2">
          UI
        </Text>
        <Text>
          Information about Material UI to come along with styled-system
          approach
        </Text>
      </Box>

      <Box mb={4}>
        <Text variant="h5" component="h2">
          Folder Structure
        </Text>
        <Text>
          Information about NODE_PATH and file structure for project. Also
          information about ordered imports.
        </Text>
      </Box>
    </Container>
  );
};

export default Home;
