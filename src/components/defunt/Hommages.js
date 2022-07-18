import React from "react";
import Message from "../publication/Message";
import MessagePublie from "../publication/MessagePublie";
import "./styles/Hommages.css";
import { useDispatch, useSelector } from "react-redux";
import NoPost from "./details/NoPost";

function Hommages() {
  const defuntData = useSelector((state) => state.currentuserReducer);

  return (
    <div className="hommage">
      <MessagePublie type={"hommage"} />
      {defuntData.hommages ? (
        <>
          {defuntData.hommages.length > 0 &&
            defuntData.hommages.map((post) => (
              <Message key={post.post_id} post={post} />
            ))}
          {defuntData.hommages.length === 0 && (
            <NoPost/>
          )}
        </>
      ) : (
        <NoPost/>
        // <div className="msg-nopost"> Aucun hommage rendu à ce défunt</div>
      )}

      {/* <Message
                profilPic={'https://images.unsplash.com/photo-1641353989082-9b15fa661805?crop=entropy&' +
                    'cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400'}
                userName={'maltador'}
                typeMsg={'image'}
                message={'Alakini mina kula kibonde'}
                image={'https://images.unsplash.com/photo-1641353989082-9b15fa661805?crop=entropy&' +
                    'cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400'} />
            <Message
               profilPic={'https://images.unsplash.com/photo-1641353989082-9b15fa661805?crop=entropy&' +
               'cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400'}
               userName={'Odon Mbo'}
               typeMsg={'text'}
               message={'Il est temps!! il est temps de faire de Kingakati'}
            /> */}
    </div>
  );
}

export default Hommages;
