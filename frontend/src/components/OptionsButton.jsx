import React from "react";
import { styled } from "styled-components";

const StyledOptionsButton = styled.input`
    padding-inline: 30px;
    padding-block: 30px;

    font-family: monospace;
    font-weight: 500;
    font-size: 160%;
    color: rgb(105, 105, 105);

    background-color: #ffffff;
    border: 4px solid #ccccccac;
    border-radius: 30px;

    /* background-color: white; */

    box-shadow: 2px 2px rgb(103, 107, 108);
    box-shadow: 2px 2px grey;
    transition: all 0.2s;

    &:hover {
        background-color: rgba(204, 204, 204, 0.671);
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
`;

const OptionsButton = (props) => {
    return (
        <StyledOptionsButton type="button" value={props.title} onClick={props.func}/>
    )
}

export default OptionsButton;