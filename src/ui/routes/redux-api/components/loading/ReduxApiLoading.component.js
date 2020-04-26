import React from 'react';
import Box from '@material-ui/core/Box';
import Text from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

const ReduxApiLoading = () => {
  return (
    <Box
      mt={5}
      mb={5}
      p={5}
      bgcolor="#ffffff"
      display="flex"
      justifyContent="center"
    >
      <Box display="flex" alignItems="center">
        <Box mr={2}>
          <CircularProgress />
        </Box>
        <Text>Loading...</Text>
      </Box>
    </Box>
  );
};

export default ReduxApiLoading;
