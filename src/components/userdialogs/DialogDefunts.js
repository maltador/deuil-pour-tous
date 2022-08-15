import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { Avatar } from "@mui/material";
import Button from "@mui/material/Button";
import "./styles/DialogDefunt.css";
import { Link } from "react-router-dom";

function DialogDefunts({ id, onClose, open, title, defunts, ...other }) {

  const handleCancel = () => {
    onClose();
  };

  const handleOk = () => {
    onClose();
  };

  return (
    <Dialog
      sx={{ "& .MuiDialog-paper": { width: 400, maxHeight: 250 } }}
      maxWidth="xs"
      // TransitionProps={{ onEntering: handleEntering }}
      open={open}
      {...other}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent dividers>
        {defunts.length == 0 && (
          <div className="no-defunt">Aucun défunt trouvé</div>
        )}
        {defunts.length !== 0 && (
          <>
            {defunts.map((defunt) => (
              <Link to={`/defunt/${defunt.defunt_id}`}>
                <div className="dialog-element">
                  <Avatar src={defunt.profil_photo ? defunt.profil_photo : ''}/>
                  <div>{`${defunt.last_name} ${defunt.name}`}</div>
                </div>
              </Link>
            ))}
          </>
        )}
      </DialogContent>
      <DialogActions>
        <Button color="error" autoFocus onClick={handleCancel}>
          Cancel
        </Button>
        <Button color="error" onClick={handleOk}>Ok</Button>
      </DialogActions>
    </Dialog>
  );
}

export default DialogDefunts;
