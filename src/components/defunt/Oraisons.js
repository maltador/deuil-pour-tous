import React from 'react';
import MessagePublie from "../publication/MessagePublie";
import "./styles/Hommages.css";
import { useSelector } from "react-redux";
import NoPost from "./details/NoPost";
import Message from '../publication/Message';

function Oraisons() {
  const defuntData = useSelector((state) => state.currentuserReducer);

  return (
    <div className="hommage">
      <MessagePublie type={"oraison funèbre"} />
      {defuntData.oraisons ? (
        <>
          {defuntData.oraisons.length > 0 &&
            defuntData.oraisons.map((post) => (
              <Message key={post.post_id} post={post} />
            ))}
          {defuntData.oraisons.length === 0 && (
            <NoPost/>
          )}
        </>
      ) : (
        <NoPost/>
      )}
    </div>
  )
}

export default Oraisons