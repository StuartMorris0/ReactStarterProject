import React from 'react';
import Container from '@material-ui/core/Container';
import Text from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ReduxApiExample from './components/ReduxApi.container';

const ReduxApi = () => {
  return (
    <Container>
      <Box mb={1}>
        <Text variant="h4" component="h1">
          Redux API Example
        </Text>
        <Text>
          In this example we are using Redux via the @redux/toolkit. We are
          connecting to a free API:{' '}
          <a href="https://rapidapi.com/divad12/api/numbers-1?endpoint=53aa3b62e4b07e1f4ebea833">
            Numbers API
          </a>
        </Text>
        <Text>
          We use the useEffect hook to make a redux thunk dispatch to fetch the
          result. Loading and error state is handled.
        </Text>
        <Text>
          The numbers api is found in the /api/numbersapi/ folder structure. As
          we only have one fetch we export default a single function. There are
          some additional helper functions for generating fetch headers and
          handling different HTTP status responses.
        </Text>
      </Box>
      <Box>
        <ReduxApiExample />
      </Box>
    </Container>
  );
};

export default ReduxApi;
