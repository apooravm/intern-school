import React from "react";
import './Exercise1.css';

// Character given and the user has to choose the correct transliteration

import CharacterDisplay from "../../components/CharacterDisplay";
import OptionsButton from "../../components/OptionsButton";

const Exercise_1 = (props) => {
    const displayingCharacter = props.char;
    // const correctOption = props.correct_option;
    // const other_option1 = props.other_op_1;
    // const other_option2 = props.other_op_2;

    const correctOption = "AAA";
    const other_option1 = "BEE";
    const other_option2 = "CEE";
    return (
        <div id="ex1--root">
            <CharacterDisplay char={displayingCharacter} eng_trans=""></CharacterDisplay>
            <div className="ex1--container">
                <OptionsButton title={correctOption}></OptionsButton>
                <OptionsButton title={other_option1}></OptionsButton>
                <OptionsButton title={other_option2}></OptionsButton>
            </div>
        </div>
    )
}

export default Exercise_1;