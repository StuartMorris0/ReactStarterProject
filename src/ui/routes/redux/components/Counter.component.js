import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';

const StyledButton = styled(Button)`
  font-size: 1.2rem;
`;

const IncrementButton = styled(StyledButton)`
  background-color: whitesmoke;
`;

const StyledInput = styled(TextField)`
  & input {
    text-align: center;
    font-size: 1.4rem;
  }
`;
const CounterComponent = ({
  count,
  incrementAmount,
  setIncrementAmount,
  onIncrementClick,
  onDecrementClick,
  onIncrementByAmount,
  onIncrementAsync,
}) => {
  function updateInputValue(value) {
    if (!isNaN(value)) {
      setIncrementAmount(value);
    }
  }

  return (
    <div>
      <Box display="flex" alignItems="center" justifyContent="center" mt={5}>
        <Box m={2} display="flex">
          <Box alignSelf="center">
            <StyledButton
              variant="contained"
              color="primary"
              onClick={onIncrementClick}
              disableElevation
            >
              +
            </StyledButton>
          </Box>
          <Box
            p={2}
            m={2}
            pl={4}
            pr={4}
            fontSize={40}
            borderRadius="50%"
            component="span"
            color="black"
            bgcolor="whitesmoke"
          >
            <span>{count}</span>
          </Box>
          <Box alignSelf="center">
            <StyledButton
              variant="contained"
              color="secondary"
              disableElevation
              onClick={onDecrementClick}
            >
              -
            </StyledButton>
          </Box>
        </Box>
      </Box>
      <Divider />
      <Box
        mb={5}
        mt={5}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box display="flex">
          <Box mr={2} ml={2} alignSelf="center">
            <IncrementButton
              onClick={onIncrementByAmount}
              variant="contained"
              disableElevation
            >
              Add Amount
            </IncrementButton>
          </Box>
          <Box mr={2} ml={2} alignSelf="center">
            <StyledInput
              aria-label="Set increment amount"
              value={incrementAmount}
              onChange={(e) => updateInputValue(e.target.value)}
              variant="outlined"
              label="Increment Amount"
            />
          </Box>
          <Box m={2}>
            <IncrementButton
              onClick={onIncrementAsync}
              variant="contained"
              disableElevation
            >
              Add Async
            </IncrementButton>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

CounterComponent.propTypes = {
  count: PropTypes.number.isRequired,
  incrementAmount: PropTypes.string.isRequired,
  setIncrementAmount: PropTypes.func.isRequired,
  onIncrementClick: PropTypes.func.isRequired,
  onDecrementClick: PropTypes.func.isRequired,
  onIncrementByAmount: PropTypes.func.isRequired,
  onIncrementAsync: PropTypes.func.isRequired,
};

export default CounterComponent;
