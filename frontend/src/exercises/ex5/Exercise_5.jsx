import React from "react";
import './Exercise_5.styled.css';
import { styled } from 'styled-components';
import { useState } from "react";

import SqrButton from "../../components/SqrButton";

const StyledTextDisplay = styled.div`
    display: flex;

    font-size: 1000%;
    /* font-family: monospace; */

    min-height: 230px;
    min-width: 300px;

    margin-bottom: 40px;
    margin-top: 10px;
    
    .Ex5--chosen-option {
        text-align: center;
        border-bottom: 2px dashed black;
        min-width: 180px;
    }
`;


const OptionButton = ({func, title, setCurrOption, setActive, currActive, btnId}) => {
    const [value, setValue] = useState(title);
    const changeOption = () => {
        setCurrOption(value);
        func();
    }
    return (
        <SqrButton btnId={btnId} 
                setActive={setActive} 
                currActive={currActive} 
                title={value || " "} 
                func={changeOption}/>
    )
};

const TextDisplay = ({incompleteText, currOption}) => {
    return (
        <StyledTextDisplay>
            <div className="Ex5--chosen-option">
                {currOption}
            </div>
            {incompleteText}
        </StyledTextDisplay>
    )
}

const fizz = (title) => {
    console.log(`${title} Sound!`);
}


const sampleVowels = [
    "आ",
    "अ",
    "औ",
    "ऋ"
  ]

const optionsData = {
    "ans": "आ",
    "incompleteText": "अऋ",
    "correctAns": "C",
    "options": [
        {
            "title": "आ",
            "func": () => fizz("A"),
        },
        {
            "title": "औ",
            "func": () => fizz("औ"),
        },
        {
            "title": "ऋ",
            "func": () => fizz("ऋ"),
        },
        {
            "title": "अ",
            "func": () => fizz("अ"),
        }
    ]
};

const Exercise_5 = ({data}) => {
    const [chosenOption, setChosenOption] = useState(" ");
    const [currActive, setCurrActive] = useState('');
    const options = optionsData.options;
    const ans = optionsData.ans;
    const incompleteText = [];
    for (const char of optionsData.incompleteText) {
        incompleteText.push(char);
    }
    return (
        <div className="Ex5--container">
            <div className="Ex5--display-container">
                <TextDisplay currOption={chosenOption} incompleteText={optionsData.incompleteText}/>
            </div>
            <div className="Ex5--buttons-container">
                {options.map((data, dataI) => (
                    <OptionButton btnId={`op${dataI}`}
                                setActive={setCurrActive}
                                currActive={currActive}
                                key={dataI} 
                                title={data.title} 
                                func={data.func} 
                                setCurrOption={setChosenOption}/>
                ))}
            </div>
        </div>
    )
}

export default Exercise_5;