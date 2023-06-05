import React from "react";
import './Exercise_4.styled.css';
import { styled } from "styled-components";
import { useState } from "react";
import { useEffect } from "react";

import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';

import OptionsButton from "../../components/OptionsButton";

const colourPallete = {
    "buttonBorder": 'rgb(81, 81, 81)',
    "textNormal": 'rgb(109, 109, 109)',
    "textHighlighted": 'rgb(87, 87, 87)',
    "bgHover": 'rgb(224, 237, 244)',
    "bgActive": 'rgb(219, 219, 219)'
}

const StyledInputDiv = styled.div`
    text-align: center;
    padding-top: 20px;
    min-height: 100px;
    min-width: 100px;

    font-family: monospace;
    font-size: 600%;
    color: rgb(66, 66, 66);

    border-bottom: 3px dotted rgb(2, 2, 2);

    @media (max-width: 600px) {
        text-align: center;
        padding-top: 20px;
        min-height: 50px;
        min-width: 0px;

        font-size: 200%;

        border-bottom: 2px dotted rgb(2, 2, 2);
    }
`;

const StyledSoundButton = styled.button`
    border: 0;
    background: transparent;
    box-sizing: border-box;
    width: 0;
    height: 74px;

    border-color: transparent transparent transparent #202020;
    transition: 100ms all ease;
    cursor: pointer;

    // play state
    border-style: solid;
    border-width: 37px 0 37px 60px;

    &.paused {
    border-style: double;
    border-width: 0px 0 0px 60px;
    }

    &:hover {
        border-color: transparent transparent transparent #404040;
    }

`;

const StyledButtonImage = styled.img`
    width: 10%;
`;

const StyledDeleteButton = styled.button`
    padding-block: 23px;
    padding-inline: 50px;

    font-size: 180%;
    font-family: monospace;
    color: ${colourPallete.textNormal};
    background-color: white;

    border: 2px solid ${colourPallete.buttonBorder};
    box-shadow: 3px 4px 0px ${colourPallete.buttonBorder};

    transition: all 0.2s;
    
    &:hover {
        background-color: rgb(255, 167, 157);
        color: rgb(74, 74, 74);
    }

    &:active {
        background-color: rgb(255, 40, 16);
        color: rgb(255, 255, 255);
        box-shadow: 0px 0px 0px ${colourPallete.buttonBorder};
        transform: translateY(4px);
    }
`;

const OptionButton = ({func, title, mainStack, setMainStack, btnId, currActiveId, setCurrActiveId}) => {
    const [value, setValue] = useState(title);
    const button_func = () => {
        const updatedResultsOrder = [...mainStack.resultsOrder];
        let toggle = true;
        for (let i = 0; i < updatedResultsOrder.length; i++) {
            if (!updatedResultsOrder[i]) {
                updatedResultsOrder[i] = value;
                toggle = !toggle;
                break;
            }
        }
        if (toggle) {
            updatedResultsOrder.pop();
            updatedResultsOrder.push(value);
        }

        setMainStack(prevState => ({
            ...prevState,
            resultsOrder: updatedResultsOrder,
        }));

        func();
    }
    return (
        <OptionsButton title={value || " "}
                    btnId={btnId}
                    setActive={setCurrActiveId}
                    // currActive={currActiveId}
                    currActive={"UnComment above"}
                    func={button_func}></OptionsButton>
    )
};

const BlankOptions = ({value}) => {
    return (
        <StyledInputDiv>
            {value || " "}
        </StyledInputDiv>
    )
}

const DeleteButton = ({mainStack, setMainStack}) => {
    const deleteLastBlank = () => {
        const updatedResultsOrder = [...mainStack.resultsOrder];
        for (let i = updatedResultsOrder.length - 1; i >= 0; i--) {
            if (updatedResultsOrder[i]) {
                updatedResultsOrder[i] = null;
                break;
            }
        }
        setMainStack(prevState => ({
            ...prevState,
            resultsOrder: updatedResultsOrder
        }))
    }
    return (
        <StyledDeleteButton onClick={deleteLastBlank}>
            Delete
        </StyledDeleteButton>
    )
};

const SoundButton = ({audioPath}) => {
    const [isPaused, setIsPaused] = useState(false);
    const [isDisabled, setDisabled] = useState(false);

    const playSound = () => {
        setDisabled(true);

        if (!isDisabled) {
            const audio = new Audio(sampleSound);
            audio.play();
            setDisabled(true);
      
            audio.onended = () => {
              setDisabled(false);
              setIsPaused(prevState => !prevState);
            };
        }
    }

    const handleButtonClick = () => {
        setIsPaused(prevState => !prevState);
        playSound();
    };

    return (
        <StyledSoundButton 
            className={isPaused ? 'paused' : ''} 
            onClick={handleButtonClick}
            disabled={isDisabled} />
    );
};

const fizz = (title) => {
    console.log(`${title} Sound!`);
}

const Exercise_4 = ({}) => {
    const [currActiveId, setCurrActiveId] = useState('');
    const buttonData = [
        {
            "title": "A",
            "func": () => fizz("A"),
        },
        {
            "title": "B",
            "func": () => fizz("B"),
        },
        {
            "title": "C",
            "func": () => fizz("C"),
        },
        {
            "title": "D",
            "func": () => fizz("D"),
        },
    ]

    const [globCompState, setGlobCompState] = useState({
        "optionsLength": buttonData.length,
        "resultsOrder": buttonData.map(data => null)
    });

    return (
        <div className="Ex4--container">
            <div className="Ex4--buttons-container">
                {buttonData.map((data, dataI) => (
                    <OptionButton btnId={`op${dataI}`} 
                                key={dataI} 
                                title={data.title} 
                                func={data.func} 
                                mainStack={globCompState} 
                                setMainStack={setGlobCompState}
                                currActiveId={currActiveId}
                                setCurrActiveId={setCurrActiveId}
                                />
                ))}
            </div>
            <div className="Ex4--right-container">
                <div className="Ex4--answers-container">
                    {globCompState.resultsOrder.map((data, dataI) => (
                        <BlankOptions key={dataI} value={data}/>
                    ))}
                </div>
                <div className="Ex4--soundButton-container">
                    <SoundButton />
                    <DeleteButton mainStack={globCompState} setMainStack={setGlobCompState} />
                </div>
            </div>
        </div>
    )
};

export default Exercise_4;