import React from 'react';
import './styles/SidebarRow.css';
import { Avatar } from '@mui/material';

function SidebarRow({ src, Icon, title, }) {
  return (
    <div className="sidebarRow">
      {src && <Avatar src={src} />}
      {Icon && <Icon className="MuiSvgIcon-root"/>}
        <h4>{title}</h4>
    </div>
  )
}

export default SidebarRow