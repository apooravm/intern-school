import React from "react";
import { styled } from "styled-components";

const StyledImageButtonDisplay = styled.button`
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

const ImageButtonDisplay = (props) => {
    const image = props.image;
    const text = props.text;
    return (
        <StyledImageButtonDisplay value={text} >
            <img src={image}></img>
        </StyledImageButtonDisplay>
    )
}

export default ImageButtonDisplay;