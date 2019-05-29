import React from "react";
import "./footer.css";

const Footer = () => (
    <footer className="footer">
        <div className="bottom">
            <ul id='footer-list'>
                <li><span><img className='logo' id="reactLogo" src=".\images\react-logo.png" alt="" /></span> Clicky Game!</li>
                <li>Jared Cole-Lewis</li>
                <li><a href="https://github.com/jcole090/clicky-game" target="blank"><span><img className='logo' src="images/github.png" alt="" /></span> Github</a></li>
            </ul>
        </div>
    </footer>
)

export default Footer;
