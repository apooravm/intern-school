import React, { useEffect } from "react";
import './Exercise_5.styled.css';
import { styled } from 'styled-components';
import { useState } from "react";

import SqrButton from "../../components/SqrButton";

const StyledTextDisplay = styled.div`
    display: flex;

    font-size: 800%;
    font-family: poppins;

    min-height: 200px;
    min-width: 300px;

    /* margin-bottom: 40px; */
    /* margin-top: 4px; */
    
    .Ex5--chosen-option {
        text-align: center;
        border-bottom: 2px dashed black;
        min-width: 180px;
    }
`;


const OptionButton = ({func, title, setCurrOption, setActive, currActive, btnId}) => {
    const changeOption = () => {
        setCurrOption(title);
        func();
    }
    return (
        <SqrButton btnId={btnId} 
                setActive={setActive} 
                currActive={currActive} 
                title={title || " "} 
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

const Exercise_5 = ({func, incompleteText, optionsArray, reset}) => {
    const [chosenOption, setChosenOption] = useState(" "); // Display Text
    const [currActive, setCurrActive] = useState(''); // Button Text

    useEffect(() => {
        setCurrActive('');
        setChosenOption(" ");
    }, [reset])

    useEffect(() => {
        if (chosenOption !== " ") {
            func(chosenOption)   
        }
    }, [chosenOption])

    return (
        <div className="Ex5--container">
            <div className="Ex5--display-container">
                <TextDisplay currOption={chosenOption} incompleteText={incompleteText}/>
            </div>
            <div className="Ex5--buttons-container">
                {optionsArray.map((data, dataI) => (
                    <OptionButton btnId={`op${dataI}`}
                                setActive={setCurrActive}
                                currActive={currActive}
                                key={dataI}
                                title={data} 
                                func={() => {}} 
                                setCurrOption={setChosenOption}/>
                ))}
            </div>
        </div>
    )
}

export default Exercise_5;