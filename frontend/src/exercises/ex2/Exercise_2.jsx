import React from "react";
import './Exercise_2.styled.css';
import { styled } from "styled-components";
import { useState } from "react";

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

const foo = () => {
    console.log("play Sound")
}

const Exercise_2 = (props) => {
    const [currActiveId, setCurrActiveId] = useState('');
    const displayImage = props.image;
    const correctOption = props.correct_op;
    const other_option1 = props.other_op_1;
    const other_option2 = props.other_op_2;

    return (
        <Styled_Container>
            <ImageDisplay image={displayImage} text="bruh"></ImageDisplay>
            <Styled_Options_Container>
            <OptionsButton btnId={'op1'} 
                        setActive={setCurrActiveId} 
                        currActive={currActiveId} 
                        title={correctOption} 
                        func={foo} 
                        isActive={false}></OptionsButton>
                <OptionsButton btnId={'op2'} 
                        setActive={setCurrActiveId} 
                        currActive={currActiveId} 
                        title={other_option1} 
                        func={foo} 
                        isActive={false}></OptionsButton>
                <OptionsButton btnId={'op3'} 
                        setActive={setCurrActiveId} 
                        currActive={currActiveId} 
                        title={other_option2} 
                        func={foo} 
                        isActive={false}></OptionsButton>
            </Styled_Options_Container>
        </Styled_Container>
    )
}

export default Exercise_2;