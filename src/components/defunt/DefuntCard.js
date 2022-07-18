import React from 'react';
import './styles/DefuntCard.css';
import { Avatar} from '@mui/material';

function DefuntCard({imgDefunt, imgUser, title, userName}) {
  return (
    <div style={{backgroundImage: `url(${imgDefunt})`}} className="story">
        <Avatar className="defunt_avatar" src={imgUser} sx={{ width: 56, height: 56}} />
        <span><h5>Par {userName}</h5></span>
        <h4>{title}</h4>
    </div>
  )
}

export default DefuntCard;