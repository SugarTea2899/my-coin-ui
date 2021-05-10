import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  makeStyles,
  Typography,
} from '@material-ui/core';
import MyAppBar from '../../components/MyAppBar';
import Information from '../../components/Infomation';

const BlockDetailPage = () => {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <MyAppBar />
      <Typography className={classes.blockTitle} variant="h5">
        {`Block `} <span style={{ color: 'gray' }}>&nbsp;#50</span>
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
          <Information title="Block:" content="content" markBlue />
          <Information title="Timestamp:" content="content" />
          <Information title="Transactions:" content="content" />
          <Information
            title="Miner:"
            content="04020198b0836588d239b3ed8f0c9b499493c40f5adac89034e592b72e4addea9b6d3c69e21f924acf2f95df98dbe6a4df9f6d328dda7ac46697f8fe5d502dfef4"
            markBlue
          />
          <Information title="Block Reward:" content="content" />
          <Information title="Difficulty:" content="content" />
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

export default BlockDetailPage;
