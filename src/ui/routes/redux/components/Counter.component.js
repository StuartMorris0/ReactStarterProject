import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const CounterComponent = (props) => {
  const {
    count,
    incrementAmount,
    setIncrementAmount,
    onIncrementClick,
    onDecrementClick,
    onIncrementByAmount,
    onIncrementAsync,
  } = props;
  return (
    <div>
      <div>
        <Box m={2}>
          <Button
            variant="outlined"
            className="align-self-center"
            onClick={onIncrementClick}
          >
            +
          </Button>
          <Box
            p={2}
            m={2}
            pl={4}
            pr={4}
            component="span"
            color="white"
            bgcolor="primary.main"
          >
            <span>{count}</span>
          </Box>

          <Button
            variant="outlined"
            className="align-self-center"
            onClick={onDecrementClick}
          >
            -
          </Button>
        </Box>
      </div>
      <div className="justify-content-md-center">
        <input
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <Button onClick={onIncrementByAmount}>Add Amount</Button>
        <Button onClick={onIncrementAsync}>Add Async</Button>
      </div>
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
