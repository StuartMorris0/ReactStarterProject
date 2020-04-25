import React from 'react';

import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';
import Box from '@material-ui/core/Box';

const AlertExamples = () => {
  return (
    <Box mb={5}>
      <h3>Some Alerts</h3>
      <Box mb={2}>
        <Alert severity="error" p={2}>
          <AlertTitle>Error</AlertTitle>
          This is an error alert — <strong>check it out!</strong>
        </Alert>
      </Box>
      <Box mb={2}>
        <Alert severity="warning">
          <AlertTitle>Warning</AlertTitle>
          This is a warning alert — <strong>check it out!</strong>
        </Alert>
      </Box>
      <Box mb={2}>
        <Alert severity="info">
          <AlertTitle>Info</AlertTitle>
          This is an info alert — <strong>check it out!</strong>
        </Alert>
      </Box>
      <Box mb={2}>
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          This is a success alert — <strong>check it out!</strong>
        </Alert>
      </Box>
    </Box>
  );
};

export default AlertExamples;
