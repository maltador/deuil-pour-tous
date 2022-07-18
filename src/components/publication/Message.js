import React, { useEffect, useState } from "react";
import "./styles/Message.css";
import { Avatar } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Skeleton from "@mui/material/Skeleton";
import LikeButton from "../controls/LikeButton";

// function Message({ profilPic, image, video, audio, userName, timestamp, message, typeMsg }) {
function Message({ post }) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(()=>{
      if(post !== null && post!== undefined) setIsLoading(false)
  },[post]);
  dayjs.extend(relativeTime);
  
  const Post = () => {
    if (post.type === 2 || post.type === 3) {
      return (
        <div className="post_image">
          {post.type === 2 ? (
            <img src={post.photo} alt="img-post" />
          ) : (
            <video controls>
              <source src={post.video} />
            </video>
          )}
        </div>
      );
    }
  };
  return (
    <div className="post">
      <div className="post_top">
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
      <div className="post_bottom">
        {isLoading ? <Skeleton variant="text" /> : <p>{post.text}</p>}
      </div>
      {!isLoading && (<Post />)}
      {post.type_post !== 3 &&(<div className="post_options">
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
            <LikeButton post={post}/>
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
      </div>)}
    </div>
  );
}

export default Message;
