import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Skeleton from '@material-ui/lab/Skeleton';
import styled from 'styled-components/macro';

const StyledCard = styled(Card)`
  width: 100%;
  max-width: 345px;
  margin: ${(props) => props.theme.spacing(2)}px;
`;

const StlyedCardMedia = styled(CardMedia)`
  height: 190px;
`;

function Media(props) {
  const { loading } = props;

  return (
    <StyledCard>
      <CardHeader
        avatar={
          loading ? (
            <Skeleton
              animation="wave"
              variant="circle"
              width={40}
              height={40}
            />
          ) : (
            <Avatar
              alt="Ted talk"
              src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"
            />
          )
        }
        action={
          loading ? null : (
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          )
        }
        title={
          loading ? (
            <Skeleton
              animation="wave"
              height={10}
              width="80%"
              style={{ marginBottom: 6 }}
            />
          ) : (
            'Ted'
          )
        }
        subheader={
          loading ? (
            <Skeleton animation="wave" height={10} width="40%" />
          ) : (
            '5 hours ago'
          )
        }
      />
      {loading ? (
        <Skeleton animation="wave" variant="rect" />
      ) : (
        <StlyedCardMedia
          image="https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512"
          title="Ted talk"
        />
      )}

      <CardContent>
        {loading ? (
          <>
            <Skeleton
              animation="wave"
              height={10}
              style={{ marginBottom: 6 }}
            />
            <Skeleton animation="wave" height={10} width="80%" />
          </>
        ) : (
          <Typography variant="body2" color="textSecondary" component="p">
            Why First Minister of Scotland Nicola Sturgeon thinks GDP is the
            wrong measure of a country&apos;s success:
          </Typography>
        )}
      </CardContent>
    </StyledCard>
  );
}

Media.propTypes = {
  loading: PropTypes.bool,
};

Media.defaultProps = {
  loading: false,
};

function SkeletonFacebookExample() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
    >
      <h4>Facebook Styled Example</h4>
      <Media loading />
      <Media />
    </Box>
  );
}

export default SkeletonFacebookExample;
