import React, { memo, useEffect } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import MyAppBar from '../../components/MyAppBar';
import MyList from './MyList';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getHistory } from './actions';
import reducer from './reducer';
import saga from './saga';
import { useInjectReducer } from '../../utils/injectReducer';
import { useInjectSaga } from '../../utils/injectSaga';
import Block from './Block';
import Transaction from './Transaction';
import { makeSelectBlocks, makeSelectTransaction } from './selectors';

const key = 'history';

export const HistoryPage = ({blocks, transactions, onLoad}) => {
  const classes = useStyle();
  useInjectReducer({key, reducer});
  useInjectSaga({key, saga});

  const getBlocksItem = (blocks) => {
    return blocks.reverse().map((block, index) => <Block key={index} {...block} />);
  }

  const getTransactionsItem = (transactions) => {
    return transactions.reverse().map((transaction) => <Transaction {...transaction} />);
  }

  useEffect(() => {
    onLoad();
  }, [])

  return (
    <div className={classes.container}>
      <MyAppBar />
      <Grid container spacing={5} style={{ padding: '3%' }} >
        <Grid container item xs={6}>
          <MyList title='Latest Blocks' item={getBlocksItem(blocks)} />
        </Grid>
        <Grid container item xs={6} alignItems='flex-start'>
          <MyList title='Latest Transactions' item={getTransactionsItem(transactions)} />
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
});

const mapStateToProps = createStructuredSelector({
  blocks: makeSelectBlocks(),
  transactions: makeSelectTransaction()
});

const mapDispatchToProps = dispatch => {
  return {
    onLoad: () => dispatch(getHistory())
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);


export default compose(
  withConnect,
  memo
)(HistoryPage);
