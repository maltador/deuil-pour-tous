import React from "react";
import "./styles/Profil.css";

function Profil() {
  let { userId } = useParams();
  return (
    <>
      <section className="profil_user">
        <div className="nd_header"></div>
        <div className="content">
          <h2 className="title_profil">Profil de l'utilisateur</h2>
          <div className="profil_body">
            <h4>Photo de Profil</h4>
            <Avatar sx={{ width: 150, height: 150 }} />
            <h4>Bio</h4>
            <p>La bio</p>
            <div className="date_create">Membre depuis:</div>
            <button className="btn-option" onClick={handleDefuntsSuivis}>
              Défunts suivis:
            </button>
            <button className="btn-option" onClick={handleDefuntsCrees}>
              Défunts créés:
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Profil;
