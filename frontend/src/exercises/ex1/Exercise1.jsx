import React, { useState } from "react";
import './Exercise1.style.css';
import { styled } from "styled-components";

// Character given and the user has to choose the correct transliteration

import CharacterDisplay from "../../components/CharacterDisplay";
import OptionsButton from "../../components/OptionsButton";

import Button from "../../components/Button";

const c1 = {
    "fg": "#ffffff",
    "text": "rgb(64, 64, 64)",
    "box": "rgb(103, 107, 108)",
    "border": "grey",
    "hover": "rgba(197, 251, 255, 0.671)",
    "text_hover": "rgb(62, 62, 62)",
    "active": "#9efcffad",
    "active_box": "rgb(35, 137, 171)",
};

const c2 = {
    "fg": "#000000a6",
    "text": "rgb(255, 255, 255)",
    "box": "rgb(186, 186, 186)",
    "border": "rgb(36, 37, 35)",
    "hover": "rgba(94, 94, 94, 0.671)",
    "text_hover": "rgb(255, 255, 255)",
    "active": "#909090ad",
    "active_box": "rgb(187, 187, 187)",
}

let ButtonColours = c1;

const CharacterDisplay_Bigger = styled.input`
    padding-block: 20px;
    text-align: center;
    align-items: center;

    width: 300px;
    min-width: 200px;
    min-height: 200px;

    font-size: 900%;

    background-color: ${ButtonColours.fg};
    border: 1px solid ${ButtonColours.border};
    border-radius: 30px;

    /* background-color: white; */

    color: ${ButtonColours.text};
    /* box-shadow: 2px 2px ${ButtonColours.box}; */
    transition: all 0.2s;

    &:hover {
        background-color: ${ButtonColours.hover};
        color: ${ButtonColours.text_hover};
    }

    &:active {
        background-color: ${ButtonColours.active};
        box-shadow: 0px 0px ${ButtonColours.active_box};
        border: 5px solid rgba(125, 125, 125, 0.366);
        transform: translateY(0px);
    }

    @media (max-width: 600px) {
        padding-block: 20px;

        width: 300px;
        min-width: 100px;
        min-height: 230px;

        transition: all 0.04s;
    }
`;

function changeColours() {
    ButtonColours = c1;
};

const foo = () => {
    console.log("play Sound");
}

const Exercise_1 = ({char, optionsArray, func}) => {
    const [currActiveButton, setCurrActiveButton] = useState({"id": "", "value": ""});
    const displayingCharacter = char;
    return (
        <div id="ex1--root">
           <CharacterDisplay_Bigger type="button" value={displayingCharacter} onClick={changeColours}></CharacterDisplay_Bigger>
            <div className="ex1--container">
                {optionsArray.map((data, index) => (
                    <OptionsButton btnId={`op${index}`} 
                    key={index}
                    setActive={setCurrActiveButton} 
                    currActive={currActiveButton} 
                    title={data} 
                    func={() => {func(data)}} 
                    isActive={false}></OptionsButton>
                ))}
            </div>
        </div>
    )
}

export default Exercise_1;