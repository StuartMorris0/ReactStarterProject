import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Text from '@material-ui/core/Typography';
import {
  NotFound,
  NumberBox,
  ResultText,
  Found,
  NumberBoxFound,
  ResultTextFound,
  NumberWrapper,
} from './ReduxApiResults.styles';

const ReduxApiResults = ({ number, text, found }) => {
  if (!found) {
    return (
      <NotFound p={4} display="flex" justifyContent="center" mb={5}>
        <NumberBox
          mr={2}
          display="flex"
          justifyContent="center"
          alignItems="center"
          flex="none"
        >
          <NumberWrapper>
            <Text>{number}</Text>
          </NumberWrapper>
        </NumberBox>
        <Box display="flex" alignItems="center">
          <ResultText>
            <span role="img" aria-label="Sad Face">
              🙁
            </span>{' '}
            {text}
          </ResultText>
        </Box>
      </NotFound>
    );
  }
  return (
    <>
      <Found p={4} display="flex" justifyContent="center" mb={5}>
        <NumberBoxFound
          display="flex"
          justifyContent="center"
          alignItems="center"
          mr={2}
          flex="none"
        >
          <NumberWrapper>
            <Text>{number}</Text>
          </NumberWrapper>
        </NumberBoxFound>
        <Box display="flex" alignItems="center">
          <ResultTextFound>{text}</ResultTextFound>
        </Box>
      </Found>
    </>
  );
};

ReduxApiResults.propTypes = {
  number: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  found: PropTypes.bool.isRequired,
};

export default ReduxApiResults;
