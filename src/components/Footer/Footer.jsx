import React from 'react';
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineYoutube, AiOutlineTwitter } from "react-icons/ai";
import './Footer.css';


function Footer() {
  return (
    <div className="footer-container">
        <div className="left">
            <ul>
                <li className="social-media">
                    <a href="/" target="_blank">
                        <AiOutlineInstagram />
                    </a>
                </li>
                <li className="social-media">
                    <a href="/" target="_blank">
                        <AiOutlineFacebook />
                    </a>
                </li>
                <li className="social-media">
                    <a href="/" target="_blank">
                        <AiOutlineYoutube />
                    </a>
                </li>
                <li className="social-media">
                    <a href="/" target="_blank">
                        <AiOutlineTwitter />
                    </a>
                </li>
            </ul>
        </div>
        <div className="center">
            <ul>
                <li className="footer-links">Privacidad</li>
                <li className="footer-links">Términos</li>
                <li className="footer-links">Ayuda</li>
                <li className="footer-links">Dispositivos</li>
            </ul>
        </div>
        <div className="right">
            <div className="license">© 2023 WarnerMediaDirect, LLC. Todos los derechos reservados.</div>
        </div>
    </div>
  )
}

export default Footer