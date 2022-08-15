import React, { useState } from "react";
import "./styles/LogIn.css";
import * as client from "../../utils/ClientApi";
import { useDispatch } from "react-redux";
import { getUser, getToken } from "../../redux/actions/user.actions";
import CircularProgress from "@mui/material/CircularProgress";

function Register() {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const nomErr = document.querySelector("#nom_err");
  const emailErr = document.querySelector("#email_err");
  const passwordErr = document.querySelector("#password_err");
  const confPwdErr = document.querySelector("#conf_pwd_err");
  const generalErr = document.querySelector("#general_err");

  const dispatch = useDispatch();

  const signUp = (e) => {
    e.preventDefault();
    if (password !== confPassword) {
      confPwdErr.innerHTML = "Les mots de passe saisis ne sont pas les même.";
    } else if (confPassword.length < 6) {
      confPwdErr.innerHTML = "Le mot de passe doit avoir 6 caractères minimum";
    } else {
      confPwdErr.innerHTML = "";
      setIsLoading(true)
      client
        .doPost(
          client.signUp,
          {
            email,
            password,
            pseudo: nom,
          },
          false
        )
        .then((res) => {
          if (res.data) {
            dispatch(getToken(res.data));
            setIsLoading(false)
            window.location = "/";
          }
        })
        .catch((err) => {
          if (err.response.data) {
            if (err.response.data.pseudo)
              nomErr.innerHTML = err.response.data.pseudo;
            else nomErr.innerHTML = "";
            if (err.response.data.email)
              emailErr.innerHTML = err.response.data.email;
            else emailErr.innerHTML = "";
            if (err.response.data.password)
              passwordErr.innerHTML = err.response.data.password;
            else passwordErr.innerHTML = "";
            if (err.response.data.general)
              generalErr.innerHTML = err.response.data.general;
          }
          console.log(err);
        });
    }
  };

  return (
    <div className="login_form">
      <h3>Créer un compte</h3>
      <label id="nom_err"></label>
      <div className="input_login">
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          onChange={(e) => setNom(e.target.value)}
        />
      </div>
      <label id="email_err"></label>
      <div className="input_login">
        <input
          type="text"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <label id="password_err"></label>
      <div className="input_login">
        <input
          type="password"
          placeholder="Mot de passe"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <label id="conf_pwd_err"></label>
      <div className="input_login">
        <input
          type="password"
          placeholder="Confirmer mot de passe"
          onChange={(e) => setConfPassword(e.target.value)}
        />
      </div>
      <label id="general_err"></label>
      <div className="input_login">
        <button onClick={signUp} type="submit" value="Créer compte">
          {isLoading ? (
            <CircularProgress size={20} color="inherit" />
          ) : (
            "Créer compte"
          )}
        </button>
      </div>
    </div>
  );
}

export default Register;
