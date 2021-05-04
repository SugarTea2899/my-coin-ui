import React from 'react';
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

const BlockPage = () => {
  const classes = useStyle();
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
            <TableRow>
              <StyledTableCell>
                <span style={{ color: '#2196f3' }}>1</span>
              </StyledTableCell>
              <StyledTableCell>40 sec</StyledTableCell>
              <StyledTableCell>210</StyledTableCell>
              <StyledTableCell>
                <span style={{ color: '#2196f3' }}>0x55555555</span>
              </StyledTableCell>
              <StyledTableCell>50</StyledTableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[10]}
                colSpan={5}
                count={100}
                page={0}
                rowsPerPage={10}
                SelectProps={{
                  inputProps: { 'aria-label': 'rows per page' },
                  native: true,
                }}
                onChangePage={(event, newPage) => { console.log(newPage);}}
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

export default BlockPage;
