import React from "react";
import { styled } from "styled-components";


const StyledButton = styled.input`
    padding-inline: 90px;
    padding-block: 20px;

    font-family: monospace;
    font-weight: 500;
    font-size: 160%;
    color: rgb(100, 100, 100);

    border: 2px solid grey;
    border-radius: 20px;

    box-shadow: 2px 2px grey;
    transition: all 0.2s;

    background-color: white;

    &:hover {
        /* background-color: rgba(224, 224, 224, 0.671); */
        border-color: rgb(197, 0, 77);
        color: rgb(62, 62, 62);
    }

    &:active {
        background-color: #b9b9b9b0;
        box-shadow: 0px 0px rgb(35, 137, 171);;
        transform: translateY(4px);
    }

    @media (max-width: 600px) {
        width: 100%;
        min-width: auto;

        font-size: 160%;

        padding-block: 20px;

        border-radius: 5px;

        transition: all 0.01s;
    }
`

const Button = ({title, setFooter, checkAnswer}) => {
    const checkIfAnswerCorrect = () => {
        if (checkAnswer) {
            setFooter("correct");
            console.log("Is Correct!")
        } else {
            setFooter("incorrect");
            console.log("INCORRECT!")
        }
    }
    return (
        <StyledButton type="button" value={title} onClick={checkIfAnswerCorrect}/>
    )
}

export default Button;