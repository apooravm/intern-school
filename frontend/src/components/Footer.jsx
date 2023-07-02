import React, { useState } from "react";
import { styled } from "styled-components";
import Button from "./Button";
import Backbutton from "./Backbutton";
import { useEffect } from "react";

// Result Sounds
// import correct_answer from '../assets/correct_answer.wav';
// import wrong_answer from '../assets/wrong_answer.wav';
// import wrong_answer2 from '../assets/wrong_answer2.mp3';
// const currWrong = wrong_answer2

import Pallete from "./GlobalColourPallete";

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 30px;
    padding-bottom: 30px;
    
    border-top: 5px solid ${Pallete.footer.border};

    ${({ footer_state }) =>
        footer_state === "inactive"
        ? `
            background-color: ${Pallete.footer.default};
        `
        : ``
    }
    ${({ footer_state }) =>
        footer_state === "incorrect"
        ? `
            background-color: ${Pallete.footer.incorrect};
        `
        : ``
    }
    ${({ footer_state }) =>
        footer_state === "correct"
        ? `
            background-color: ${Pallete.footer.correct};
        `
        : ``
    }

    @media (max-width: 600px) {
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        padding: 10px;
        padding-bottom: 30px;
        padding-block-start: 15px;

        -webkit-user-select: none; /* Safari */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none; /* Standard syntax */

        /* min-width: 200px; */
    }
`;

const StyledText = styled.div`
    font-family: poppins;
    font-size: 1.2rem;
    font-weight: 500;
    min-width: 40%;
    max-width: 20rem;
    overflow: hidden;
    text-align: left;
    color: ${Pallete.default ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)'};
    ${({ change_text_colour }) => 
        change_text_colour === "true"
        ? `
            color: ${Pallete.default ? 'rgb(255, 255, 255)': 'rgb(0, 0, 0)'};
        `
        : ``
    }

    @media (max-width: 600px) {
        padding-bottom: 20px;
        min-width: 100px;
        font-size: 120%;
        text-align: center;
    }
`;

// selectedOption bool
/*
        Footer does
        if selectedOption === true/false => enable/disable button
        when button enabled => if pressed => if selectedOption === true/false => setFooterCorrect(correct/incorrect)
        after button pressed => change func
        
        should take in
        selectedOption
        buttonFunc_1 => checkIfAnswerCorrect
        buttonFunc_2 => go to next page
        const [footerCorrect, setFooterCorrect] = useState("inactive");
        const [buttonText, setButtonText] = useState("check");
        const [btnActive, setBtnActive] = useState(true);
        const [bottomFooterText, setBottomText] = useState(bottomText);
    */
const Footer = ({footerData, func_1, func_2}) => {
   const [data, setData] = useState(footerData);

   useEffect(() => {
        setData(footerData);
   }, [footerData])
    
    return (
        <StyledFooter footer_state={data.footerState} >
                    <Backbutton />
                    <StyledText change_text_colour={data.changeFooterColour ? data.footerState === "incorrect" ? "true" : "false" : "false"}>
                        {data.bottom_text}
                    </StyledText>
                    <Button
                        title={data.button_text}
                        disabled={data.button_disabled}
                        func={data.footerState !== "correct" && data.footerState !== "incorrect" ? func_1 : func_2}
                    />
        </StyledFooter>
    )
}

export default Footer;