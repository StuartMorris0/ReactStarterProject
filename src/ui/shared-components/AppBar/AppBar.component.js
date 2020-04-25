import React from 'react';
import styled from 'styled-components/macro';

import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { NavLink as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

const StyledAppBar = styled(AppBar)`
  && {
    flex-grow: 1;

    h6 {
      margin-right: ${(props) => `${props.theme.spacing(4)}px`};
    }
  }
`;

const EmptyToolbar = styled(Toolbar)`
  display: flex;
  min-height: 100px;
`;

const StyledLink = styled(Link)`
  padding: 10px 20px;
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  margin-right: ${(props) => `${props.theme.spacing(2)}px`};

  &:hover {
    text-decoration: none;
    background: ${(props) => props.theme.palette.primary.light};
  }

  &.active {
    background: ${(props) => props.theme.palette.secondary.main};
  }
`;

const TopAppBar = () => {
  return (
    <>
      <StyledAppBar position="fixed" elevation={0}>
        <Toolbar>
          <Typography variant="h6">React Starter Project</Typography>
          <Box display="flex" flexGrow="1">
            <StyledLink component={RouterLink} to="/" exact>
              Home
            </StyledLink>
            <StyledLink component={RouterLink} to="/ui" exact>
              UI Examples
            </StyledLink>
            <StyledLink component={RouterLink} to="/redux" exact>
              Redux
            </StyledLink>
            <StyledLink component={RouterLink} to="/profile" exact>
              Profile
            </StyledLink>
          </Box>
          <StyledLink component={RouterLink} to="/login" exact>
            Login
          </StyledLink>
        </Toolbar>
      </StyledAppBar>
      <EmptyToolbar />
    </>
  );
};

export default TopAppBar;
