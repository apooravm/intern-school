import React from "react";
import { styled } from "styled-components";

import Pallete from "./GlobalColourPallete";

const StyledOptionsButton = styled.button`
    padding-block: 16px;

    min-width: 9rem;
    min-height: 8rem;

    font-size: 400%;
    font-family: ${Pallete.font_family};
    color: ${Pallete.SquareButton.text};

    background-color: ${Pallete.SquareButton.default};
    border: 3px solid ${Pallete.SquareButton.border_shadow};
    box-shadow: 3px 3px 0px ${Pallete.SquareButton.border_shadow};

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
    ${({ is_active }) =>
    is_active === "true"
      ? `
        background-color: ${Pallete.SquareButton.hover_active};
        color: ${Pallete.SquareButton.text_hover};
        box-shadow: 0px 0px 0px;
        transform: translateY(3px);
      `
      : ``
    };

    @media (max-width: 600px) {
        min-width: none;
        font-size: 200%;

        background-color: ${Pallete.SquareButton.default};
        border: 4px solid ${Pallete.SquareButton.border_shadow};
        box-shadow: 0px 0px 0px ${Pallete.SquareButton.border_shadow};

        transition: all 0.01s;
    }
    
`;
const SqrButton = ({title, func, btnId, setActive, currActive}) => {
    const handleOnClick = () => {
        setActive(btnId);
        func();
    }
    return (
        <StyledOptionsButton onClick={handleOnClick} is_active={currActive === btnId ? "true" : "false"}>
            {title}
        </StyledOptionsButton>
    )
}

export default SqrButton;