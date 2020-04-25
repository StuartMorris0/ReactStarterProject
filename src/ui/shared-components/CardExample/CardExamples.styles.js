import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components/macro';

const StyledCard = styled(Card)`
  max-width: 345px;
`;

const CardHolder = styled(Box)`
  display: flex;
  justify-content: center;
`;

const StyledCardMedia = styled(CardMedia)`
  height: 160px;
`;

const StyledCardTwo = styled(Card)`
  width: 420px;
  border-radius: ${(props) => `${props.theme.spacing(2)}px`};
  transition: 0.3s;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  position: relative;
  overflow: initial;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: linear-gradient(
    34deg,
    rgba(55, 16, 83, 1) 0%,
    rgba(162, 73, 190, 1) 29%,
    rgba(33, 16, 83, 1) 92%
  );
  text-align: left;
  flex-direction: row-reverse;
`;

const StyledCardMediaTwo = styled(CardMedia)`
  flex-shrink: 0;
  width: 30%;
  padding-top: 30%;
  margin-left: auto;
  margin-right: 20px;
`;

const OverlineText = styled(Typography)`
  line-height: 2;
  color: #ffffff;
  font-weight: bold;
  font-size: 0.625rem;
  opacity: 0.7;
`;

const HeadingText = styled(Typography)`
  font-weight: 900;
  color: #ffffff;
  letter-spacing: 0.5;
`;

const CardButton = styled(Button)`
    background-color: rgba(255, 255, 255, 0.15);
    border-radius: 100px;
    padding-left: 32px;
    padding-right: 32px;
    color: #ffffff;
    text-transform: none;
    width: 100%;
    '&:hover': {
      background-color: rgba(255, 255, 255, 0.32);
    },
`;

export {
  StyledCard,
  CardHolder,
  StyledCardMedia,
  StyledCardTwo,
  StyledCardMediaTwo,
  OverlineText,
  HeadingText,
  CardButton,
};
