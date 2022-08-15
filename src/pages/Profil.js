import React, { useState, useEffect } from "react";
import "./styles/Profil.css";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import BackdropLoading from "../components/userdialogs/BackdropLoading";
import { getOtherUser }  from "../redux/actions/otheruser.action";
import * as utils from "../utils/Utils";
import DialogDefunts from "../components/userdialogs/DialogDefunts";
import { Avatar } from "@mui/material";

function Profil() {
  let { userId } = useParams();
  const [openBackdrop, setOpenBackdrop] = useState(false);
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.otheruserReducer);
  const [listDefunt, setListDefunt] = useState([]);
  const [titleDialog, setTitleDialog] = useState("");
  const [openDialog, setOpenDialog] = useState(false);


  useEffect(() => {
      const fetchUser= async()=>{
      setOpenBackdrop(true);
      await dispatch(getOtherUser(userId)).then(() => {
        setOpenBackdrop(false);
      });      
    }
    if (userId) fetchUser();
  },[userId])

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
      <BackdropLoading open={openBackdrop} />
      <section className="profil_user">
        <div className="nd_header"></div>
        <div className="content">
          <h2 className="title_profil">Profil de {userData.pseudo}</h2>
          <div className="profil_body">
            <h4>Photo de Profil</h4>
            <Avatar src={userData.imageUrl} sx={{ width: 150, height: 150 }} />
            <h4>Bio</h4>
            <p>{userData.bio ? userData.bio : ''}</p>
            <div className="date_create">Membre depuis: {` ${utils.dateParser(userData.created_at)}`}</div>
            <button className="btn-option" onClick={handleDefuntsSuivis}>
              Défunts suivis: {` ${userData.followings.length}`}
            </button>
            <button className="btn-option" onClick={handleDefuntsCrees}>
              Défunts créés: { `${userData.defunts.length}`}
            </button>
          </div>
        </div>
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

export default Profil;
