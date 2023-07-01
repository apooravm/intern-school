import React, { useEffect, useSyncExternalStore } from "react";
import { useState } from "react";
import './ExerciseChooser.styled.css';
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

import sample_logo from '../../assets/sample_logo2.png'

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import Pallete from "../../components/GlobalColourPallete";

const StyledExerciseSelector = styled.button`
    min-width: 40rem;
    min-height: 70px;

    text-align: center;

    background-color: ${Pallete.currWhite};
    border: 2px solid ${Pallete.SquareButton.border_shadow};

    color: ${Pallete.text.default};
    font-size: 120%;
    font-family: poppins;

    border-radius: 12px;
    box-shadow: 0px 2px ${Pallete.SquareButton.border_shadow};

    overflow: hidden;
    transition: all 0.2s cubic-bezier(0.25, 1, 0.5, 1);

    &:hover {
        background-color: ${Pallete.optionsButton.hover_active_bg};
        color: ${Pallete.optionsButton.hover_active_text};
    }

    &:active {
        background-color: ${Pallete.optionsButton.hover_active_bg};
        color: ${Pallete.optionsButton.hover_active_text};
        box-shadow: 0px 0px;
        transform: translateY(2px);
    }

    ${({ isactive }) =>
    isactive === "true"
      ? `
        background-color: ${Pallete.optionsButton.hover_active_bg};
        color: #3d3d3d;
        box-shadow: 0px 0px rgb(35, 137, 171);
        transform: translateY(2px);
      `
      : ``
    };

    @media (max-width: 600px) {
        padding-inline: 20px;
        padding-block: 25px;
        border: 3px solid ${Pallete.optionsButton.border_shadow};
        box-shadow: 0px 0px ${Pallete.optionsButton.border_shadow};
        transform: translateY(0px);
        text-align: center;

        min-width: auto;
        width: 95%;

        font-size: 100%;

        padding-block: 15px;

        border-radius: 2px;

        transition: all 0.1s;

        &:active {
            background-color: ${Pallete.optionsButton.hover_active_bg};
            color: ${Pallete.optionsButton.hover_active_text};
            box-shadow: 0px 0px rgb(35, 137, 171);
            transform: translateY(0px);
        }
        ${({ isactive }) =>
            isactive === "true"
            ? `
                background-color: ${Pallete.optionsButton.hover_active_bg};
                color: ${Pallete.optionsButton.hover_active_text};
                box-shadow: 0px 0px rgb(35, 137, 171);
            `
            : ``
        };
    }   
`;

const Footer_Chooser = ({chosenOption, bottom_text, func}) => {
    const [footerData, setFooterData] = useState(
        {
            "footerState": "inactive", // inactive, correct, incorrect
            "changeFooterColour": true,
            "button_disabled": true,
            "bottom_text": bottom_text,
            "button_text": "next",
        }
    )

    useEffect(() => {
        if (chosenOption !== "" && chosenOption !== " " && chosenOption !== undefined) {
            setFooterData(prevState => ({
                ...prevState,
                "button_disabled": false
            }))
        } else {
            setFooterData(prevState => ({
                ...prevState,
                "button_disabled": true
            }));
        }
    }, [chosenOption]);

    return (
        <Footer footerData={footerData} func_1={func} func_2={func}/>
    )
}

const Selector = ({title, exercise, currActive, setActive, btnId, route}) => {
    const clickHandler = () => {
        setActive({"id": btnId, "exercise": exercise, "route": route});
    }
    return (
        <StyledExerciseSelector onClick={clickHandler} isactive={currActive.id === btnId ? "true" : "false"}>
            {title}
        </StyledExerciseSelector>
    )
}

const ExerciseChooser = ({setExercise, exerciseDescription}) => {
    const [selectedExercise, setSelectedExercise] = useState({"id": '', "exercise": '', "route": ''});
    const navigate = useNavigate();
    const setChosenExercise = () => {
        if (selectedExercise.exercise !== "") {
            setExercise(selectedExercise.exercise);
            navigate(`/${selectedExercise.route}`);
        }
    }

    return (
        <div id="exChooser--root">
            <Header logo={sample_logo}></Header>
            <div className="exChooser--title">
                {"Select an exercise to begin..."}
            </div>
            <div className="exChooser--options-container">
                {exerciseDescription.description.map((data, dataI) => (
                    <Selector title={data.title}
                        exercise={data.ex}
                        route={data.route}
                        btnId={`op${dataI}`}
                        key={`op${dataI}`}
                        setActive={setSelectedExercise}
                        currActive={selectedExercise}/>
                ))}
            </div>
            <Footer_Chooser bottom_text={exerciseDescription.footer_text} 
                            func={setChosenExercise} 
                            chosenOption={selectedExercise.exercise}/>
        </div>
    )
}

export default ExerciseChooser;