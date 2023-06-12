import React from "react";
import './Exercise_2.styled.css';
import { styled } from "styled-components";
import { useState } from "react";
import { useEffect } from "react";

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

const Exercise_2 = ({func, image, optionsArray, reset}) => {
    const [currActiveId, setCurrActiveId] = useState({"id": "", "value": ""});
    const displayImage = image;

    useEffect(() => {
        setCurrActiveId({"id": "", "value": ""});
    }, [reset])

    return (
        <Styled_Container>
            <ImageDisplay image={displayImage} text="image text"></ImageDisplay>
            <Styled_Options_Container>
                {optionsArray.map((data, dataI) => (
                    <OptionsButton btnId={`op${dataI}`}
                        key={dataI}
                        setActive={setCurrActiveId} 
                        currActive={currActiveId} 
                        title={data} 
                        func={() => {func(data)}} 
                        isActive={false} />
                ))}
            </Styled_Options_Container>
        </Styled_Container>
    )
}

export default Exercise_2;