import React from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import './ConsonantsPage.styled.css';

import sample_logo from '../../assets/sample_logo2.png'

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import Pallete from "../../components/GlobalColourPallete";

import { Consonants, ConsonantSoundMapped } from "../../StaticData";

const StyledConsonantsSqrButton = styled.button`
    padding-block: 1px;

    min-width: 7rem;
    min-height: 2rem;

    font-size: 4rem;
    font-family: ${Pallete.font_family};
    color: ${Pallete.SquareButton.text};

    background-color: ${Pallete.SquareButton.default};
    border: 3px solid ${Pallete.SquareButton.border_shadow};
    box-shadow: 0px 4px 0px ${Pallete.SquareButton.border_shadow};

    border-radius: 10px;

    transition: all 0.2s;

    &:hover {
        background-color: ${Pallete.SquareButton.hover_active};
        color: ${Pallete.SquareButton.text_hover};
    }
    &:active {
        background-color: ${Pallete.SquareButton.hover_active};
        color: ${Pallete.SquareButton.text_hover};
        box-shadow: 0px 0px 0px;
        transform: translateY(3px);
    }

    @media (max-width: 600px) {
        min-width: none;
        font-size: 200%;
        border-radius: 5px;

        background-color: ${Pallete.SquareButton.default};
        border: 2px solid ${Pallete.SquareButton.border_shadow};
        box-shadow: 0px 0px 0px ${Pallete.SquareButton.border_shadow};
        transform: translateY(2px);

        transition: all 0.08s;
    }
`;

const StyledConsonantsTextTransliteration = styled.div`
    font-size: 1.2rem;

    @media (max-width: 600px) {
        font-size: 1rem;
    }
`;

const ConsonantsSqrButton = ({character, trans, func}) => {
    const handleOnClick = () => {
        func();
    }
    return (
        <StyledConsonantsSqrButton onClick={handleOnClick}>
            <div className="vowelsDisplay--button-text">
                {character}
                <StyledConsonantsTextTransliteration>
                    {trans}
                </StyledConsonantsTextTransliteration>
            </div>
        </StyledConsonantsSqrButton>
    )
}

const ConsonantsPage = () => {
    const [isDisabled, setDisabled] = useState(false);
    const navigate = useNavigate();
    const [footerData, setFooterData] = useState(
        {
            "footerState": "inactive", // inactive, correct, incorrect
            "changeFooterColour": true,
            "button_disabled": false,
            "bottom_text": "Konkani Consonants...",
            "button_text": "exercises",
        }
    )
    const PlaySound = (audioPath) => {
        setDisabled(true);
        if (!isDisabled) {
            const audio = new Audio(audioPath);
            audio.play();
            setDisabled(true);
        
            audio.onended = () => {
                setDisabled(false);
            };
        }
    }

    const footerFunc = () => {
        navigate('/consonants/exercises/');
    }
    
    return (
        <div className="ConsonantsPage--container">
            <Header logo={sample_logo}/>
            <div className="ConsonantsPage--item-container">
                {Consonants.map((data, ind) => (
                    <ConsonantsSqrButton setActive={() => {}}
                        key={ind}
                        func={() => {PlaySound(ConsonantSoundMapped[data[0]])}}
                        character={data[0]}
                        trans={data[1]}
                    />
                ))}
            </div>
            <Footer footerData={footerData} 
                func_1={footerFunc} 
                func_2={footerFunc}/>        
        </div>
    )
}

export default ConsonantsPage;