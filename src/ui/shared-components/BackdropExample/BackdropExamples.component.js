import React, { useState } from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import styled from 'styled-components/macro';

const StyledBackdrop = styled(Backdrop)`
  z-index: ${(props) => props.theme.zIndex.drawer + 1};
  color: #fff;
`;

export default function BackdropExamples() {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <Box mb={5}>
      <h3>Backdrop Example</h3>
      <Button variant="outlined" color="primary" onClick={handleToggle}>
        Show backdrop
      </Button>
      <StyledBackdrop open={open} onClick={handleClose}>
        <CircularProgress color="inherit" />
      </StyledBackdrop>
    </Box>
  );
}
