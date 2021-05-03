import React from 'react';
import { makeStyles } from '@material-ui/core';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import { ColorButton } from '../../components/ColorButton';

const CreateWallet = () => {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <ColorButton
        variant="contained"
        color="primary"
        endIcon={<VpnKeyIcon />}
      >
        Generate Private Key
      </ColorButton>
    </div>
  );
};

const useStyle = makeStyles({
  container: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },
});

export default CreateWallet;
