import React from 'react';
import Container from '@material-ui/core/Container';
import Text from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Counter from './components/Counter.container';

const Redux = () => {
  return (
    <Container>
      <Box mb={1}>
        <Text variant="h4" component="h1">
          Redux
        </Text>
        <Text>
          In this example we are using Redux via the @redux/toolkit. This is a
          &apos; batteries included &apos; toolkit for redux development. Less
          boilerplate code and allows for quicker Redux development.
        </Text>
      </Box>
      <Box mb={1}>
        <Text color="primary">
          <strong>To be styled... give it time...</strong>
        </Text>
      </Box>
      <Box>
        <Text>
          We use the Counter example provided with the toolkit usage guide just
          written cleaner (IMO).
        </Text>
      </Box>
      <Box>
        <Counter />
      </Box>
    </Container>
  );
};

export default Redux;
