import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function DialogYoutube({ open, onClose, setYoutubeLink }) {
  const [inputLink, setInputLink]= useState('');

  const handleClose = () => {
    onClose();
  };

  const handleLink= ()=>{
    setYoutubeLink(inputLink);
    handleClose();
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Lien Youtube</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Entrer le lien de votre video YouTube
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Lien YouTube"
          type="text"
          fullWidth
          variant="standard"
          color="error"
          onChange={(e)=> setInputLink(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="error">Annuler</Button>
        <Button onClick={handleLink} color="error">Valider</Button>
      </DialogActions>
    </Dialog>
  );
}

export default DialogYoutube;
