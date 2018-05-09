import React from 'react';
import './Footer.css';

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="Footer__main">
                <a 
                    href="#"
                    className="Footer__company-name"
                >Alavon</a>
                <ul className="Footer__dominant-actions">
                    <li><a>About</a></li>
                    <li><a>Careers</a></li>
                    <li><a>Contact</a></li>
                </ul>
                <div className="Footer__separator" />
                <ul className="Footer__other-actions">
                    <li><a>Terms &amp; Conditions</a></li>
                    <li><a>Privacy Policy</a></li>
                </ul>
            </footer>
        );
    }
}