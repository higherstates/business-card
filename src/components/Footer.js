import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Footer() {
    return(
        <footer className="footer">
            <div className="container flex">
                <a href="https://github.com/higherstates" target="_blank" rel="noopener noreferrer" className="footer-link">
                    <FontAwesomeIcon icon={['fab', 'github-square']} className="footer-icon"></FontAwesomeIcon>
                </a>
                <a href="https://codepen.io/higherstates" target="_blank" rel="noopener noreferrer" className="footer-link">
                    <FontAwesomeIcon icon={['fab', 'codepen']} className="footer-icon"></FontAwesomeIcon>
                </a>
                <a href="tel:333666999" className="footer-link">
                    <FontAwesomeIcon icon={['fas', 'mobile-alt']} className="footer-icon"></FontAwesomeIcon>
                </a>
            </div>
        </footer>
    )
}

export default Footer