import React from "react";
import './OptionButton.css';

const OptionButton = (props) => {
    return (
        <div className="button--container">
            <input type="button" value={props.option} className="main--button"/>
        </div>
    )
}

export default OptionButton;