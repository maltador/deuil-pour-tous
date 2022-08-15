import React from "react";
import "./styles/NoPost.css";

function NoPost({ type }) {
  return (
    <div className="no-post">
      {type === "hommage" ? `Aucun ${type} trouvé` : `Aucune ${type} trouvée`}
    </div>
  );
}

export default NoPost;
