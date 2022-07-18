import { Avatar } from "@mui/material";
import React, { useRef, useState, forwardRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateBio, uploadPicture } from "../redux/actions/user.actions";
import "./styles/ProfilUser.css";
import CircularProgress from "@mui/material/CircularProgress";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import * as utils from "../utils/Utils";
import DialogDefunts from "../components/userdialogs/DialogDefunts";
import PropTypes from "prop-types";

DialogDefunts.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  defunts: PropTypes.array.isRequired,
};

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function ProfilUser() {
  const userData = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const hiddenFileInput = useRef(null);
  const [imageFile, setImageFile] = useState(null);
  const [loadImg, setLoadImg] = useState(false);
  const [errorUpdate, setErrorUpdate] = useState("");
  const [bio, setBio] = useState("");
  const [updateFormBio, setUpdateFormBio] = useState(false);
  const [loadBio, setLoadBio] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [listDefunt, setListDefunt] = useState([]);
  const [titleDialog, setTitleDialog] = useState("");
  const [openDialog, setOpenDialog] = useState(false);

  const handleChangeImg = (e) => {
    setImageFile(e.target.files[0]);
  };
  const handleImageChange = (e) => {
    hiddenFileInput.current.click();
  };

  const handlePicture = (e) => {
    e.preventDefault();
    if (imageFile === null) {
      setErrorUpdate("Vous devez selectionner une image!");
      setOpenAlert(true);
    } else {
      setLoadImg(true);
      const data = new FormData();
      data.append("image", imageFile);

      dispatch(uploadPicture(data)).then(() => {
        setImageFile(null);
        setLoadImg(false);
      });
    }
  };
  const handleBio = (e) => {
    e.preventDefault();
    if (bio === "") {
      setErrorUpdate("Vous devez rediger une bio!");
      setOpenAlert(true);
    } else if (bio === userData.userCredentials.bio) {
      setErrorUpdate("Aucune modification sur la bio!");
      setOpenAlert(true);
    } else {
      setLoadBio(true);
      dispatch(updateBio({ bio: bio })).then(() => {
        setLoadBio(false);
      });
    }
  };

  const handleCloseStack = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAlert(false);
  };

  const handleDefuntsSuivis = () => {
    setListDefunt(userData.followings);
    setOpenDialog(true);
    setTitleDialog("Défunts suivis");
  };

  const handleDefuntsCrees = () => {
    setListDefunt(userData.defunts);
    setOpenDialog(true);
    setTitleDialog("Défunts créés");
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };
  return (
    <>
      <section className="user_profil">
        <div className="nd_header"></div>
        <div className="content">
          <h2 className="title_profil">Profil de {userData.userCredentials.pseudo}</h2>
          <div className="profil_body">
            <div className="left_body">
              <h4>Photo de Profil</h4>
              <Avatar
                src={userData.userCredentials.imageUrl}
                sx={{ width: 150, height: 150 }}
              />
              <div>{imageFile === null ? "" : imageFile.name}</div>
              <input
                type="file"
                ref={hiddenFileInput}
                onChange={handleChangeImg}
                accept=".jpg, .jpeg, .png"
              />
              <button className="btn-1" onClick={handleImageChange}>
                Changer d'image
              </button>
              <button
                className="btn-2"
                onClick={handlePicture}
                disabled={loadImg}
              >
                {loadImg ? (
                  <CircularProgress size={20} color="inherit" />
                ) : (
                  "Envoyer"
                )}
              </button>
            </div>
            <div className="right_body">
              <h4>Bio</h4>
              <form>
                {!updateFormBio && (
                  <>
                    <p
                      className="bio-field"
                      onClick={() => setUpdateFormBio(!updateFormBio)}
                    >
                      {userData.userCredentials.bio
                        ? userData.userCredentials.bio
                        : ""}
                    </p>
                    <button
                      onClick={() => setUpdateFormBio(!updateFormBio)}
                      className="btn-valider"
                    >
                      Modifier bio
                    </button>
                  </>
                )}
                {updateFormBio && (
                  <>
                    <textarea
                      className="bio-field"
                      placeholder="Entrer votre bio"
                      defaultValue={
                        userData.userCredentials.bio
                          ? userData.userCredentials.bio
                          : ""
                      }
                      onChange={(e) => setBio(e.target.value)}
                    ></textarea>
                    <button
                      onClick={handleBio}
                      className="btn-valider"
                      disabled={loadBio}
                    >
                      {loadBio ? (
                        <CircularProgress size={20} color="inherit" />
                      ) : (
                        "Valider modifications"
                      )}
                    </button>
                  </>
                )}
              </form>
              <div className="date_create">
                Membre depuis:{" "}
                {utils.dateParser(userData.userCredentials.created_at)}
              </div>
              <button className="btn-option" onClick={handleDefuntsSuivis}>
                Défunts suivis: {userData.followings.length}
              </button>
              <button className="btn-option" onClick={handleDefuntsCrees}>
                Défunts créés: {userData.defunts.length}
              </button>
            </div>
          </div>
        </div>
        <Snackbar
          open={openAlert}
          autoHideDuration={4000}
          onClose={handleCloseStack}
        >
          <Alert onClose={handleCloseStack} severity="error">
            {errorUpdate}
          </Alert>
        </Snackbar>
        <DialogDefunts
          id="defunts-dialog"
          keepMounted
          onClose={handleDialogClose} /*handleDialogClose*/
          open={openDialog}
          title={titleDialog}
          defunts={listDefunt}
        />
      </section>
    </>
  );
}

export default ProfilUser;
