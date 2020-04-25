import React from 'react';
import Container from '@material-ui/core/Container';
import Text from '@material-ui/core/Typography';
import AlertExamples from 'ui/shared-components/AlertExample';
import AppBarExamples from 'ui/shared-components/AppBarExample';
import AvatarExamples from 'ui/shared-components/AvatarExample';
import ButtonExamples from 'ui/shared-components/ButtonExample';
import BackdropExamples from 'ui/shared-components/BackdropExample';
import BreadcrumbsExamples from 'ui/shared-components/BreadcrumbsExample';
import CardExamples from 'ui/shared-components/CardExample';
import ChipExamples from 'ui/shared-components/ChipExample';
import CircularProgressExample from 'ui/shared-components/CircularProgressExample';
import DialogExample from 'ui/shared-components/DialogExample';
import StepperExample from 'ui/shared-components/StepperExample';
import PaginationExample from 'ui/shared-components/PaginationExample';
import RatingExample from 'ui/shared-components/RatingExample';
import SkeletonExample from 'ui/shared-components/SkeletonExample';
import SnackbarExample from 'ui/shared-components/SnackbarExample';
import TabExample from 'ui/shared-components/TabExample';

const UiPage = () => {
  return (
    <Container>
      <Text variant="h4" component="h1">
        UI Examples test
      </Text>
      <Text>This page is used to display some examples of Material UI.</Text>
      <AlertExamples />
      <AppBarExamples />
      <AvatarExamples />
      <BackdropExamples />
      <ButtonExamples />
      <BreadcrumbsExamples />
      <CardExamples />
      <ChipExamples />
      <CircularProgressExample />
      <DialogExample />
      <StepperExample />
      <PaginationExample />
      <RatingExample />
      <SkeletonExample />
      <SnackbarExample />
      <TabExample />
    </Container>
  );
};

export default UiPage;
