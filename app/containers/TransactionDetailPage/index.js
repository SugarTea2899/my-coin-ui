import React from 'react';
import { Card, CardContent, CardHeader, makeStyles, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { makeSelectTransaction } from '../HistoryPage/selectors';
import { WAITING_CONFIRM } from '../../utils/constants';
import { getTime } from '../../utils/helpers';
import MyAppBar from '../../components/MyAppBar';
import Information from '../../components/Infomation';
import { makeSelectMyTransaction } from '../WalletPage/selectors';

const TransactionDetailPage = ({match}) => {
  const classes = useStyle();

  let transaction = useSelector(makeSelectTransaction(match.params.id));
  transaction = transaction || useSelector(makeSelectMyTransaction(match.params.id));

  const statusColor = transaction.status === WAITING_CONFIRM ? 'red' : '#66bb6a';
  const statusText = transaction.status === WAITING_CONFIRM ? 'Waiting' : 'Success';
  return (
    <div className={classes.container}>
      <MyAppBar />
      <Typography className={classes.blockTitle} variant="h5">
        <span style={{ color: 'gray' }}>Transaction Detail</span>
      </Typography>
      <Card className={classes.cardContainer}>
        <CardHeader
          title="Detail"
          classes={{
            title: classes.cardTitle,
            root: classes.headerRoot,
          }}
        />
        <CardContent style={{ padding: '0%' }}>
          <Information title="ID:" content={transaction.id} />
          <Information title="Status:" content={statusText} customColor={statusColor} />
          <Information title="Block Index:" content={transaction.block} />
          <Information title="TimeStamp:" content={getTime(transaction.timeStamp)} />
          <Information title="From:" content={transaction.senderAddress} markBlue/>
          <Information title="To:" content={transaction.receiverAddress} markBlue/>
          <Information title="Amount:" content={transaction.amount} />
        </CardContent>
      </Card>
    </div>
  );
};

const useStyle = makeStyles({
  container: {
    height: '100%',
    width: '100%',
  },
  blockTitle: {
    paddingLeft: '2%',
    paddingTop: '2%',
    paddingBottom: '2%',
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: '1.2rem',
  },
  headerRoot: {
    borderBottom: '1px #e0e0e0 solid',
  },
  cardContainer: {
    marginLeft: '4%',
    marginRight: '4%',
  },
});

export default TransactionDetailPage;
