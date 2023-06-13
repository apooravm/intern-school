import React, { useEffect, useSyncExternalStore } from "react";
import { useState } from "react";
import './ScorePage.styled.css';
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

import sample_logo from '../../assets/sample_logo2.png'

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import Pallete from "../../components/GlobalColourPallete";

import Button from "../../components/Button";

const StyledScoreDisplay = styled.div`
    text-align: center;
    
    font-family: poppins;
    font-size: 500%;
    font-weight: 600;

    @media (max-width: 600px) {
        font-size: 200%;
    }
`;

const ScorePage = ({setScoreDisplay, score, maxScore, setScoreState, mainPath}) => {
    const navigate = useNavigate();
    const clickHandlerContinue = () => {
        setScoreDisplay(false);
    }

    const clickHandlerMenu = () => {
        navigate(mainPath);
    }
    return (
        <div className="score--container">
            <StyledScoreDisplay>
                You Scored {score}/{maxScore}
            </StyledScoreDisplay>
            <div className="button--container">
                <Button title={"Continue"} func={clickHandlerContinue} disabled={false} />
                <Button title={"Back to Menu"} func={clickHandlerMenu} disabled={false} />
            </div>
        </div>
    )
}

export default ScorePage;