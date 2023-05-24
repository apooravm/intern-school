import React from "react";
import './Exercise1.style.css';
import { styled } from "styled-components";

// Character given and the user has to choose the correct transliteration

import CharacterDisplay from "../../components/CharacterDisplay";
import OptionsButton from "../../components/OptionsButton";

import Button from "../../components/Button";

const c1 = {
    "fg": "#b5f5ffa6",
    "text": "rgb(64, 64, 64)",
    "box": "rgb(103, 107, 108)",
    "border": "grey",
    "hover": "rgba(139, 247, 255, 0.671)",
    "text_hover": "rgb(62, 62, 62)",
    "active": "#52f9ffae",
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
    border: 4px solid ${ButtonColours.border};
    border-radius: 30px;

    /* background-color: white; */

    color: ${ButtonColours.text};
    box-shadow: 2px 2px ${ButtonColours.box};
    transition: all 0.2s;

    &:hover {
        background-color: ${ButtonColours.hover};
        color: ${ButtonColours.text_hover};
    }

    &:active {
        background-color: ${ButtonColours.active};
        box-shadow: 0px 0px ${ButtonColours.active_box};
        transform: translateY(4px);
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
}

const Exercise_1 = (props) => {
    const displayingCharacter = props.char;
    const correctOption = props.correct_op;
    const other_option1 = props.other_op_1;
    const other_option2 = props.other_op_2;
    return (
        <div id="ex1--root">
           <CharacterDisplay_Bigger type="button" value={displayingCharacter} onClick={changeColours}></CharacterDisplay_Bigger>
            <div className="ex1--container">
                <OptionsButton title={correctOption}></OptionsButton>
                <OptionsButton title={other_option1}></OptionsButton>
                <OptionsButton title={other_option2}></OptionsButton>
                {/* <Button title="C" ></Button> */}
            </div>
        </div>
    )
}

export default Exercise_1;