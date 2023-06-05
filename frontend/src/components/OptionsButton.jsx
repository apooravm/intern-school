import React, { useEffect } from "react";
import { styled } from "styled-components";

const StyledOptionsButton = styled.button`
    padding-inline: 150px;
    padding-block: 24px;

    min-width: 100%;
    width: 100%;

    font-family: monospace;
    font-weight: 500;
    font-size: 160%;
    color: rgb(105, 105, 105);

    background-color: #ffffff;
    border: 3px solid #ccccccac;
    border-radius: 10px;

    /* background-color: white; */

    /* box-shadow: 2px 2px rgb(103, 107, 108); */
    /* transition: all 0.2s; */

    overflow: hidden;
    transition: all 0.2s cubic-bezier(0.25, 1, 0.5, 1); // easeOutQuart

    &:hover {
        /* background-color: rgba(204, 204, 204, 0.671); */
        background-color: rgb(235, 255, 181);
        color: rgb(62, 62, 62);
        /* box-shadow: 3px 3px 3px rgba(197, 0, 77, 0.9); */
    }

    &:active {
        background-color: #000000;
        color: #ffffff;
        box-shadow: 0px 0px rgb(35, 137, 171);
        transform: translateY(4px);
    }
    ${({ isactive }) =>
    isactive === "true"
      ? `
        background-color: #000000;
        color: #ffffff;
        box-shadow: 0px 0px rgb(35, 137, 171);
        transform: translateY(4px);
      `
      : ``
  };

    @media (max-width: 600px) {
        padding-inline: 130px;
        padding-block: 25px;

        min-width: auto;
        width: 100%;

        font-size: 160%;

        padding-block: 15px;

        border-radius: 5px;

        transition: all 0.01s;
    }   
`;

const OptionsButton = ({title, func, currActive, setActive, btnId}) => {
    const clickHandler = () => {
        setActive({"id": btnId, "value": title});
        func();
    }
    return (
        <StyledOptionsButton onClick={clickHandler} isactive={currActive.id === btnId ? "true" : "false"}>
            {title}
        </StyledOptionsButton>
    )
}

export default OptionsButton;