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
import { makeSelectBlocks } from '../HistoryPage/selectors';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getTime, hideCharacter } from '../../utils/helpers';

export const BlockPage = ({ blocks }) => {
  const classes = useStyle();
  const [page, setPage] = useState(0);
  const [items, setItems] = useState([]);
  const PAGE_SIZE = 8;

  const onChangePage = (e, newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    const pagingBlocks = (block, index) => {
      const startIndex = page * PAGE_SIZE;
      return index >= startIndex && index < startIndex + PAGE_SIZE;
    };
    setItems(blocks.filter(pagingBlocks));
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
            <TableRow>
              <StyledTableCell>Block</StyledTableCell>
              <StyledTableCell>Age</StyledTableCell>
              <StyledTableCell>Txn</StyledTableCell>
              <StyledTableCell>Miner</StyledTableCell>
              <StyledTableCell>Reward</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item, index) => {
              return (
                <TableRow key={index}>
                  <StyledTableCell>
                    <span style={{ color: '#2196f3' }}>{item.index}</span>
                  </StyledTableCell>
                  <StyledTableCell>{`${getTime(item.timeStamp)}`}</StyledTableCell>
                  <StyledTableCell>{item.data.length}</StyledTableCell>
                  <StyledTableCell>
                    <span style={{ color: '#2196f3' }}>{`${hideCharacter(item.miner)}`}</span>
                  </StyledTableCell>
                  <StyledTableCell>50</StyledTableCell>
                </TableRow>
              );
            })}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[PAGE_SIZE]}
                colSpan={5}
                count={blocks.length}
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
  blocks: makeSelectBlocks(),
});

const withConnect = connect(
  mapStateToProps,
  undefined,
);

export default compose(
  withConnect,
  memo,
)(BlockPage);
