import React, { useState } from "react";
import { styled } from "styled-components";
import Button from "./Button";
import { useEffect } from "react";

// Result Sounds
import correct_answer from '../assets/correct_answer.wav';
import wrong_answer from '../assets/wrong_answer.wav';
import wrong_answer2 from '../assets/wrong_answer2.mp3';
const currWrong = wrong_answer2

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
    font-size: 1.3rem;
    font-weight: 500;
    min-width: 500px;
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
        font-size: 140%;
        text-align: center;
    }
`;

// checkAnswer bool
const Footer = ({bottomText, checkAnswer, colours, answer_description, nextExState, prevExState}) => {
    const [footerCorrect, setFooterCorrect] = useState("inactive");
    const [buttonText, setButtonText] = useState("check");
    const [btnActive, setBtnActive] = useState(true);
    const [bottomFooterText, setBottomText] = useState(bottomText);
    const [isDisabled, setDisabled] = useState(false);

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

    useEffect(() => {
        if (checkAnswer !== "" && checkAnswer !== " ") {
            setBtnActive(false);
        } else {
            setBtnActive(true);
        }
    }, [checkAnswer])

    useEffect(() => {
        if (footerCorrect === "correct") {
            PlaySound(correct_answer);
            setButtonText("next");
            setBottomText(`Correct | ${answer_description}`);

        } else if (footerCorrect === "incorrect") {
            PlaySound(currWrong);
            setButtonText("next");
            setBottomText(`Wrong | ${answer_description}`);
        }
    }, [footerCorrect]);

    const checkIfAnswerCorrect = () => {
        // checkAnswer => "", true, false
        if (checkAnswer) {
            setFooterCorrect("correct");
        } else {
            setFooterCorrect("incorrect");
        }
    };

    const goToNextPage = () => {
        nextExState({
            "count": prevExState.count += 1,
            "score": footerCorrect === "correct" ? prevExState.score += 1 : prevExState.score,
            "change": true
        });
        setFooterCorrect("inactive");
        setButtonText("check");
        setBottomText(bottomText);
    }
    
    return (
        <StyledFooter footer_state={footerCorrect} {...colours}>
                    <StyledText change_text_colour={footerCorrect === "incorrect" ? "true" : "false"}>{bottomFooterText}</StyledText>
                    <Button
                        title={buttonText}
                        checkAnswer={checkAnswer}
                        setFooter={setFooterCorrect}
                        disabled={btnActive}
                        func={footerCorrect !== "correct" && footerCorrect !== "incorrect" ? checkIfAnswerCorrect : goToNextPage}
                    />
        </StyledFooter>
    )
}

export default Footer;