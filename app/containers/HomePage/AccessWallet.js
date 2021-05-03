import React from 'react';
import { makeStyles, TextField } from '@material-ui/core';
import { ColorButton } from '../../components/ColorButton';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const AccessWallet = () => {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <TextField 
        label="Private Key"
        fullWidth
      />
      <ColorButton
        fullWidth
        variant="contained"
        className={classes.nextButton}
        size="medium"
        endIcon={<ArrowRightAltIcon fontSize='3rem' />}
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

export default AccessWallet;