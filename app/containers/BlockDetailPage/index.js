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
import { useSelector } from 'react-redux';
import { makeSelectBlock } from '../HistoryPage/selectors';
import { getTime } from '../../utils/helpers';

const BlockDetailPage = ({match}) => {
  const classes = useStyle();

  const block = useSelector(makeSelectBlock(match.params.index));
  return (
    <div className={classes.container}>
      <MyAppBar />
      <Typography className={classes.blockTitle} variant="h5">
        {`Block `} <span style={{ color: 'gray' }}>&nbsp;#{block.index}</span>
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
          <Information title="Block:" content={block.index} markBlue />
          <Information title="Timestamp:" content={getTime(block.timeStamp)} />
          <Information title="Transactions:" content={block.data.length} />
          <Information
            title="Miner:"
            content={block.miner}
            markBlue
          />
          <Information title="Block Reward:" content="50" />
          <Information title="Difficulty:" content={block.difficultly}/>
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
