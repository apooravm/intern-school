import React from "react";
import './ExTypePage.styled.css';
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import sample_logo from '../../assets/sample_logo2.png'

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import OptionsButton from "../../components/OptionsButton";

import Pallete from "../../components/GlobalColourPallete";

const StyledVowelsSqrButton = styled.button`
    padding-block: 5px;

    min-width: 11rem;
    min-height: 4rem;

    font-size: 6rem;
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

const StyledVowelsTextTransliteration = styled.div`
    font-size: 1.5rem;

    @media (max-width: 600px) {
        font-size: 1rem;
    }
`;

const VowelsSqrButton = ({character, trans, func}) => {
    const handleOnClick = () => {
        func();
    }
    return (
        <StyledVowelsSqrButton onClick={handleOnClick}>
            <div className="vowelsDisplay--button-text">
                {character}
                <StyledVowelsTextTransliteration>
                    {trans}
                </StyledVowelsTextTransliteration>
            </div>
        </StyledVowelsSqrButton>
    )
}

const ExTypePage = () => {
    const navigate = useNavigate();
    const [footerData, setFooterData] = useState(
        {
            "footerState": "inactive", // inactive, correct, incorrect
            "changeFooterColour": true,
            "button_disabled": false,
            "bottom_text": "Choose either to begin...",
            "button_text": "next",
        }
    )

    const footerFunc = () => {
        navigate('/vowels/exercises/');
    }
    
    return (
        <div className="ExTypePage--container">
            <Header logo={sample_logo}/>
            <div className="ExTypePage--item-container">
                <OptionsButton btnId={1}
                                currActive={""}
                                func={() => {}}
                                setActive={""}
                                title={"Learn vowels"}/>
                <OptionsButton btnId={1}
                                currActive={""}
                                func={() => {}}
                                setActive={""}
                                title={"Learn Consonants"}/>
            </div>
            <Footer footerData={footerData} 
                func_1={footerFunc} 
                func_2={footerFunc}/>        
        </div>
    )
}

export default ExTypePage;