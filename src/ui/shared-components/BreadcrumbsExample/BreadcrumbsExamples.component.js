/* eslint-disable no-console */
import React from 'react';
import Box from '@material-ui/core/Box';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const BreadcrumbsExamples = () => {
  const handleClick = () => {
    console.info('breadcrumb clicked');
  };
  return (
    <Box mb={5}>
      <h3>Breadcrumbs Example</h3>
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="/" onClick={handleClick}>
          Home
        </Link>
        <Link color="inherit" href="/ui" onClick={handleClick}>
          Another Link
        </Link>
        <Typography color="textPrimary">Breadcrumb</Typography>
      </Breadcrumbs>
    </Box>
  );
};

export default BreadcrumbsExamples;
