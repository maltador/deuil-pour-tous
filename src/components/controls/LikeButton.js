import React, { useEffect, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CircularProgress from "@mui/material/CircularProgress";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";
import { likePost, unlikePost } from "../../redux/actions/currentuser.action";

function LikeButton({ post }) {
  const userData = useSelector((state) => state.userReducer);
  const [liked, setLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleLike = () => {
    setIsLoading(true);
    dispatch(likePost(post.post_id, userData.uid, post.type_post)).then(() => {
      setIsLoading(false);
      setLiked(true);
    });
  };
  const handleUnlike = () => {
    setIsLoading(true);
    dispatch(unlikePost(post.post_id, userData.uid, post.type_post)).then(() => {
      setIsLoading(false);
      setLiked(false);
    });    
  };

  useEffect(() => {
    if (post.likers.includes(userData.uid)) setLiked(true);
  }, [userData.uid, post.likers, liked]);

  return (
    <>
      {liked && (
        <div className="post_option" onClick={handleUnlike}>
          {isLoading ? (
            <CircularProgress size={18} color="inherit" />
          ) : (
            <FavoriteIcon style={{ color: "#CB1A29" }} />
          )}
          <p>J'aime {`(${post.like_count})`}</p>
        </div>
      )}
      {!liked && (
        <div className="post_option" onClick={handleLike}>
          {isLoading ? (
            <CircularProgress size={18} color="inherit" />
          ): <FavoriteBorderIcon />}          
          <p>J'aime {`(${post.like_count})`}</p>
        </div>
      )}
    </>
  );
}

export default LikeButton;
