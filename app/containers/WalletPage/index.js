import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import MyAppBar from '../../components/MyAppBar';
import ContactsIcon from '@material-ui/icons/Contacts';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import SendIcon from '@material-ui/icons/Send';
import Card from './Card';

const WalletPage = () => {
  const classes = useStyle();
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

export default WalletPage;
