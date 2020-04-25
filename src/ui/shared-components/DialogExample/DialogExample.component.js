import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Slide direction="up" ref={ref} {...props} />;
});

const DialogExample = () => {
  const [open, setOpen] = React.useState(false);
  const [openTranisition, setOpenTransition] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpenTransition = () => {
    setOpenTransition(true);
  };

  const handleCloseTransition = () => {
    setOpenTransition(false);
  };
  return (
    <Box mb={5}>
      <h3>Dialog / Modal Examples</h3>
      <Box mb={2}>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Open alert dialog
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            Use Googles location service?
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Let Google help apps determine location. This means sending
              anonymous location data to Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Disagree
            </Button>
            <Button onClick={handleClose} color="primary" autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
      <Box mb={2}>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleClickOpenTransition}
        >
          Slide in alert dialog
        </Button>
        <Dialog
          open={openTranisition}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleCloseTransition}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            Use Googles location service?
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Let Google help apps determine location. This means sending
              anonymous location data to Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseTransition} color="primary">
              Disagree
            </Button>
            <Button onClick={handleCloseTransition} color="primary">
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
};

export default DialogExample;
