import React from "react";
import './CharacterDisplay.css'

function CharacterDisplay(props) {
    const playSound = async (e) => {
        console.log(e);
    }
    return (
        <div className="container--character" onMouseOver={e => playSound(e)}>
            <div className="item--char" id="char--text">
                {props.char}
            </div>
            <div className="item--char" id="char--trans">
                {props.eng_trans}
            </div>
        </div>
    )
}

export default CharacterDisplay;