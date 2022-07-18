import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import * as utils from "../../utils/Utils";
import "./styles/DivDefunt.css";
import { useDispatch, useSelector } from "react-redux";
import { updateDefunt } from "../../redux/actions/currentuser.action";
import CircularProgress from "@mui/material/CircularProgress";

function DivDefunt({ defunt, field }) {
  const [isUpdated, setIsUpdated] = useState(false);
  const [inputText, setInputText] = useState("");
  const [inputSelect, setInputSelect] = useState(0);
  const [inputDate, setInputDate] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch(); 

  const handleToEdit = () => {
    switch (field) {
      case "name":
        setInputText(defunt.name);
        break;
      case "post_name":
        setInputText(defunt.post_name);
        break;
      case "last_name":
        setInputText(defunt.last_name);
        break;
      case "sexe":
        setInputSelect(defunt.sexe);
        break;
      case "birth_date":
        setInputDate(utils.formatDefaultDate(defunt.birth_date));
        break;
      case "birth_place":
        setInputText(defunt.birth_place);
        break;
      case "death_date":
        setInputDate(utils.formatDefaultDate(defunt.death_date));
        break;
      case "death_place":
        setInputText(defunt.death_place);
        break;
      case "death_cause":
        setInputText(defunt.death_cause);
        break;
      default:
        setInputText(defunt.burial_place);
        break;
    }
    setIsUpdated(true);
  };

  const handleEditDefunt = () => {
    let data = {};
    switch (field) {
      case "name":
        data.name = inputText.toUpperCase();
        break;
      case "post_name":
        data.post_name = inputText.toUpperCase();
        break;
      case "last_name":
        data.last_name = inputText.toUpperCase();
        break;
      case "sexe":
        data.sexe = inputSelect;
        break;
      case "birth_date":
        data.birth_date = inputDate;
        break;
      case "birth_place":
        data.birth_place = inputText.toUpperCase();
        break;
      case "death_date":
        data.death_date = inputDate;
        break;
      case "death_place":
        data.death_place = inputText.toUpperCase();
        break;
      case "death_cause":
        data.death_cause = inputText.toUpperCase();
        break;
      default:
        data.burial_place = inputText.toUpperCase();
        break;
    }
    if (Object.keys(data).length !== 0) {
        setIsLoading(true);
        dispatch(updateDefunt(defunt.id, data))
          .then(()=>{
            setIsLoading(false);
          })
        ;

          
    }
  };

  const getSexe = (sexe) => {
    switch (sexe) {
      case "1":
        return "MASCULIN";
      default:
        return "FEMININ";
    }
  };

  return (
    <div className="div_defunt">
      {!isUpdated && (
        <>
          <div className="div_defunt_info">
            {field === "name" && `${defunt.name}`}
            {field === "post_name" && `${defunt.post_name}`}
            {field === "last_name" && `${defunt.last_name}`}
            {field === "sexe" && `${getSexe(defunt.sexe)}`}
            {field === "birth_date" && `${utils.formatDate(defunt.birth_date)}`}
            {field === "birth_place" && `${defunt.birth_place}`}
            {field === "death_date" && `${utils.formatDate(defunt.death_date)}`}
            {field === "death_place" && `${defunt.death_place}`}
            {field === "death_cause" && `${defunt.death_cause}`}
            {field === "burial_place" && `${defunt.burial_place}`}
          </div>
          <div className="div_defunt_icon">
            <Button color="error" onClick={handleToEdit} endIcon={<EditIcon />}>
              Modifier
            </Button>
          </div>
        </>
      )}
      {isUpdated && (
        <>
          <div className="div_defunt_info">
            {field === "name" && (
              <input
                type="text"
                onChange={(e) => setInputText(e.target.value)}
                defaultValue={defunt.name}
                className="div_defunt_input"
              />
            )}
            {field === "post_name" && (
              <input
                type="text"
                onChange={(e) => setInputText(e.target.value)}
                defaultValue={defunt.post_name !== null ? defunt.post_name : ""}
                className="div_defunt_input"
              />
            )}
            {field === "last_name" && (
              <input
                type="text"
                onChange={(e) => setInputText(e.target.value)}
                defaultValue={defunt.last_name}
                className="div_defunt_input"
              />
            )}
            {field === "sexe" && (
              <select
                defaultValue={defunt.sexe}
                onChange={(e) => setInputSelect(e.target.value)}
                className="div_defunt_input"
              >
                <option value={"0"} disabled hidden>
                  Choisir un sexe
                </option>
                <option value={"1"}>MASCULIN</option>
                <option value={"2"}>FEMININ</option>
              </select>
            )}
            {field === "birth_date" && (
              <input
                type="date"
                onChange={(e) => setInputDate(e.target.value)}
                defaultValue={utils.formatDefaultDate(defunt.birth_date)}
                className="div_defunt_input"
              />
            )}
            {field === "birth_place" && (
              <input
                type="text"
                onChange={(e) => setInputText(e.target.value)}
                defaultValue={defunt.birth_place !== null ? defunt.birth_place : ""}
                className="div_defunt_input"
              />
            )}
            {field === "death_date" && (
              <input
                type="date"
                onChange={(e) => setInputDate(e.target.value)}
                defaultValue={utils.formatDefaultDate(defunt.death_date)}
                className="div_defunt_input"
              />
            )}
            {field === "death_place" && (
              <input
                type="text"
                onChange={(e) => setInputText(e.target.value)}
                defaultValue={defunt.death_place !== null ? defunt.death_place : ""}
                className="div_defunt_input"
              />
            )}
            {field === "death_cause" && (
              <input
                type="text"
                onChange={(e) => setInputText(e.target.value)}
                defaultValue={defunt.death_cause !== null ? defunt.death_cause : ""}
                className="div_defunt_input"
              />
            )}
            {field === "burial_place" && (
              <input
                type="text"
                onChange={(e) => setInputText(e.target.value)}
                defaultValue={defunt.burial_place !== null ? defunt.burial_place : ""}
                className="div_defunt_input"
              />
            )}
            <button onClick={handleEditDefunt} className="div_defunt_btn">
               {!isLoading ? `confirmer` : (<CircularProgress size={18} color="inherit" />)} 
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default DivDefunt;
