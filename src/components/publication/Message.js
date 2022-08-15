import React, { useEffect, useState, forwardRef } from "react";
import "./styles/Message.css";
import { Avatar } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Skeleton from "@mui/material/Skeleton";
import LikeButton from "../controls/LikeButton";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector, useDispatch } from "react-redux";
import { deletePost } from "../../redux/actions/currentuser.action";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

// function Message({ profilPic, image, video, audio, userName, timestamp, message, typeMsg }) {
function Message({ post }) {
  const [isLoading, setIsLoading] = useState(true);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const userData = useSelector((state) => state.userReducer);
  const defuntData = useSelector((state) => state.currentuserReducer);
  const dispatch = useDispatch();
  const [loadDeleting, setLoadDeleting] = useState(false);
  /*---- FROM ALERT ----*/
  const [alertMessage, setAlertMessage] = useState("");
  const [openAlert, setOpenAlert] = useState(false);
  const [severity, setSeverity] = useState("error");

  useEffect(() => {
    if (post !== null && post !== undefined) setIsLoading(false);
  }, [post]);
  dayjs.extend(relativeTime);

  const handleCloseDeleteModal = () => {
    setOpenDeleteModal(false);
  };

  const handleOpenDeleteModal = () => {
    setOpenDeleteModal(true);
  };

  const handleDelete = () => {
    setLoadDeleting(true);
    dispatch(deletePost(post)).then(() => {
      setSeverity("success");
      setAlertMessage("Post supprimé avec succès.");
      setOpenAlert(true);
      setLoadDeleting(false);
      setOpenDeleteModal(false);
    });
  };

  const handleCloseStack = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAlert(false);
  };

  const Post = () => {
    if (post.type !== 1) {
      return (
        <div className="post_image">
          {post.type === 2 && <img src={post.photo} alt="img-post" />}
          {post.type === 3 && (
            <video controls>
              <source src={post.video} />
            </video>
          )}
          {post.type === 4 && (
            <audio controls>
              <source src={post.audio} />
            </audio>
          )}
          {post.type === 5 && (
            <iframe
              width="100%"
              height="240"
              src={post.link.replace("watch?v=", "embed/")}
              frameBorder="0"
              gesture="media"
              allow="encrypted-media"
              allowFullScreen
            ></iframe>
          )}
        </div>
      );
    }
  };
  return (
    <div className="post">
      <div className="post_top">
        <div className="post_top_left">
          {isLoading ? (
            <Skeleton
              className="post_avatar"
              variant="circular"
              width={40}
              height={40}
            />
          ) : (
            <Avatar src={post.user_image} className="post_avatar" />
          )}
          <div className="post_topInfo">
            {isLoading ? (
              <Skeleton variant="text" />
            ) : (
              <h3>{post.user_pseudo}</h3>
            )}
            {isLoading ? (
              <Skeleton variant="text" />
            ) : (
              //  <p>{`${post.created_at}(${post.type})`}</p>
              <p>{dayjs(post.created_at).fromNow()}</p>
            )}
          </div>
        </div>
        <div className="post_top_right">
          {(post.user_id === userData.uid ||
            defuntData.user.uid === userData.uid) && (
            <IconButton aria-label="delete" onClick={handleOpenDeleteModal}>
              <DeleteIcon />
            </IconButton>
          )}
          {/* {post.user_id === userData.uid && (
            <IconButton aria-label="edit">
              <EditIcon />
            </IconButton>
          )} */}
        </div>
      </div>
      <div className="post_bottom">
        {isLoading ? <Skeleton variant="text" /> : <p>{post.text}</p>}
      </div>
      {!isLoading && <Post />}
      {post.type_post !== 3 && (
        <div className="post_options">
          {isLoading ? (
            <>
              <Skeleton
                className="post_option"
                variant="rectangular"
                width={90}
                height={28}
              />
              <Skeleton
                className="post_option"
                variant="rectangular"
                width={90}
                height={28}
              />
              <Skeleton
                className="post_option"
                variant="rectangular"
                width={90}
                height={28}
              />
            </>
          ) : (
            <>
              <LikeButton post={post} />
              <div className="post_option">
                <CommentIcon />
                <p>Commenter</p>
              </div>
              <div className="post_option">
                <ShareIcon />
                <p>Partager</p>
              </div>
            </>
          )}
        </div>
      )}
      <Dialog
        open={openDeleteModal}
        onClose={handleCloseDeleteModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Etes-vous sûr de vouloir supprimer ce poste?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDelete} color="error">
            {loadDeleting ? (
              <CircularProgress size={20} color="inherit" />
            ) : (
              "Oui"
            )}
          </Button>
          <Button onClick={handleCloseDeleteModal} color="error" autoFocus>
            Annuler
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
          open={openAlert}
          autoHideDuration={4000}
          onClose={handleCloseStack}
        >
          <Alert onClose={handleCloseStack} severity={severity}>
            {alertMessage}
          </Alert>
        </Snackbar>
    </div>
  );
}

export default Message;
