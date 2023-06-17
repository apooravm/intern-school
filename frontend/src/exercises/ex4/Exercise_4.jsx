import React from "react";
import './Exercise_4.styled.css';
import { styled } from "styled-components";
import { useState } from "react";
import { useEffect } from "react";

import OptionsButton from "../../components/OptionsButton";

import Pallete from "../../components/GlobalColourPallete";

const StyledInputDiv = styled.div`
    text-align: center;
    padding-top: 20px;
    min-height: 110px;
    min-width: 100px;

    font-family: monospace;
    font-size: 600%;
    color: ${Pallete.text.default};

    border-bottom: 3px dotted ${Pallete.border.default};

    @media (max-width: 600px) {
        /* text-align: center; */
        /* padding-top: 20px; */
        min-height: 50px;
        font-size: 100%;
        /* min-width: 0px; */

        /* border-bottom: 2px; */
    }
`;

const StyledSoundButton = styled.button`
    border: 0;
    background: transparent;
    box-sizing: border-box;
    width: 0;
    height: 74px;

    border-color: transparent transparent transparent ${Pallete.SoundButton.default};
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
        border-color: transparent transparent transparent ${Pallete.SoundButton.active};
    }

`;

const StyledButtonImage = styled.img`
    width: 10%;
`;

const StyledDeleteButton = styled.button`
    padding-block: 15px;
    padding-inline: 50px;

    font-size: 140%;
    font-weight: 500;
    font-family: poppins;
    color: ${Pallete.default ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)'};
    background-color: ${Pallete.DeleteButton.default};

    border: 2px solid ${Pallete.DeleteButton.border_shadow};
    box-shadow: 2px 2px 0px ${Pallete.DeleteButton.border_shadow};

    transition: all 0.2s;
    border-radius: 30px;
    
    &:hover {
        background-color: ${Pallete.DeleteButton.hover};
        color: rgb(74, 74, 74);
    }

    &:active {
        background-color: ${Pallete.DeleteButton.active};
        color: ${Pallete.default ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)'};
        box-shadow: 0px 0px 0px ${Pallete.header.default};
        transform: translateY(2px);
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
            if (updatedResultsOrder[i] !== null) {
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

const SoundButton = ({sound}) => {
    const [isPaused, setIsPaused] = useState(false);
    const [isDisabled, setDisabled] = useState(false);

    const playSound = () => {
        setDisabled(true);

        if (!isDisabled) {
            const audio = new Audio(sound);
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

const Exercise_4 = ({charSound, func, optionsArray, reset}) => {
    const [currActiveId, setCurrActiveId] = useState('');
    const [globCompState, setGlobCompState] = useState({
        "optionsLength": optionsArray.length,
        "resultsOrder": optionsArray.map(data => null)
    });

    useEffect(() => {
        setCurrActiveId({"id": "", "value": ""});
        setGlobCompState({
            "optionsLength": optionsArray.length,
            "resultsOrder": optionsArray.map(data => null)
        });
    }, [reset])

    useEffect(() => {
        // Checks if stack contains any non null vals
        // Used to disable/enable the footer check button
        // for (const char of globCompState.resultsOrder) {
        //     if (char !== null) {
        //         // The main stack is stores null chars for UI reasons. 
        //         // Thus if it encounters a non null char, means that the user has input
        //         // Check against the correct stack then
        //         func(globCompState.resultsOrder);
        //     }   
        // }
        func(globCompState.resultsOrder)
    }, [globCompState])

    return (
        <div className="Ex4--container">
            <div className="Ex4--buttons-container">
                {optionsArray.map((data, dataI) => (
                    <OptionButton btnId={`op${dataI}`} 
                                key={dataI} 
                                title={data}
                                func={() => {}}
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
                    <SoundButton sound={charSound}/>
                    <DeleteButton mainStack={globCompState} setMainStack={setGlobCompState} />
                </div>
            </div>
        </div>
    )
};

export default Exercise_4;