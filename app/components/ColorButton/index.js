import { Button, withStyles } from "@material-ui/core";

export const ColorButton = withStyles((theme) => ({
  root: {
    color: 'white',
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
    paddingLeft: '10%',
    paddingRight: '10%'
  },
}))(Button);
