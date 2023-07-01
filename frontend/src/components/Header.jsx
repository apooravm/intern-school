import React from "react";
import { styled } from "styled-components";

import Pallete from "./GlobalColourPallete";
import { useNavigate } from "react-router-dom";

const StyledHeader = styled.nav`
    height: 40px;
    display: flex;
    padding: 20px 36px 30px;
    background-color: ${Pallete.header.default};

    @media (max-width: 600px) {
        height: 40px;
        display: flex;
        padding: 0px;
        padding-top: 15px;
        padding-left: 30px;
        padding-bottom: 10px;
    }
`;

const StyledImage = styled.img`
    max-width: 50px;

    &:hover {
        cursor: pointer;
    }

    @media (max-width: 600px) {
        max-width: 80px;
    }
`;

const Header = ({logo}) => {
    const navigate = useNavigate();
    return (
        <StyledHeader>
            <StyledImage src={logo} alt="airbnb logo" onClick={() => {navigate("/vowels")}}/>
        </StyledHeader>

    )
}

export default Header;