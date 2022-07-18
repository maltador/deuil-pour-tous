import React, { useState, forwardRef } from "react";
import "./styles/NewDefunt.css";
import * as client from "../utils/ClientApi";
import CircularProgress from "@mui/material/CircularProgress";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function NewDefunt() {
  const [name, setName] = useState(null);
  const [post_name, setPost_name] = useState(null);
  const [last_name, setLast_name] = useState(null);
  const [sexe, setSexe] = useState(0);
  const [birth_date, setBirth_date] = useState(null);
  const [birth_place, setBirth_place] = useState(null);
  const [death_date, setDeath_date] = useState(null);
  const [death_place, setDeath_place] = useState(null);
  const [death_cause, setDeath_cause] = useState(null);
  const [burial_place, setBurial_place] = useState(null);

  const [defuntMessage, setDefuntMessage] = useState("");
  const [openAlert, setOpenAlert] = useState(false);
  const [severity, setSeverity] = useState("error");

  const [loadDefunt, setLoadDefunt] = useState(false);

  /* Methods */
  const handleCloseStack = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAlert(false);
  };

  const handleCreateDefunt = () => {
    if (name === null) {
      setSeverity("error");
      setDefuntMessage("Le champ Nom ne peut être vide");
      setOpenAlert(true);
    } else if (last_name === null) {
      setSeverity("error");
      setDefuntMessage("Le champ Prénom ne peut être vide");
      setOpenAlert(true);
    } else if (sexe === null) {
      setSeverity("error");
      setDefuntMessage("Le champ Sexe ne peut être vide");
      setOpenAlert(true);
    } else {
      setLoadDefunt(true);
      client
        .doPost(client.defunt, {
          name: name.toUpperCase(),
          post_name: post_name.toUpperCase(),
          last_name: last_name.toUpperCase(),
          sexe: sexe,
          birth_date,
          birth_place: birth_place.toUpperCase(),
          death_date,
          death_place: death_place.toUpperCase(),
          death_cause: death_cause.toUpperCase(),
          burial_place: burial_place.toUpperCase(),
        })
        .then((res) => {
          setLoadDefunt(true);
          setSeverity("success");
          setDefuntMessage("Défunt créé avec succès");
          setOpenAlert(true);
          const defuntId = res.data.id;          
          window.location = `/defunt/${defuntId}`;
        })
        .catch((err) => {
          setLoadDefunt(true);
          console.log(err);
        });
    }
  };

  return (
    <>
      <section className="newdefunt">
        <div className="nd_header"></div>
        <div className="content">
          <h2>Nouveau Defunt</h2>
          <div className="form_defunt">
            <div className="input_defunt">
              <label>
                Nom <span>*</span>
              </label>
              <input onChange={(e) => setName(e.target.value)} type="text" />
            </div>
            <div className="input_defunt">
              <label>Post-nom</label>
              <input
                onChange={(e) => setPost_name(e.target.value)}
                type="text"
              />
            </div>
            <div className="input_defunt">
              <label>
                Prénom <span>*</span>
              </label>
              <input
                onChange={(e) => setLast_name(e.target.value)}
                type="text"
              />
            </div>
            <div className="input_defunt">
              <label>
                Sexe <span>*</span>
              </label>
              <select
                defaultValue={sexe}
                onChange={(e) => setSexe(e.target.value)}
              >
                <option value={0} disabled hidden>
                  Choisir un sexe
                </option>
                <option value={1}>MASCULIN</option>
                <option value={2}>FEMININ</option>
              </select>
            </div>
            <div className="input_defunt">
              <label>Date de naissance</label>
              <input
                onChange={(e) => setBirth_date(e.target.value)}
                type="date"
              />
            </div>
            <div className="input_defunt">
              <label>Lieu de naissance</label>
              <input
                onChange={(e) => setBirth_place(e.target.value)}
                type="text"
              />
            </div>
            <div className="input_defunt">
              <label>Date du décès</label>
              <input
                onChange={(e) => setDeath_date(e.target.value)}
                type="date"
              />
            </div>
            <div className="input_defunt">
              <label>Lieu du décès</label>
              <input
                onChange={(e) => setDeath_place(e.target.value)}
                type="text"
              />
            </div>
            <div className="input_defunt">
              <label>Cause du décès</label>
              <input
                onChange={(e) => setDeath_cause(e.target.value)}
                type="text"
              />
            </div>
            <div className="input_defunt">
              <label>Lieu d'inhumation</label>
              <input
                onChange={(e) => setBurial_place(e.target.value)}
                type="text"
              />
            </div>
            <div className="input_defunt">
              <button className="btn-1">Annuler</button>
              <button
                onClick={handleCreateDefunt}
                className="btn-2"
                disabled={loadDefunt}
              >
                {loadDefunt ? (
                  <CircularProgress size={20} color="inherit" />
                ) : (
                  "Enregistrer"
                )}
              </button>
            </div>
          </div>
        </div>
        <Snackbar
          open={openAlert}
          autoHideDuration={4000}
          onClose={handleCloseStack}
        >
          <Alert onClose={handleCloseStack} severity={severity}>
            {defuntMessage}
          </Alert>
        </Snackbar>
      </section>
    </>
  );
}

export default NewDefunt;
