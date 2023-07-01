import React, { useEffect, useState } from "react";
import './Exercise1.style.css';
import { styled } from "styled-components";

// Character given and the user has to choose the correct transliteration
import OptionsButton from "../../components/OptionsButton";

import Pallete from "../../components/GlobalColourPallete";
import { ConsonantSoundMapped, VowelSoundMapped } from "../../StaticData";

const CharacterDisplay_Bigger = styled.input`
    padding-block: 20px;
    text-align: center;
    align-items: center;

    width: 300px;
    min-width: 200px;
    min-height: 200px;

    font-size: 900%;
    font-family: ${Pallete.font_family};

    background-color: ${Pallete.currWhite};
    border: 3px solid ${Pallete.CharDisplay.border_shadow};
    border-radius: 30px;

    color: ${Pallete.CharDisplay.text};
    transition: all 0.2s;

    &:hover {
        background-color: ${Pallete.CharDisplay.hover};
    }

    &:active {
        background-color: ${Pallete.CharDisplay.active};
        box-shadow: 0px 0px ${Pallete.CharDisplay.border_shadow};
        border: 3px solid ${Pallete.CharDisplay.border_shadow};
        transform: translateY(2px);
    }

    @media (max-width: 600px) {
        padding-block: 20px;

        width: 300px;
        min-width: 100px;
        min-height: 230px;

        transition: all 0.04s;
    }
`;


const foo = () => {
    console.log("play Sound");
}

const Exercise_1 = ({char, optionsArray, func, reset}) => {
    const [soundIsDisabled, setSoundDisabled] = useState(false);
    const [currActiveButton, setCurrActiveButton] = useState({"id": "", "value": ""});
    useEffect(() => {
        setCurrActiveButton({"id": "", "value": ""});
    }, [reset])

    const PlaySound = (audioPath) => {
        setSoundDisabled(true);
        if (!soundIsDisabled) {
            const audio = new Audio(audioPath);
            audio.play();
            setSoundDisabled(true);
        
            audio.onended = () => {
                setSoundDisabled(false);
            };
        }
    }
    
    const displayingCharacter = char;
    return (
        <div id="ex1--root">
           <CharacterDisplay_Bigger type="button" 
                            value={displayingCharacter} 
                            onClick={() => {
                                // May need to fix this by mergin the two maps
                                PlaySound(ConsonantSoundMapped[displayingCharacter])
                                PlaySound(VowelSoundMapped[displayingCharacter])
                            }} 
                            />
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