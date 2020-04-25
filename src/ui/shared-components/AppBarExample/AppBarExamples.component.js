import React from 'react';
import styled from 'styled-components/macro';

import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const StyledAppBar = styled(AppBar)`
  && {
    flex-grow: 1;

    h6 {
      flex-grow: 1;
    }
  }
`;
const StyledIconButton = styled(IconButton)`
  ${({ theme }) =>
    `
    background-color: (${theme.palette.primary})
    `}
`;

const AppBarExamples = () => {
  return (
    <Box mb={5}>
      <h3>App Bar</h3>
      <StyledAppBar position="static" elevation={0}>
        <Toolbar>
          <StyledIconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </StyledIconButton>
          <Typography variant="h6">App Bar</Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </StyledAppBar>
    </Box>
  );
};

export default AppBarExamples;
