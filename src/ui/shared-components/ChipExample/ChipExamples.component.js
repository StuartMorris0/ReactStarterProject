/* eslint-disable no-console */
import React from 'react';
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done';
import FaceIcon from '@material-ui/icons/Face';
import styled from 'styled-components/macro';

const StyledBox = styled(Box)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  & > div {
    margin: ${(props) => `${props.theme.spacing(0.5)}px`};
  }
`;

const ChipExamples = () => {
  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  const handleClick = () => {
    console.info('You clicked the click');
  };

  return (
    <Box mb={5}>
      <h3>Chip Examples</h3>
      <StyledBox>
        <Chip label="Basic" variant="outlined" />
        <Chip label="Disabled" disabled variant="outlined" />
        <Chip
          icon={<FaceIcon />}
          label="Deletable"
          onDelete={handleDelete}
          variant="outlined"
        />
        <Chip
          icon={<FaceIcon />}
          label="Primary clickable"
          clickable
          color="primary"
          onDelete={handleDelete}
          onClick={handleClick}
          deleteIcon={<DoneIcon />}
          variant="outlined"
        />
      </StyledBox>
    </Box>
  );
};

export default ChipExamples;
