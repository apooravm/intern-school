import React, { useEffect } from "react";
import { styled } from "styled-components";

import Pallete from "./GlobalColourPallete";

const StyledOptionsButton = styled.button`
    padding-inline: 130px;
    padding-block: 10px;

    min-width: 100%;
    width: 100%;

    font-family: poppins;
    font-weight: 500;
    font-size: 230%;
    color: ${Pallete.optionsButton.text};

    background-color: ${Pallete.currWhite};
    border: 2.5px solid ${Pallete.optionsButton.border_shadow};
    border-radius: 12px;

    box-shadow: 0px 3px ${Pallete.optionsButton.border_shadow};

    overflow: hidden;
    transition: all 0.2s cubic-bezier(0.25, 1, 0.5, 1); // easeOutQuart

    &:hover {
        background-color: ${Pallete.optionsButton.hover_active_bg};
        color: ${Pallete.optionsButton.hover_active_text};
    }

    &:active {
        background-color: ${Pallete.optionsButton.hover_active_bg};
        color: ${Pallete.optionsButton.hover_active_text};
        box-shadow: 0px 0px;
        transform: translateY(3px);
    }
    ${({ isactive }) =>
    isactive === "true"
      ? `
        background-color: ${Pallete.optionsButton.hover_active_bg};
        color: #3d3d3d;
        box-shadow: 0px 0px rgb(35, 137, 171);
        transform: translateY(4px);
      `
      : ``
  };

    @media (max-width: 600px) {
        padding-inline: 130px;
        padding-block: 25px;
        border: 3px solid ${Pallete.optionsButton.border_shadow};
        box-shadow: 0px 0px ${Pallete.optionsButton.border_shadow};
        transform: translateY(0px);

        min-width: auto;
        width: 100%;

        font-size: 160%;

        padding-block: 15px;

        border-radius: 5px;

        transition: all 0.1s;

        &:active {
            background-color: ${Pallete.optionsButton.hover_active_bg};
            color: ${Pallete.optionsButton.hover_active_text};
            box-shadow: 0px 0px rgb(35, 137, 171);
            /* transform: translateY(4px); */
        }
        ${({ isactive }) =>
            isactive === "true"
            ? `
                background-color: ${Pallete.optionsButton.hover_active_bg};
                color: ${Pallete.optionsButton.hover_active_text};
                box-shadow: 0px 0px rgb(35, 137, 171);
            `
            : ``
        };
    }   
`;

const OptionsButton = ({title, func, currActive, setActive, btnId}) => {
    const clickHandler = () => {
        setActive({"id": btnId, "value": title});
        func(title);
    }
    return (
        <StyledOptionsButton onClick={clickHandler} isactive={currActive.id === btnId ? "true" : "false"}>
            {title}
        </StyledOptionsButton>
    )
}

export default OptionsButton;