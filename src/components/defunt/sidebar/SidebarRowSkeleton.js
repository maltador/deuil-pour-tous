import React from 'react';
import './styles/SidebarRow.css';
import Skeleton from '@mui/material/Skeleton';

function SidebarRowSkeleton() {
  return (
    <div className="sidebarRow">
      <Skeleton variant="circular" mr={10} width={40} height={40} />
      <Skeleton className="skel-right" variant="text" width={102} height={20}/>
    </div>
  )
}

export default SidebarRowSkeleton