import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const StyledInput = styled(TextField)`
  & input {
    text-align: center;
    font-size: 1.4rem;
  }
`;

const ReduxApiFetch = ({ number, setNumber, onSearchClick }) => {
  function updateInputValue(value) {
    if (!isNaN(value)) {
      setNumber(Number(value));
    }
  }

  return (
    <>
      <Box mt={2} mb={2} display="flex" justifyContent="center">
        <Box display="flex" flexDirection="column" alignItems="center">
          <StyledInput
            aria-label="Search number"
            value={number}
            onChange={(e) => updateInputValue(e.target.value)}
            variant="outlined"
            label="Search Number"
          />
          <Box m={2}>
            <Button
              onClick={onSearchClick}
              variant="contained"
              color="primary"
              disableElevation
            >
              Search
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

ReduxApiFetch.propTypes = {
  number: PropTypes.number.isRequired,
  setNumber: PropTypes.func.isRequired,
  onSearchClick: PropTypes.func.isRequired,
};

export default ReduxApiFetch;
