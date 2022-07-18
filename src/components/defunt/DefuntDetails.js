import React, {useEffect} from 'react';
import './styles/DefuntDetails.css';
import Details from './Details';
import Sidebar from './Sidebar';
import Hommages from './Hommages';
import Condoleances from './Condoleances';
import Oraisons from './Oraisons';
import Profil from './Profil';

function DefuntDetails({ page }) {

    const Page = () => {
        if (page === 'hommage') return (<Hommages className="defuntCenter" />);
        else if (page === 'condoleance') return (<Condoleances className="defuntCenter"/>);
        else if (page === 'oraison') return (<Oraisons className="defuntCenter"/>);
        else if (page === 'profil') return (<Profil className="defuntCenter"/>);
    }
    return (
        <div className="defunt">
            <Sidebar className="defuntLeft" />
            <Page />
            <Details className="defuntRight" />
        </div>
    )
}

export default DefuntDetails