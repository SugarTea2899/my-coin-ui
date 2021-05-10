import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, makeStyles } from '@material-ui/core';
import { ColorButton } from '../ColorButton';


const Alert = ({open, title, content, onClose}) => {
  const classes = useStyle();

  return (
    <Dialog
      open={open}
      fullWidth={true}
      onClose={() => console.log('a')}
    >
      <DialogTitle>
        {title}
      </DialogTitle>
      <DialogContent>
        {content}
      </DialogContent>
      <DialogActions>
        <ColorButton onClick={onClose}>
          OK
        </ColorButton>
      </DialogActions>
    </Dialog>
  )
}

const useStyle = makeStyles({

});

export default Alert;
