import React from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  makeStyles,
  TextField,
} from '@material-ui/core';
import { ColorButton } from '../../components/ColorButton';

const CreateTransaction = ({ open, onClose, onSend }) => {
  const classes = useStyle();
  return (
    <Dialog open={open} fullWidth onClose={onClose}>
      <DialogTitle>{'Create Transaction'}</DialogTitle>
      <DialogContent>
        <TextField fullWidth label="To Address" />
        <TextField
          style={{ marginTop: '2%' }}
          type="number"
          fullWidth
          label="Amount"
        />
      </DialogContent>
      <DialogActions>
        <ColorButton onClick={onSend} fullWidth className={classes.sendButton}>
          send
        </ColorButton>
      </DialogActions>
    </Dialog>
  );
};

const useStyle = makeStyles({
  sendButton: {
    marginLeft: '2.2%',
    marginRight: '2.2%',
    marginBottom: '2%',
  },
});

export default CreateTransaction;
