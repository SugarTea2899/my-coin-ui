import React, { memo, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import { ColorButton } from '../../components/ColorButton';
import { createPrivateKey } from './actions';

import { compose } from 'redux';
import { connect } from 'react-redux';

export const CreateWallet = ({ onCreatePrivateKey }) => {
  const classes = useStyle();

  return (
    <div className={classes.container}>
      <ColorButton onClick={onCreatePrivateKey} variant="contained" color="primary" endIcon={<VpnKeyIcon />}>
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
    height: '100%',
  },
});

const mapDispatchToProps = dispatch => {
  return {
    onCreatePrivateKey: () => dispatch(createPrivateKey(dispatch)),
  };
};

const withConnect = connect(
  undefined,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(CreateWallet);
