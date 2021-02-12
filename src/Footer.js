import React from 'react'
import './styles/Footer.css';
import Logo from './gifs/nv-dev-logo-light.png'
import { SiGithub } from 'react-icons/si';



function Footer() {
    return (
        <div className="footer">
            <div className="icons">
                <a href="https://nizavera.com">
                    <img className="logo" src={Logo} alt="Logo"/>
                </a>
            </div>
            <div className="icons">
            <a href="https://github.com/NizaV">
                <SiGithub className="github-icon"/>
            </a>
            </div>
        </div>
    )
}

export default Footer
