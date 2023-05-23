import React from "react";
import { styled } from "styled-components";

const StyledHeader = styled.nav`
    height: 40px;
    display: flex;
    padding: 20px 36px;
    box-shadow: 0px 2.98256px 7.4564px rgba(0, 0, 0, 0.1);

    @media (max-width: 600px) {
        height: 40px;
        display: flex;
        padding: 0px;
        padding-top: 15px;
        padding-left: 30px;
        padding-bottom: 10px;
        box-shadow: 0px 2px rgba(0, 0, 0, 0.1);
    }
`;

const StyledImage = styled.img`
    max-width: 100px;

    @media (max-width: 600px) {
        max-width: 80px;
    }
`;

const Header = (props) => {
    return (
        <StyledHeader>
            <StyledImage src={props.logo} alt="airbnb logo">

            </StyledImage>
        </StyledHeader>
    )
}

export default Header;