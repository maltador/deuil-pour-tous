import React from 'react';
import './styles/DefuntCardSkeleton.css';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

function DefuntCardSkeleton() {
    return (
        <div className="story_skel">
            <Skeleton className="defunt_avatar_skel" variant="circular" width={56} height={56} />
            {/* <span><Skeleton className="h5"  variant="text" /></span>
        <Skeleton variant="rectangular" height={118} />
        <Skeleton className="h4" variant="text" /> */}
            <Stack className="m-10" spacing={1}>
                <Skeleton variant="text" width={200} height={30} />
                <Skeleton variant="rectangular" height={150} />
                <Skeleton variant="text" width={200} height={30}/>
            </Stack>
        </div>
    )
}

export default DefuntCardSkeleton