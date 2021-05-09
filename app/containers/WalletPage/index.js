import React, { memo, useEffect } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import MyAppBar from '../../components/MyAppBar';
import ContactsIcon from '@material-ui/icons/Contacts';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import SendIcon from '@material-ui/icons/Send';
import Card from './Card';
import { createStructuredSelector } from 'reselect';
import { connect, useSelector } from 'react-redux';
import { compose } from 'redux';
import reducer from './reducer';
import saga from './saga';
import { useInjectReducer } from '../../utils/injectReducer';
import { useInjectSaga } from '../../utils/injectSaga';
import { makeSelectAddress, makeSelectBalance, makeSelectTransaction } from './selectors';
import { LOCAL_STORAGE_PRIVATE_KEY } from '../../utils/constants';
import history from '../../utils/history';
import { getWallet, openTransaction } from './actions';
import CreateTransaction from './CreateTransaction';

const key = 'wallet';

export const WalletPage = ({address, balance, onLoad, onSendTransaction, transactionDialog}) => {
  const classes = useStyle();
  useInjectReducer({key, reducer});
  useInjectSaga({key, saga});

  if (!localStorage.getItem(LOCAL_STORAGE_PRIVATE_KEY))
    history.replace('/');
  
  useEffect(() => {
    if (localStorage.getItem(LOCAL_STORAGE_PRIVATE_KEY) && address === '') {
      onLoad()
    }
  }, [])

  return (
    <div className={classes.container}>
      <MyAppBar />
      <CreateTransaction {...transactionDialog} />
      <Grid container spacing={2} style={{ padding: '2%' }}>
        <Grid container item xs={4}>
          <Card
            title="Address"
            content={address}
            color="#2962ff"
            icon={<ContactsIcon className={classes.icon} />}
          />
        </Grid>
        <Grid container item xs={4}>
          <Card
            title="Balance"
            content={balance}
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
            onClick={onSendTransaction}
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
  address: makeSelectAddress(),
  balance: makeSelectBalance(),
  transactionDialog: makeSelectTransaction()
});

const mapDispatchToProps = dispatch => {
  return {
    onLoad: () => dispatch(getWallet()),
    onSendTransaction: () => dispatch(openTransaction(dispatch))
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
