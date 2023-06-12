import React from "react";
import './Exercise_6.styled.css';
import { styled } from "styled-components";
import { useState } from "react";
import sampleSound from '../../assets/sampleSound.mp3';
import SqrButton from "../../components/SqrButton";
import { useEffect } from "react";

const playButtonSizing = {
    "height": 10,
    "angle": 5,
    "width": 9
}

const StyledSoundButton = styled.button`
    border: 0;
    background: transparent;
    box-sizing: border-box;
    width: 0;
    height: ${playButtonSizing.height + 0.1}rem;

    border-color: transparent transparent transparent #202020;
    transition: 100ms all ease;
    cursor: pointer;

    // play state
    border-style: solid;
    border-width: ${playButtonSizing.angle}rem 0 ${playButtonSizing.angle}rem ${playButtonSizing.width}rem;

    &.paused {
        border-style: double;
        border-width: 0px 0 0px ${playButtonSizing.width}rem;
    }

    &:hover {
        border-color: transparent transparent transparent #404040;
    }
`;

const SoundButton = ({audioPath}) => {
    const [isPaused, setIsPaused] = useState(false);
    const [isDisabled, setDisabled] = useState(false);

    const playSound = () => {
        setDisabled(true);

        if (!isDisabled) {
            const audio = new Audio(audioPath);
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
}

const ButtonOption = ({func, option, setCurrOption, setActive, currActive, btnId}) => {
    const changeOption = () => {
        setCurrOption(option);
        func();
    }
    return (
        <SqrButton btnId={btnId} 
                    title={option || " "}
                    func={changeOption} 
                    setActive={setActive} 
                    currActive={currActive}/>
    )
};

const sampleData = {
    "audioPath": sampleSound,
    "options": [
        "A",
        "B",
        "C",
        "D"
    ]
}

const Exercise_6 = ({func, optionsArray, sound, reset}) => {
    const [currOption, setCurrOption] = useState(""); // Display Text
    const [currActive, setCurrActive] = useState(''); // Button Text
    
    useEffect(() => {
        setCurrActive('');
        setCurrOption("");
    }, [reset])

    return (
        <div className="Ex6--container">
            <SoundButton audioPath={sound}/>
            <div className="Ex6--options-container">
                {optionsArray.map((data, dataI) => (
                    <ButtonOption key={dataI} 
                                currActive={currActive}
                                setActive={setCurrActive}
                                func={() => {func(data)}}
                                option={data} 
                                setCurrOption={setCurrOption} 
                                btnId={`op${dataI}`}/>
                ))}
            </div>
        </div>
    )
};

export default Exercise_6;