import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, makeStyles } from '@material-ui/core';
import { ColorButton } from '../ColorButton';

const ConfirmAlert = ({open, title, content, onYes, onNo}) => {
  const classes = useStyle();
  return (
    <Dialog open={open} fullWidth={true}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{content}</DialogContent>
      <DialogActions>
        <ColorButton onClick={onYes}>
          Yes
        </ColorButton>
        <ColorButton onClick={onNo}>
          No
        </ColorButton>
      </DialogActions>
    </Dialog>
  );
};

const useStyle = makeStyles({});

export default ConfirmAlert;
