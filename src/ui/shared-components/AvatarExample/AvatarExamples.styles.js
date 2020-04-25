import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import Box from '@material-ui/core/Box';
import styled from 'styled-components/macro';

const StyledBox = styled(Box)`
  display: flex;
`;

const StyledAvatar = styled(Avatar)`
  margin: ${(props) => `${props.theme.spacing(1)}px`};
  width: ${(props) => `${props.theme.spacing(9)}px`};
  height: ${(props) => `${props.theme.spacing(9)}px`};
`;

const StyledAvatarGroup = styled(AvatarGroup)`
  & > div {
    margin: ${(props) => `${props.theme.spacing(-1)}px`};
    width: ${(props) => `${props.theme.spacing(5)}px`};
    height: ${(props) => `${props.theme.spacing(5)}px`};
    border: 2px solid #eeeeee;
  }
`;

export { StyledBox, StyledAvatar, StyledAvatarGroup };
