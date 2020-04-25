import React from 'react';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';
import styled from 'styled-components/macro';

const StyledBox = styled(Box)`
  display: flex;
  & > * {
    margin: ${(props) => `${props.theme.spacing(2)}px`};
  }
`;

const LinearBox = styled(Box)`
  width: 100%;
  & > div > div {
    margin-top: ${(props) => `${props.theme.spacing(2)}px`};
  }
`;

function LinearDeterminate() {
  const [completed, setCompleted] = React.useState(0);

  React.useEffect(() => {
    function progress() {
      setCompleted((oldCompleted) => {
        if (oldCompleted === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldCompleted + diff, 100);
      });
    }

    const timer = setInterval(progress, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <LinearProgress variant="determinate" value={completed} />
      <LinearProgress
        variant="determinate"
        value={completed}
        color="secondary"
      />
    </div>
  );
}

const CircularProgressExample = () => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    function tick() {
      // reset when reaching 100%
      setProgress((oldProgress) => (oldProgress >= 100 ? 0 : oldProgress + 1));
    }

    const timer = setInterval(tick, 20);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box mb={5}>
      <h3>Circular and Linear Progress Examples</h3>
      <StyledBox>
        <CircularProgress variant="determinate" value={progress} />
        <CircularProgress
          variant="determinate"
          value={progress}
          color="secondary"
        />
      </StyledBox>
      <LinearBox>{LinearDeterminate()}</LinearBox>
    </Box>
  );
};

export default CircularProgressExample;
