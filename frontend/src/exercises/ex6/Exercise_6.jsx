import React from "react";
import './Exercise_6.styled.css';
import { styled } from "styled-components";
import { useState } from "react";
import sampleSound from '../../assets/sampleSound.mp3';
import SqrButton from "../../components/SqrButton";

const colourPallete = {
    "buttonBorder": 'rgb(81, 81, 81)',
    "textNormal": 'rgb(109, 109, 109)',
    "textHighlighted": 'rgb(87, 87, 87)',
    "bgHover": 'rgb(224, 237, 244)',
    "bgActive": 'rgb(219, 219, 219)'
};

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
    const [value, setValue] = useState(option);
    const changeOption = () => {
        setCurrOption(value);
        func();
    }
    return (
        <SqrButton btnId={btnId} 
                    title={value || " "}
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

const Exercise_6 = ({data}) => {
    const [currOption, setCurrOption] = useState("");
    const [currActive, setCurrActive] = useState('');
    return (
        <div className="Ex6--container">
            <SoundButton audioPath={sampleData.audioPath}/>
            <div className="Ex6--options-container">
                {sampleData.options.map((data, dataI) => (
                    <ButtonOption key={dataI} 
                                currActive={currActive}
                                setActive={setCurrActive}
                                func={() => {console.log("Sound")}}
                                option={data} 
                                setCurrOption={setCurrOption} 
                                btnId={`op${dataI}`}/>
                ))}
            </div>
        </div>
    )
};

export default Exercise_6;