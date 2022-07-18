import React, { useRef } from "react";
import "./styles/MessagePublie.css";
import { Avatar } from "@mui/material";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import CircularProgress from "@mui/material/CircularProgress";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Skeleton from "@mui/material/Skeleton";
import { addPost } from "../../redux/actions/currentuser.action";

function MessagePublie({ type }) {
  const hiddenFileInput = useRef(null);

  const userData = useSelector((state) => state.userReducer);
  const defuntData = useSelector((state) => state.currentuserReducer);
  const [inputMsg, setInputMsg] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading]= useState(false);
  const dispatch = useDispatch();  

  const getTypePost = (typeString) => {
    switch (typeString) {
      case "hommage":
        return 1;
      case "condoléance":
        return 2;
      case "oraison funèbre":
        return 3;
      default:
        return 0;
    }
  };

  const handlePost = (e) => {
    e.preventDefault();
    if (inputMsg === "" && file === null) {
      console.log("Vous devez entrer quelque chose!");
    } else {
      setIsLoading(true);
      const data = new FormData();
      data.append("file", file);
      data.append("text", inputMsg);
      data.append("type", getTypePost(type));
      dispatch(addPost(defuntData.defunt.id, data)).then(() => {
        setFile(null);
        setInputMsg("");
        setIsLoading(false);
      });
    }

    // setInputMsg("");
    // setImgUrl("");
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

  return (
    <div className="messageSender">
      <div className="messageSender-top">
        {!defuntData.user && (
          <Skeleton variant="circular" mr={10} width={40} height={40} />
        )}
        {defuntData.user && <Avatar src={userData.userCredentials.imageUrl} />}
        <form>
          {defuntData.user && (
            <textarea
              onChange={(e) => {
                setInputMsg(e.target.value);
              }}
              className="messageSender-input"
              placeholder={`Publier ${type}`}
            ></textarea>
          )}
          {!defuntData.user && (
            <Skeleton
              className="textarea-skeleton"
              variant="rectangular"
              width={410}
              height={40}
            />
          )}
          {file !== null && <div>{file.name}</div>}
          <input
            type="file"
            ref={hiddenFileInput}
            onChange={handleChangeImg}
            accept=".jpg, .jpeg, .png"
          />
          {defuntData.user && (
            <button onClick={handlePost} type="submit">
              {isLoading ? <CircularProgress size={20} color="inherit" /> : 'Publier'}              
            </button>
          )}
          {!defuntData.user && (
            <Skeleton className="button-send-skeleton" variant="rectangular" />
          )}
        </form>
      </div>
      {type !== "oraison funèbre" && (
        <div className="messageSender-bottom">
          {defuntData.user && (
            <>
              <div className="messageSender-option">
                <KeyboardVoiceIcon style={{ color: "red" }} />
                <h3>Voice</h3>
              </div>
              <div className="messageSender-option" onClick={handleImageChange}>
                <PhotoLibraryIcon style={{ color: "green" }} />
                <h3>Photo/Video</h3>
              </div>
              <div className="messageSender-option">
                <InsertEmoticonIcon style={{ color: "orange" }} />
                <h3>Humeur/Activité</h3>
              </div>
            </>
          )}
          {!defuntData.user && (
            <>
              <Skeleton
                className="bottom_btn"
                variant="rectangular"
                width={90}
                height={28}
              />
              <Skeleton
                className="bottom_btn"
                variant="rectangular"
                width={90}
                height={28}
              />
              <Skeleton
                className="bottom_btn"
                variant="rectangular"
                width={90}
                height={28}
              />
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default MessagePublie;
