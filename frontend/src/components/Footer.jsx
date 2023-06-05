import React, { useState } from "react";
import { styled } from "styled-components";
import Button from "./Button";
import { useEffect } from "react";

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 30px;
    padding-bottom: 30px;
    
    border-top: 5px solid rgb(213, 213, 213);

    background-color: rgb(17, 100, 102);

    ${({ footer_state }) =>
        footer_state === "correct"
        ? `
            background-color: #fdfdfd;
        `
        : ``
    }

    @media (max-width: 600px) {
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        padding: 10px;
        padding-bottom: 30px;
        padding-block-start: 30px;

        -webkit-user-select: none; /* Safari */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none; /* Standard syntax */

        /* min-width: 200px; */
    }
`;

const StyledText = styled.div`
    font-family: monospace;
    font-size: 160%;
    font-weight: 500;
    color: rgb(0, 0, 0);
    /* color: rgb(238, 255, 255); */

    @media (max-width: 600px) {
        padding-bottom: 20px;
        font-size: 140%;
    }
`

const Footer = ({text, checkAnswer}) => {
    const [footerCorrect, setFooterCorrect] = useState("inactive");
    let displayText = text;
    let buttonText = "check";
    useEffect(() => {
        if (footerCorrect !== "inactive") {
            if (footerCorrect === "correct") {
                displayText = "Correct Answer!";
                buttonText = "next";
            }
        }
      }, [footerCorrect]);
      
    return (
        <StyledFooter footer_state={footerCorrect}>
            <StyledText>
                {displayText}
            </StyledText>
            <Button title={buttonText} checkAnswer={checkAnswer} setFooter={setFooterCorrect}></Button>
        </StyledFooter>
    )
}

export default Footer;