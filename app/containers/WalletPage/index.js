import React, { memo } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import MyAppBar from '../../components/MyAppBar';
import ContactsIcon from '@material-ui/icons/Contacts';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import SendIcon from '@material-ui/icons/Send';
import Card from './Card';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import reducer from './reducer';
import saga from './saga';
import { useInjectReducer } from '../../utils/injectReducer';
import { useInjectSaga } from '../../utils/injectSaga';

const key = 'wallet';

export const WalletPage = ({address, balance}) => {
  const classes = useStyle();
  useInjectReducer({key, reducer});
  useInjectSaga({key, saga});
  
  return (
    <div className={classes.container}>
      <MyAppBar />
      <Grid container spacing={2} style={{ padding: '2%' }}>
        <Grid container item xs={4}>
          <Card
            title="Address"
            content="some address"
            color="#2962ff"
            icon={<ContactsIcon className={classes.icon} />}
          />
        </Grid>
        <Grid container item xs={4}>
          <Card
            title="Balance"
            content="some balance"
            color="#1e88e5"
            icon={<AccountBalanceWalletIcon className={classes.icon} />}
          />
        </Grid>
        <Grid container item xs={4}>
          <Card
            title="Send Transaction"
            content="send coin to other user"
            color="#303f9f"
            icon={<SendIcon className={classes.icon} />}
          />
        </Grid>
      </Grid>
    </div>
  );
};

const useStyle = makeStyles({
  container: {
    width: '100%',
    height: '100%',
  },
  icon: {
    width: '100%',
    fontSize: '4rem',
    color: 'white',
  },
});

const mapStateToProps = createStructuredSelector({

});

const mapDispatchToProps = dispatch => {
  return {

  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);


export default compose(
  withConnect,
  memo
)(WalletPage);
