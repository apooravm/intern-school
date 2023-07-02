import React from "react";
import { useState, useEffect } from "react";
import { styled } from "styled-components";
import { useLocation, useNavigate } from 'react-router-dom';

import Pallete from "./GlobalColourPallete";

const StyledBackbutton = styled.button`
    padding-inline: 20px;
    padding-block: 13px;

    /* min-width: 30px; */

    font-family: poppins;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${Pallete.text.default};

    border: 2px solid ${Pallete.footer.checkButton.border_shadow};
    border-radius: 20px;

    box-shadow: 0px 2px ${Pallete.footer.checkButton.border_shadow};
    transition: all 0.2s;

    background-color: ${Pallete.currWhite};

    &:hover {
        background-color: ${Pallete.footer.checkButton.hover_active};
        color: ${Pallete.text.default};
    }

    &:active {
        background-color: ${Pallete.footer.checkButton.hover_active};
        box-shadow: 0px 0px;
        transform: translateY(2px);
    }

    &.disabled-btn {
        pointer-events: none;
        cursor: not-allowed;
        opacity: 0.4;
    }

    @media (max-width: 600px) {
        display: none;
        width: 100%;
        min-width: auto;
        font-size: 1.6rem;

        padding-block: 15px;

        border-radius: 5px;

        transition: all 0.09s;
    }
`;

const Backbutton = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const goToPrevPage = () => {
        const routeSplit = location.pathname.split("/");
        const prevRoute = routeSplit.slice(0, routeSplit.length-2).join("/");
        navigate(prevRoute.length > 0 ? prevRoute : "/"+prevRoute);

    }

    return (
        <StyledBackbutton className={location.pathname === "/" ? "disabled-btn": ""} onClick={goToPrevPage}>
            back
        </StyledBackbutton>
    )
}

export default Backbutton;