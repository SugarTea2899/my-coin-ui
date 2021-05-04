import React from 'react';
import { Card, CardActions, CardContent, CardHeader, makeStyles } from '@material-ui/core';
import { ColorButton } from '../../components/ColorButton';
import Block from './Block';
import Transaction from './Transaction';


const MyList = ({title, item}) => {
  const classes = useStyle();
  return (
    <Card className={classes.container}>
      <CardHeader 
        title='Latest Blocks'
        classes={{
          title: classes.title,
          root: classes.headerRoot
        }}
      />
      <CardContent>
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
      </CardContent>
      <CardActions>
        <ColorButton
          fullWidth
          className={classes.viewAll}
        >
          View All Transactions
        </ColorButton>
      </CardActions>
    </Card>
  )
}

const useStyle = makeStyles({
  container: {
    width: '100%'
  },
  title: {
    fontWeight: 'bold',
    fontSize: '1rem',
  },
  viewAll: {
    fontSize: '0.7rem'
  },
  headerRoot: {
    borderBottom: '1px #e0e0e0 solid'
  }
});

export default MyList;