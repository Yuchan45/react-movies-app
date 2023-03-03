import React from 'react';
import {Link} from 'react-router-dom';
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

        </div>
        <div className="right">

        </div>
    </div>
  )
}

export default Footer