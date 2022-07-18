import React, { useState, useEffect } from "react";
import "./styles/Profil_defunt.css";
import { useSelector } from "react-redux";
import DivDefunt from "../controls/DivDefunt";
import * as utils from "../../utils/Utils";

function Profil({ defunt }) {
  const userData = useSelector((state) => state.userReducer);
  const defuntData = useSelector((state) => state.currentuserReducer);
  const [isTheUser, setIsTheUser] = useState(false);

  const getSexe = (sexe) => {
    switch (sexe) {
      case "1":
        return "MASCULIN";
      default:
        return "FEMININ";
    }
  };

  useEffect(() => {
    if (userData.uid === defuntData.defunt.uid) setIsTheUser(true);
    else setIsTheUser(false);
  }, [userData.uid, defuntData.defunt.uid]);

  return (
    <div className="profil_defunt">
      <div className="profil_content">
        <h3 className="profil_title">Informations sur le défunt</h3>
        <hr />
        <div className="profil_infos">
          <div className="info_defunt">
            <label>Nom:</label>
            {isTheUser && <DivDefunt defunt={defuntData.defunt} field="name" />}
            {!isTheUser && (
              <div className="info_defunt_detail">{defuntData.defunt.name}</div>
            )}
          </div>
          <div className="info_defunt">
            <label>Post-nom:</label>
            {isTheUser && (
              <DivDefunt defunt={defuntData.defunt} field="post_name" />
            )}
            {!isTheUser && (
              <div className="info_defunt_detail">
                {defuntData.defunt.post_name}
              </div>
            )}
          </div>
          <div className="info_defunt">
            <label>Prénom:</label>
            {isTheUser && (
              <DivDefunt defunt={defuntData.defunt} field="last_name" />
            )}
            {!isTheUser && (
              <div className="info_defunt_detail">
                {defuntData.defunt.last_name}
              </div>
            )}
          </div>
          <div className="info_defunt">
            <label>Sexe:</label>
            {isTheUser && <DivDefunt defunt={defuntData.defunt} field="sexe" />}
            {!isTheUser && (
              <div className="info_defunt_detail">{getSexe(defuntData.defunt.sexe)}</div>
            )}
          </div>
          <div className="info_defunt">
            <label>Date de naissance:</label>
            {isTheUser && (
              <DivDefunt defunt={defuntData.defunt} field="birth_date" />
            )}
            {!isTheUser && (
              <div className="info_defunt_detail">
                {utils.formatDate(defuntData.defunt.birth_date)}
              </div>
            )}
          </div>
          <div className="info_defunt">
            <label>Lieu de naissance:</label>
            {isTheUser && (
              <DivDefunt defunt={defuntData.defunt} field="birth_place" />
            )}
            {!isTheUser && (
              <div className="info_defunt_detail">
                {defuntData.defunt.birth_place}
              </div>
            )}
          </div>
          <div className="info_defunt">
            <label>Date du décès:</label>
            {isTheUser && (
              <DivDefunt defunt={defuntData.defunt} field="death_date" />
            )}
            {!isTheUser && (
              <div className="info_defunt_detail">
                {utils.formatDate(defuntData.defunt.death_date)}
              </div>
            )}
          </div>
          <div className="info_defunt">
            <label>Lieu du décès:</label>
            {isTheUser && (
              <DivDefunt defunt={defuntData.defunt} field="death_place" />
            )}
            {!isTheUser && (
              <div className="info_defunt_detail">
                {defuntData.defunt.death_place}
              </div>
            )}
          </div>
          <div className="info_defunt">
            <label>Cause du décès:</label>
            {isTheUser && (
              <DivDefunt defunt={defuntData.defunt} field="death_cause" />
            )}
            {!isTheUser && (
              <div className="info_defunt_detail">
                {defuntData.defunt.death_cause}
              </div>
            )}
          </div>
          <div className="info_defunt">
            <label>Lieu d'inhumation:</label>
            {isTheUser && (
              <DivDefunt defunt={defuntData.defunt} field="burial_place" />
            )}
            {!isTheUser && (
              <div className="info_defunt_detail">
                {defuntData.defunt.burial_place}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profil;
