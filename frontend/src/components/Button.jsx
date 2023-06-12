import React from "react";
import { styled } from "styled-components";

import Pallete from "./GlobalColourPallete";

const StyledButton = styled.input`
    padding-inline: 10px;
    padding-block: 13px;

    min-width: 250px;

    font-family: poppins;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${Pallete.text.default};

    border: 2px solid ${Pallete.footer.checkButton.border_shadow};
    border-radius: 20px;

    box-shadow: 0px 2px ${Pallete.footer.checkButton.border_shadow};
    transition: all 0.2s;

    background-color: ${Pallete.currWhite};

    &:hover {
        background-color: ${Pallete.footer.checkButton.hover_active};
        color: ${Pallete.text.default};
    }

    &:active {
        background-color: ${Pallete.footer.checkButton.hover_active};
        box-shadow: 0px 0px;
        transform: translateY(2px);
    }

    &.disabled-btn {
        pointer-events: none;
        cursor: not-allowed;
        opacity: 0.4;
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

const Button = ({title, disabled, func}) => {
    return (
        <StyledButton type="button" value={title} onClick={func} 
            className={disabled ? "disabled-btn": ""}/>
    )
}

export default Button;