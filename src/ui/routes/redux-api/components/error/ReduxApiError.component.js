import React from 'react';
import PropTypes from 'prop-types';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';
import Box from '@material-ui/core/Box';

const ReduxApiError = ({ errorMessage }) => {
  return (
    <Box mb={2} mt={2}>
      <Alert severity="error" p={2}>
        <AlertTitle>Error</AlertTitle>
        {errorMessage}
      </Alert>
    </Box>
  );
};

ReduxApiError.propTypes = {
  errorMessage: PropTypes.string,
};

ReduxApiError.defaultProps = {
  errorMessage: 'An error occurred',
};

export default ReduxApiError;
