import React from "react";
import './Footer.css';

const Footer = (props) => {
    return (
        <footer id="container--footer">
            <div className="item--footer" id="footer--text">
                {props.bottom_text}
            </div>
            <div className="item--footer">
                <input type="button" value={props.btn_text} id="footer--button"/>
            </div>
        </footer>
    )
}

export default Footer;
/*
        <footer>
            <div className="footer--body" id="footer--text--left">
                {props.left_text}
            </div>
            <div className="footer--body" id="footer--text--middle">
                {props.bottom_text}
            </div>
            <div className="footer--body">
                <input type="button" value={props.btn_text} id="footer--button"/>
            </div>
        </footer>
*/