import React from 'react'
import Message from "../publication/Message";
import MessagePublie from "../publication/MessagePublie";
import "./styles/Hommages.css";
import { useDispatch, useSelector } from "react-redux";
import NoPost from "./details/NoPost";

function Condoleances() {
  const defuntData = useSelector((state) => state.currentuserReducer);

  return (
    <div className="hommage">
      <MessagePublie type={"condoléance"} />
      {defuntData.condoleances ? (
        <>
          {defuntData.condoleances.length > 0 &&
            defuntData.condoleances.map((post) => (
              <Message key={post.post_id} post={post} />
            ))}
          {defuntData.condoleances.length === 0 && (
            <NoPost/>
          )}
        </>
      ) : (
        <NoPost/>
      )}
    </div>
  );
}

export default Condoleances