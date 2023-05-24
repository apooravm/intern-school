import React from "react";
import { styled } from "styled-components";
import Button from "./Button";

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 30px;
    padding-bottom: 30px;

    border-top: 5px solid rgba(213, 213, 213, 0.507);

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
    color: rgb(88, 88, 88);

    @media (max-width: 600px) {
        padding-bottom: 20px;
        font-size: 140%;
    }
`

const Footer = (props) => {
    return (
        <StyledFooter>
            <StyledText>
                {props.text}
            </StyledText>
            <Button title={props.button_text}></Button>
        </StyledFooter>
    )
}

export default Footer;