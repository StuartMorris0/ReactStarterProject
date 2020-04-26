import styled from 'styled-components/macro';

import Box from '@material-ui/core/Box';
import Text from '@material-ui/core/Typography';

const NotFound = styled(Box)`
  background: #ededed;
`;

const NumberBox = styled(Box)`
  background: white;
  border-radius: 50%;
  height: 200px;
  width: 200px;
  border: 2px solid ${(props) => props.theme.palette.secondary.light};

  p {
    font-weight: 700;
    font-size: 30px;
    line-height: 1.1;
  }
`;

const ResultText = styled(Text)`
  font-size: 32px;
  font-weight: 700;
`;

const Found = styled(Box)`
  background: ${(props) => props.theme.palette.primary.main};
`;

const NumberBoxFound = styled(Box)`
  background: white;
  border-radius: 50%;
  height: 200px;
  width: 200px;
  border: 2px solid ${(props) => props.theme.palette.primary.light};

  p {
    font-weight: 700;
    font-size: 30px;
    line-height: 1.1;
  }
`;

const ResultTextFound = styled(Text)`
  font-size: 32px;
  font-weight: 700;
  color: white;
`;

const NumberWrapper = styled(Box)`
  padding: 0px 20px;
  display: inline-block;
  position: relative;
  float: left;
  overflow-wrap: anywhere;
  text-align: center;
`;

export {
  NotFound,
  NumberBox,
  ResultText,
  Found,
  NumberBoxFound,
  ResultTextFound,
  NumberWrapper,
};
