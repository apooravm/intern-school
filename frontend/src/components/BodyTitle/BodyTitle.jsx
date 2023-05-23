import React from "react";
import './BodyTitle.css';
import { useState } from "react";

const BodyTitle = (props) => {

    return (
        <div className="body--title">
            {props.title}
        </div>
    )
}

export default BodyTitle;