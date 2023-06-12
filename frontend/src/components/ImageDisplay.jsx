import React from "react";
import { styled } from "styled-components";

import Pallete from "./GlobalColourPallete";

const StyledImageDisplay = styled.button`
    min-width: 300px;
    width: 200px;
    min-height: 300px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    border: 3px solid ${Pallete.ImageDisplay.border_shadow};
    border-radius: 20px;

    background-color: ${Pallete.currWhite};

    transition: all 0.2s;

    &:hover {
        background-color: ${Pallete.ImageDisplay.hover};
        #ImgDisp--text {
            color: ${Pallete.ImageDisplay.text_active};
        }
    }

    &:active {
        background-color: ${Pallete.ImageDisplay.active};
        box-shadow: 0px 0px;

        border: 5px solid ${Pallete.ImageDisplay.border_shadow};
        transform: translateY(0px);
    }

    @media (max-width: 600px) {
        min-width: 280px;
        width: none;
        min-height: 290px;
        margin-bottom: 10px;
    }
`;

const StyledImage = styled.img`
    width: 80%;
    height: 70%;
    max-width: 80%;
`;

const StyledText = styled.div`
    justify-content: center;
    color: ${Pallete.ImageDisplay.text};
    font-size: 100%;
    font-weight: 100;
    font-family: ${Pallete.font_family};
`;

const ImageDisplay = ({image, text}) => {
    return (
        <StyledImageDisplay>
            <StyledImage src={image} alt="image"></StyledImage>
                <StyledText id="ImgDisp--text">
                    {text}
                </StyledText>
        </StyledImageDisplay>
    )
}

export default ImageDisplay;