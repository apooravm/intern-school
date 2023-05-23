import React from "react";
import airbnbLogo from "../../assets/airbnb.svg";
import './Navbar.css';

export default function Navbar(props) {
    return (
        <nav>
            <img src={airbnbLogo} alt="airbnb logo" 
            className="nav--logo"/>
        </nav>
    )
}