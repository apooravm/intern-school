import React from "react";
import { styled } from "styled-components";

const StyledImageDisplay = styled.div`

    min-width: 280px;
    width: 150px;
    min-height: 240px;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    border: 3px solid rgba(125, 125, 125, 0.366);
    border-radius: 20px;

    @media (max-width: 600px) {
        min-width: 100%;
        width: none;
        min-height: 200px;
    }
`;

const StyledImage = styled.img`
    width: 80%;
    height: 80%;
`;

const StyledText = styled.div`
    justify-content: center;
    color: rgb(105, 105, 105);
    font-size: 110%;
    font-weight: 500;
    font-family: monospace;
`;

const ImageDisplay = (props) => {
    return (
        <StyledImageDisplay>
            <StyledImage src={props.image} alt="image"></StyledImage>
            <StyledText>
                {props.text}
            </StyledText>
        </StyledImageDisplay>
    )
}

export default ImageDisplay;