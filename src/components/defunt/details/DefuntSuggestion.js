import React from 'react';
import './styles/DefuntSuggestion.css';
import { Avatar } from '@mui/material';

function DefuntSuggestion({ profilPic, pseudo, timestamp}) {
  return (
    <div className="defunt_suggestion">
        <Avatar className="defsug_avatar" src={profilPic} sx={{width: 60, height: 60}}/>
        <div className="defsug_body">
            <div className="defsug_info">
                <h4>{pseudo}</h4>
                <p>{timestamp}</p>
            </div>
            <div className="defsug_btns">
                <button className="btn_svr">Suivre</button>
                <button className="btn_spm">Supprimer</button>
            </div>
        </div>
    </div>
  )
}

export default DefuntSuggestion