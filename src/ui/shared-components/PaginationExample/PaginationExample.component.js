import React from 'react';
import Box from '@material-ui/core/Box';
import Pagination from '@material-ui/lab/Pagination';
import styled from 'styled-components/macro';

const StyledBox = styled(Box)`
  & > * {
    margin-top: ${(props) => `${props.theme.spacing(2)}px`};
  }
`;

const PaginationExample = () => {
  return (
    <Box mb={5}>
      <h3>Pagination Examples</h3>
      <StyledBox mb={2}>
        <Pagination count={10} />
        <Pagination count={10} color="primary" />
        <Pagination count={10} color="secondary" />
        <Pagination count={10} disabled />
      </StyledBox>
      <StyledBox>
        <Pagination count={10} variant="outlined" />
        <Pagination count={10} variant="outlined" color="primary" />
        <Pagination count={10} variant="outlined" color="secondary" />
        <Pagination count={10} variant="outlined" disabled />
      </StyledBox>
    </Box>
  );
};

export default PaginationExample;
