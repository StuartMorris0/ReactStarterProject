import React from 'react';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import SkeletonFacebookExample from './SkeletonFacebookExample.component';

const SkeletonExample = () => {
  return (
    <Box mb={5}>
      <h3>Skeleton Example</h3>
      <Box width="300px" mb={3}>
        <Skeleton variant="text" />
        <Box mb={1}>
          <Skeleton variant="circle" width={40} height={40} />
        </Box>
        <Skeleton variant="rect" height={118} />
      </Box>
      <Box>
        <SkeletonFacebookExample />
      </Box>
    </Box>
  );
};

export default SkeletonExample;
