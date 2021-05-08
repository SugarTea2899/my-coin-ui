import React, { memo, useState } from 'react';
import { makeStyles, TextField } from '@material-ui/core';
import { ColorButton } from '../../components/ColorButton';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { connect, useDispatch } from 'react-redux';
import { compose } from 'redux';
import { accessWallet } from './actions';

export const AccessWallet = () => {
  const classes = useStyle();
  const [privateKey, setState] = useState('');
  const dispatch = useDispatch();

  const onClick = (privateKey, dispatch) => {
    dispatch(accessWallet(privateKey, dispatch));
  }

  return (
    <div className={classes.container}>
      <TextField 
        label="Private Key"
        fullWidth
        value={privateKey}
        onChange={(e) => setState(e.target.value)}
      />
      <ColorButton
        fullWidth
        variant="contained"
        className={classes.nextButton}
        size="medium"
        endIcon={<ArrowRightAltIcon />}
        onClick={() => onClick(privateKey, dispatch)}
      >
        Next      
      </ColorButton>
    </div>
  )
}

const useStyle = makeStyles({
  container: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  nextButton: {
    marginTop: '5%',
    fontSize: '1rem'
  }
});

const withConnect = connect(
  undefined,
  undefined,
);

export default compose(
  withConnect,
  memo,
)(AccessWallet);