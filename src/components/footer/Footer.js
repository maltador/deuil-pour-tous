import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './styles/Footer.css'

function Footer() {
  return (
    <footer>
        <div className="footer-text">© Tous droits d'auteur de Deuil pour tous 2022 réservés | {' '}</div>
        <div className="footer-socials">
            <span>{' '}Suivez nous sur: </span>
            <a href="#" className="footer-icon"><FacebookIcon/></a>
            <a href="#" className="footer-icon"><TwitterIcon/></a>
            <a href="#" className="footer-icon"><LinkedInIcon/></a>
        </div>
    </footer>
  )
}

export default Footer