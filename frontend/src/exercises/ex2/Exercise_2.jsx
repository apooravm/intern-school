import React from "react";
import './Exercise_2.styled.css';
import { styled } from "styled-components";

import airbnbLogo from '../../assets/airbnb.svg';

import OptionsButton from "../../components/OptionsButton";
import ImageDisplay from "../../components/ImageDisplay";

const Styled_Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    @media (max-width: 600px) {
        flex-direction: column;
        justify-content: space-evenly;
    }
`;

const Styled_Options_Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    gap: 10px;
`;

const Exercise_2 = (props) => {
    const displayImage = props.image;
    const correctOption = props.correct_op;
    const other_option1 = props.other_op_1;
    const other_option2 = props.other_op_2;

    return (
        <Styled_Container>
            <ImageDisplay image={displayImage} text="bruh"></ImageDisplay>
            <Styled_Options_Container>
                <OptionsButton title={correctOption}></OptionsButton>
                <OptionsButton title={other_option1}></OptionsButton>
                <OptionsButton title={other_option2}></OptionsButton>
            </Styled_Options_Container>
        </Styled_Container>
    )
}

export default Exercise_2;