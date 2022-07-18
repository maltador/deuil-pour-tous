import React from 'react';
//import DefuntSuggestion from './details/DefuntSuggestion';
import Suggestion from './details/Suggestion';
import './styles/Details.css';
import AnniversaireDefunt from './details/AnniversaireDefunt';

function Details() {
  return (
    <div className="details">   
      <Suggestion />
      <hr/> 
      <AnniversaireDefunt />
      <hr/>      
    </div>
  )
}

export default Details