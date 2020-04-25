import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { SnackbarProvider, useSnackbar } from 'notistack';
import styled from 'styled-components/macro';

const StyledButton = styled(Button)`
  margin-right: ${(props) => props.theme.spacing(2)}px;
`;

function MyApp() {
  const { enqueueSnackbar } = useSnackbar();

  const handleClick = () => {
    enqueueSnackbar('I love snacks.');
  };

  const handleClickVariant = (variant) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar('This is a success message!', { variant });
  };

  return (
    <>
      <StyledButton variant="outlined" color="primary" onClick={handleClick}>
        Show snackbar
      </StyledButton>
      <StyledButton
        variant="outlined"
        color="secondary"
        onClick={handleClickVariant('success')}
      >
        Show success snackbar
      </StyledButton>
    </>
  );
}

export default function IntegrationNotistack() {
  return (
    <Box mb={5}>
      <h3>Snackbar Alerts Example</h3>
      <SnackbarProvider maxSnack={3}>
        <MyApp />
      </SnackbarProvider>
    </Box>
  );
}
