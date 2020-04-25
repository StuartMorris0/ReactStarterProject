import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Lizard from './images/lizard.jpg';

import {
  StyledCard,
  CardHolder,
  StyledCardMedia,
  StyledCardTwo,
  StyledCardMediaTwo,
  OverlineText,
  HeadingText,
  CardButton,
} from './CardExamples.styles';

const CardExamples = () => {
  return (
    <Box mb={5}>
      <h3>Card Examples</h3>
      <CardHolder mb={5}>
        <StyledCard>
          <CardActionArea>
            <StyledCardMedia image={Lizard} title="Contemplative Reptile" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="secondary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </StyledCard>
      </CardHolder>
      <CardHolder>
        <StyledCardTwo>
          <StyledCardMediaTwo image="https://jkkm.info/ui/images/awards/victory.png" />
          <CardContent>
            <OverlineText variant="overline">
              Songkran Festival Contest
            </OverlineText>
            <HeadingText variant="h6" gutterBottom>
              Result Announced
            </HeadingText>
            <CardButton>View Winners</CardButton>
          </CardContent>
        </StyledCardTwo>
      </CardHolder>
    </Box>
  );
};

export default CardExamples;
