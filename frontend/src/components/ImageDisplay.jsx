import React from "react";
import { styled } from "styled-components";

const StyledImageDisplay = styled.button`

    min-width: 300px;
    width: 200px;
    min-height: 300px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    border: 3px solid rgba(125, 125, 125, 0.366);
    border-radius: 20px;

    box-shadow: 2px 2px rgb(138, 138, 138);

    background-color: white;

    transition: all 0.2s;

    &:hover {
        background-color: rgb(192, 254, 255);
        #ImgDisp--text {
            color: rgb(0, 0, 0);
        }
    }

    &:active {
        background-color: rgb(151, 253, 255);
        box-shadow: 0px 0px rgb(138, 138, 138);
        transform: translateY(4px);
    }

    @media (max-width: 600px) {
        min-width: 280px;
        width: none;
        min-height: 290px;
        /* align-items: center; */

        margin-bottom: 10px;
    }
`;

const StyledImage = styled.img`
    width: 80%;
    height: 70%;
`;

const StyledText = styled.div`
    justify-content: center;
    color: rgb(105, 105, 105);
    font-size: 110%;
    font-weight: 500;
    font-family: monospace;
`;

function foo() {
    console.log("fofo asdnakjsn");
}

const ImageDisplay = (props) => {
    return (
        <StyledImageDisplay>
            <StyledImage src={props.image} alt="image"></StyledImage>
            <StyledText id="ImgDisp--text">
                {props.text}
            </StyledText>
        </StyledImageDisplay>
    )
}

export default ImageDisplay;