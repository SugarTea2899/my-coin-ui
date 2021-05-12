import React, { memo, useEffect, useState } from 'react';
import {
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  withStyles,
} from '@material-ui/core';
import MyAppBar from '../../components/MyAppBar';
import { createStructuredSelector } from 'reselect';
import { makeSelectTransactions } from '../HistoryPage/selectors';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getTime, hideCharacter } from '../../utils/helpers';
import { WAITING_CONFIRM } from '../../utils/constants';
import { Link } from 'react-router-dom';

export const TransactionPage = ({ transactions }) => {
  const classes = useStyle();
  const [page, setPage] = useState(0);
  const [items, setItems] = useState([]);
  const PAGE_SIZE = 8;

  const onChangePage = (e, newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    const pagingTransactions = (transactions, index) => {
      const startIndex = page * PAGE_SIZE;
      return index >= startIndex && index < startIndex + PAGE_SIZE;
    };
    setItems(transactions.reverse().filter(pagingTransactions));
  }, [page]);

  return (
    <div className={classes.container}>
      <MyAppBar />
      <TableContainer
        style={{ padding: '4%', height: '100%' }}
        component={Paper}
      >
        <Table>
          <TableHead>
            <StyledTableCell>Txn Hash</StyledTableCell>
            <StyledTableCell>Block</StyledTableCell>
            <StyledTableCell>Age</StyledTableCell>
            <StyledTableCell>From</StyledTableCell>
            <StyledTableCell>To</StyledTableCell>
            <StyledTableCell>Value</StyledTableCell>
            <StyledTableCell>Status</StyledTableCell>
          </TableHead>
          <TableBody>
            {items.map((item, index) => {
              return (
                <TableRow key={index}>
                  <StyledTableCell>
                    <Link
                      style={{ textDecoration: 'none' }}
                      to={`/transactions/${item.id}`}
                    >
                      {' '}
                      <span style={{ color: '#2196f3' }}>
                        {hideCharacter(item.id)}
                      </span>
                    </Link>
                  </StyledTableCell>
                  <StyledTableCell>
                    <span style={{ color: '#2196f3' }}>{item.block}</span>
                  </StyledTableCell>
                  <StyledTableCell>{getTime(item.timeStamp)}</StyledTableCell>
                  <StyledTableCell>
                    <span style={{ color: '#2196f3' }}>
                      {hideCharacter(item.senderAddress)}
                    </span>
                  </StyledTableCell>
                  <StyledTableCell>
                    <span style={{ color: '#2196f3' }}>
                      {hideCharacter(item.receiverAddress)}
                    </span>
                  </StyledTableCell>
                  <StyledTableCell>{item.amount}</StyledTableCell>
                  <StyledTableCell>
                    {/* status === WAITING_CONFIRM ? 'red' : '#66bb6a' */}
                    <span
                      style={{
                        color:
                          item.status === WAITING_CONFIRM ? 'red' : '#66bb6a',
                        fontWeight: 'bold',
                      }}
                    >{`${
                      item.status === WAITING_CONFIRM ? 'Waiting' : 'Success'
                    }`}</span>
                  </StyledTableCell>
                </TableRow>
              );
            })}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[PAGE_SIZE]}
                colSpan={7}
                count={transactions.length}
                page={page}
                rowsPerPage={PAGE_SIZE}
                SelectProps={{
                  inputProps: { 'aria-label': 'rows per page' },
                  native: true,
                }}
                onChangePage={onChangePage}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </div>
  );
};

const useStyle = makeStyles({
  container: {
    width: '100%',
    height: '100%',
  },
});

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const mapStateToProps = createStructuredSelector({
  transactions: makeSelectTransactions(),
});

const withConnect = connect(
  mapStateToProps,
  undefined,
);
export default compose(
  withConnect,
  memo,
)(TransactionPage);
