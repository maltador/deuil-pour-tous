import React, { useRef, useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import "./styles/Dialogs.css";
import { useDispatch, useSelector } from "react-redux";
import { uploadImg } from "../../redux/actions/currentuser.action";
import CircularProgress from "@mui/material/CircularProgress";

function DialogUploadImg({ type, open, onClose }) {
  const [imageUrl, setImageUrl] = useState("");
  const hiddenFileInput = useRef(null);
  const [file, setFile] = useState(null);
  const defuntData = useSelector((state) => state.currentuserReducer);
  const dispatch = useDispatch();
  const [loadPicture, setLoadPicture] = useState(false);

  useEffect(() => {
    console.log(file);
    if (file !== null) {
      // const reader= new FileReader();
      // reader.onload = ()=>{
      //   setImageUrl(reader.result);
      //   console.log('File:',imageUrl);
      // };
      // reader.readAsDataURL(file)
      console.log("tyyyy", URL.createObjectURL(file));
      setImageUrl(URL.createObjectURL(file).toString());
      console.log("File:", imageUrl);
    } else {
      setImageUrl("");
    }
  }, [file]);

  const handleClose = () => {
    onClose();
  };

  const handleChangeImg = (event) => {
    const fileIn = event.target.files[0];
    if (fileIn && fileIn.type.substr(0, 5) === "image") {
      setFile(fileIn);
    } else {
      setFile(null);
    }
  };
  const handleImageChange = (e) => {
    hiddenFileInput.current.click();
  };

  const handlePicture = () => {
    if (file === null) {
      console.log("Vous devez selectionner une image!");
      //setErrorUpdate("Vous devez selectionner une image!");
      // setOpenAlert(true);
    } else {
      //setLoadImg(true);
      const data = new FormData();
      data.append("image", file);
      console.log("imageUrl:", imageUrl);
      setLoadPicture(true);
      dispatch(uploadImg(type, defuntData.defunt.id, data)).then(() => {
        setLoadPicture(false);
        setFile(null);
        setImageUrl("");
        onClose();
      });
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        {type === "profil"
          ? "Changer la photo de profil"
          : "Chenger la photo de couverture"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Veuillez selectionner votre photo de{" "}
          {type === "profil" ? "profil" : "couverture"} sur votre disque locale
        </DialogContentText>
        <input
          type="file"
          ref={hiddenFileInput}
          onChange={handleChangeImg}
          accept=".jpg, .jpeg, .png"
        />
        <Button variant="outlined" onClick={handleImageChange}>
          Choisir une image
        </Button>
        {imageUrl !== "" && <img href={imageUrl} />}
        {file !== null && <div>{file.name}</div>}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Annuler</Button>
        <Button onClick={handlePicture}>
          {loadPicture ? (
            <CircularProgress size={20} color="inherit" />
          ) : (
            "Confirmer"
          )}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DialogUploadImg;
