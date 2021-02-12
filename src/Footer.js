import React from 'react'
import './styles/Footer.css';
import Logo from './gifs/nv-dev-logo-light.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Footer() {
    return (
        <div className="footer">
                <a href="https://github.com/NizaV">
                    <img className="logo" src={Logo}/>
                </a>
                {/* <FontAwesomeIcon icon={['fab', 'fa-github']} /> */}
        </div>
    )
}

export default Footer
