import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  makeStyles,
} from '@material-ui/core';
import { ColorButton } from '../../components/ColorButton';

const MyList = ({ title, item, onClick }) => {
  const classes = useStyle();
  return (
    <Card className={classes.container}>
      <CardHeader
        title={title}
        classes={{
          title: classes.title,
          root: classes.headerRoot,
        }}
      />
      <CardContent className={classes.content}>{item}</CardContent>
      {onClick && (
        <CardActions>
          <ColorButton onClick={onClick} fullWidth className={classes.viewAll}>
            View All
          </ColorButton>
        </CardActions>
      )}
    </Card>
  );
};

const useStyle = makeStyles({
  container: {
    width: '100%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '1rem',
  },
  viewAll: {
    fontSize: '0.7rem',
  },
  headerRoot: {
    borderBottom: '1px #e0e0e0 solid',
  },
  content: {
    maxHeight: '400px',
    overflow: 'auto'
  }
});

export default MyList;
