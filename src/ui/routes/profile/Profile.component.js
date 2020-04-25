import React from 'react';
import styled from 'styled-components/macro';
import Container from '@material-ui/core/Container';
import Text from '@material-ui/core/Typography';

const Heading = styled.h1`
  font-size: 24px;
  line-height: 24px;
  margin-top: 8px;
`;

const Profile = () => (
  <Container>
    <Heading>Profile</Heading>
    <Text>Just an empty route here, nothing special</Text>
  </Container>
);

export default Profile;
