import React from "react";
import { styled } from "styled-components";

const colourPallete = {
    "buttonBorder": 'rgb(81, 81, 81)',
    "textNormal": 'rgb(109, 109, 109)',
    "textHighlighted": 'rgb(87, 87, 87)',
    "bgHover": 'rgb(224, 237, 244)',
    "bgActive": 'rgb(219, 219, 219)'
};

const StyledOptionsButton = styled.button`
    padding-block: 16px;
    /* max-width: 200px; */

    min-width: 9rem;
    min-height: 8rem;

    font-size: 400%;
    font-family: monospace;
    color: ${colourPallete.textNormal};

    background-color: white;
    border: 2px solid ${colourPallete.buttonBorder};
    box-shadow: 3px 4px 0px ${colourPallete.buttonBorder};

    transition: all 0.2s;

    &:hover {
        background-color: ${colourPallete.bgHover};
        color: ${colourPallete.textHighlighted};
    }
    &:active {
        background-color: ${colourPallete.bgActive};
        color: ${colourPallete.textHighlighted};
        box-shadow: 0px 0px 0px ${colourPallete.buttonBorder};
        transform: translateY(4px);
    }
    ${({ is_active }) =>
    is_active === "true"
      ? `
        background-color: ${colourPallete.bgActive};
        color: ${colourPallete.textHighlighted};
        box-shadow: 0px 0px 0px ${colourPallete.buttonBorder};
        transform: translateY(4px);
      `
      : ``
    };

    @media (max-width: 600px) {
        min-width: none;
        font-size: 200%;

        background-color: white;
        border: 4px solid ${colourPallete.buttonBorder};
        box-shadow: 0px 0px 0px ${colourPallete.buttonBorder};

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