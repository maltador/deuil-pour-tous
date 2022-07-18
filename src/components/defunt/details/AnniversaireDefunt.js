import React from 'react';
import './styles/AnniversaireDefunt.css';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


function AnniversaireDefunt() {
    return (
        <div className="anniversaire_defunt">
            <div className="anniversaire_titre">
                <h3>Anniversaire de décès</h3>
            </div>
            <div className="anniversaire_body">
                <CalendarMonthIcon className="anniversaire_icon"/>
                <div className="anniversaire_info">
                    <p>
                        Aujourd'hui nous commémorons <strong>Bijou Fayila</strong> et
                        <strong> 2 autres personne</strong>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AnniversaireDefunt