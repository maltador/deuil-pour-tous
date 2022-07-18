import React, { useState, useEffect } from "react";
import "./styles/Defunt.css";
import { Avatar } from "@mui/material";
import FlipCameraIosIcon from "@mui/icons-material/FlipCameraIos";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import ForumIcon from "@mui/icons-material/Forum";
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";
import CommentBankIcon from "@mui/icons-material/CommentBank";
import PersonIcon from "@mui/icons-material/Person";
import Tooltip from "@mui/material/Tooltip";
import DefuntDetails from "../components/defunt/DefuntDetails";
import defaultCover from "../images/default-cover2.jpg";
import { useParams } from "react-router-dom";
import * as client from "../utils/ClientApi";
import { useSelector, useDispatch } from "react-redux";
import Skeleton from "@mui/material/Skeleton";
import * as utils from "../utils/Utils";
import { getDefunt } from "../redux/actions/currentuser.action";
import DialogUploadImg from "../components/userdialogs/DialogUploadImg";
import PropTypes from "prop-types";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { followDefunt, unfollowDefunt } from "../redux/actions/user.actions";
import {
  followDefunt2,
  unfollowDefunt2,
} from "../redux/actions/currentuser.action";
import CircularProgress from "@mui/material/CircularProgress";
import BackdropLoading from "../components/userdialogs/BackdropLoading";

DialogUploadImg.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
};

function Defunt() {
  let { defuntId } = useParams();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userReducer);
  const [page, setPage] = useState("hommage");
  const defuntData = useSelector((state) => state.currentuserReducer);
  const [dialogType, setDialogType] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [userFollow, setUserFollow] = useState(false);
  const [loadFollow, setLoadFollow] = useState(false);
  const [openBackdrop, setOpenBackdrop] = useState(false);

  const Body = () => {
    return <DefuntDetails page={page} />;
  };

  useEffect(() => {
    const fetchDefunt = async () => {
      setOpenBackdrop(true);
      await dispatch(getDefunt(defuntId)).then(() => {
        setOpenBackdrop(false);
      });
    };
    if (defuntId) fetchDefunt();
  }, [defuntId]);

  useEffect(() => {
    // console.log('UserFollow:',userFollow);
    // if (isFollow(userData.uid, defuntData.followers)) setUserFollow(true);
    if (defuntData.followers) isFollow(userData.uid, defuntData.followers);
  }, [userData.uid, defuntData.followers]);

  const isFollow = async (idUser, followers) => {
    followers.forEach((follower) => {
      if (idUser === follower.user_id) {
        setUserFollow(true);
      }
    });
  };

  const handleChangeProfil = () => {
    setDialogType("profil");
    setOpenDialog(true);
  };

  const handleChangeCover = () => {
    setDialogType("cover");
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleFollowDefunt = async () => {
    const data = {
      name: defuntData.defunt.name,
      post_name: defuntData.defunt.post_name,
      last_name: defuntData.defunt.last_name,
      profil_photo: defuntData.defunt.photo
        ? defuntData.defunt.profil_photo
        : "",
      defunt_id: defuntData.defunt.id,
    };
    setLoadFollow(true);
    await dispatch(followDefunt(defuntData.defunt.id, data))
      .then(async () => {
        await dispatch(followDefunt2(defuntData.defunt.id));
      })
      .then(() => {
        setLoadFollow(false);
        setUserFollow(true);
      });
  };

  const handleUnfollowDefunt = () => {
    setLoadFollow(true);
    dispatch(unfollowDefunt(defuntData.defunt.id))
      .then(() => {
        return dispatch(unfollowDefunt2(defuntData.defunt.id));
      })
      .then(() => {
        setLoadFollow(false);
        setUserFollow(true);
      });
  };

  return (
    <>
      <BackdropLoading open={openBackdrop} />
      <section
        style={{
          backgroundImage: defuntData.defunt
            ? defuntData.defunt.cover_photo
              ? `url(${defuntData.defunt.cover_photo})`
              : `url(${defaultCover})`
            : `url(${defaultCover})`,
        }}
        className="couverture"
      >
        {defuntData.defunt && (
          <>
            <Avatar
              className="avatar-profil"
              src={
                defuntData.defunt.profil_photo
                  ? defuntData.defunt.profil_photo
                  : ""
              }
              sx={{ width: 200, height: 200 }}
            />
          </>
        )}
        {!defuntData.defunt && (
          <>
            <Skeleton variant="circular" width={200} height={200} />
          </>
        )}
        <div className="info-cover">
          {defuntData.defunt && (
            <>
              {`${defuntData.defunt.name} ${
                defuntData.defunt.post_name !== null
                  ? defuntData.defunt.post_name
                  : ""
              } ${defuntData.defunt.last_name}`}
              <br />
            </>
          )}
          {!defuntData.defunt && (
            <>
              <Skeleton variant="text" />
              <br />
            </>
          )}
          {defuntData.defunt && (
            <>
              {`(Du ${
                defuntData.defunt.birth_date !== null
                  ? utils.formatDate(defuntData.defunt.birth_date)
                  : "_"
              } au ${
                defuntData.defunt.death_date !== null
                  ? utils.formatDate(defuntData.defunt.death_date)
                  : "_"
              })`}
            </>
          )}
          {!defuntData.defunt && (
            <>
              <Skeleton variant="text" />
            </>
          )}
          {/* (Du 05/05/1981 au 18/03/2003 ) */}
        </div>
        <div className="btns-setting">
          {defuntData.defunt && (
            <>
              {userData.uid === defuntData.defunt.uid ? (
                <>
                  <button onClick={handleChangeProfil} className="btn-profil">
                    <CameraAltIcon className="icon-btn" />
                    <span>Changer la photo de profil</span>
                  </button>
                  <button onClick={handleChangeCover} className="btn-cover">
                    <FlipCameraIosIcon className="icon-btn" />
                    <span>Changer la photo de couverture</span>
                  </button>
                </>
              ) : (
                <>
                  {!userFollow ? (
                    <button className="btn-cover" onClick={handleFollowDefunt}>
                      {loadFollow ? (
                        <CircularProgress size={20} color="inherit" />
                      ) : (
                        <>
                          <CheckCircleIcon className="icon-btn" />
                          Suivre ce défunt
                        </>
                      )}
                    </button>
                  ) : (
                    <button
                      className="btn-profil"
                      onClick={handleUnfollowDefunt}
                    >
                      {loadFollow ? (
                        <CircularProgress size={20} color="inherit" />
                      ) : (
                        <>
                          <CheckCircleOutlineIcon className="icon-btn" />
                          Ne plus suivre Suivre ce défunt
                        </>
                      )}
                    </button>
                  )}
                </>
              )}
            </>
          )}
        </div>
      </section>
      <section className="contenu">
        <div className="contenu-header">
          <div className="contenu-menu">
            <div className="contenu-navbar" id="contenu-navbar">
              <li
                className={page === "hommage" ? "active" : ""}
                onClick={(e) => {
                  setPage("hommage");
                }}
              >
                <a className="cont-text-menu" id="hommage">
                  Hommages
                </a>
                <a className="cont-icon-menu">
                  <Tooltip title="Hommages">
                    <ForumIcon />
                  </Tooltip>
                </a>
              </li>
              <li
                className={page === "condoleance" ? "active" : ""}
                onClick={(e) => {
                  setPage("condoleance");
                }}
              >
                <a className="cont-text-menu">Condoléances</a>
                <a className="cont-icon-menu">
                  <Tooltip title="Condoléances">
                    <SpeakerNotesIcon />
                  </Tooltip>
                </a>
              </li>
              <li
                className={page === "oraison" ? "active" : ""}
                onClick={(e) => {
                  setPage("oraison");
                }}
              >
                <a className="cont-text-menu">Oraison funèbre</a>
                <a className="cont-icon-menu">
                  <Tooltip title="Oraison funèbre">
                    <CommentBankIcon />
                  </Tooltip>
                </a>
              </li>
              <li
                className={page === "profil" ? "active" : ""}
                onClick={(e) => {
                  setPage("profil");
                }}
              >
                <a className="cont-text-menu">Profil de défunt</a>
                <a className="cont-icon-menu">
                  <Tooltip title="Profil de défunt">
                    <PersonIcon />
                  </Tooltip>
                </a>
              </li>
            </div>
          </div>
        </div>
        <div className="contenu-body">
          <Body />
        </div>
        <DialogUploadImg
          id="dialogImg"
          type={dialogType}
          open={openDialog}
          onClose={handleCloseDialog}
        />
      </section>
    </>
  );
}

export default Defunt;
