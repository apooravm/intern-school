import React from "react";
import './SingleCharacter.css';

const SingleCharacter = (props) => {
    return (
        <div className="char--single">
            <div className="char--ex">
                {props.char}
            </div>
            <div className="trans--ex">
                {props.trans}
            </div>
        </div>
    );
}

export default SingleCharacter;