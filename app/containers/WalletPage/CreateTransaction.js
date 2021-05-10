import React, { useEffect, useState } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  makeStyles,
  TextField,
} from '@material-ui/core';
import { ColorButton } from '../../components/ColorButton';
import { useSelector } from 'react-redux';
import { makeSelectBalance } from './selectors';

const CreateTransaction = ({ open, onClose, onSend }) => {
  const classes = useStyle();
  const [address, setAddress] = useState('');
  const [addressError, setAddressError] = useState('');
  const [amount, setAmount] = useState('');
  const [amountError, setAmountError] = useState('');

  const balance = useSelector(makeSelectBalance());

  useEffect(() => {
    if (address.length === 0 || address.length === 130) setAddressError('');
    else setAddressError('Address is invalid');
  }, [address]);

  useEffect(() => {
    if (amount <= balance) setAmountError('');
    else setAmountError('You not enough coin to send');
  }, [amount]);
  return (
    <Dialog open={open} fullWidth onClose={onClose}>
      <DialogTitle>{'Create Transaction'}</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          label="To Address"
          value={address}
          onChange={e => setAddress(e.target.value)}
          helperText={addressError}
          error={addressError !== ''}
        />
        <TextField
          style={{ marginTop: '2%' }}
          type="number"
          fullWidth
          label="Amount"
          value={`${amount}`}
          onChange={e => setAmount(e.target.value)}
          helperText={amountError}
          error={amountError !== ''}
        />
      </DialogContent>
      <DialogActions>
        <ColorButton
          onClick={() => {
            if (addressError !== '' || amountError !== '')
              return;
            
            onSend(address, amount);
          }}
          fullWidth
          className={classes.sendButton}
        >
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
