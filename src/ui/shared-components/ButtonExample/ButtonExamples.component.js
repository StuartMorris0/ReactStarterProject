import React from 'react';
import uuid from 'react-uuid';
import styled from 'styled-components/macro';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const StyledButton = styled(Button)`
  margin-right: 10px;
`;

const ButtonExamples = () => {
  const buttons = [
    { color: 'primary', title: 'Primary Button' },
    { color: 'secondary', title: 'Secondary Button' },
    { color: 'primary', title: 'Disabled Button', disabled: true },
    { color: 'primary', title: 'Link Button', link: '#linktosomehwere' },
    { color: 'primary', title: 'Outlined Button', outlined: true },
    { color: 'secondary', title: 'Outlined Secondary Button', outlined: true },
  ];

  return (
    <Box mb={5}>
      <h3>Button Examples</h3>
      {buttons.map((button) => {
        return (
          <StyledButton
            key={uuid()}
            variant={button.outlined ? 'outlined' : 'contained'}
            color={button.color}
            disabled={button.disabled || false}
            href={button.link || null}
            disableElevation
          >
            {button.title}
          </StyledButton>
        );
      })}
    </Box>
  );
};

export default ButtonExamples;
