import React from "react";
import './ExTypePage.styled.css';
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import sample_logo from '../../assets/sample_logo2.png'

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import OptionsButton from "../../components/OptionsButton";

const ExTypePage = () => {
    const [selectedExercise, setSelectedExercise] = useState({"id": '', "value": ''});
    const navigate = useNavigate();
    const [footerData, setFooterData] = useState(
        {
            "footerState": "inactive", // inactive, correct, incorrect
            "changeFooterColour": true,
            "button_disabled": false,
            "bottom_text": "Choose either to begin...",
            "button_text": "next",
        }
    )

    useEffect(() => {
        if (selectedExercise.value !== "" && selectedExercise.value !== " " && selectedExercise.value !== undefined) {
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
    }, [selectedExercise]);

    const footerFunc = () => {
        if (selectedExercise.value === "Learn Vowels") {
            navigate('/vowels');   
        } else if (selectedExercise.value === "Learn Consonants"){
            navigate('/consonants');
        }
    }
    
    return (
        <div className="ExTypePage--container">
            <Header logo={sample_logo}/>
            <div className="ExTypePage--item-container">
                <OptionsButton btnId={1}
                                currActive={selectedExercise}
                                func={() => {}}
                                setActive={setSelectedExercise}
                                title={"Learn Vowels"}/>
                <OptionsButton btnId={2}
                                currActive={selectedExercise}
                                func={() => {}}
                                setActive={setSelectedExercise}
                                title={"Learn Consonants"}/>
            </div>
            <Footer footerData={footerData} func_1={footerFunc} func_2={footerFunc}/>  
        </div>
    )
}

export default ExTypePage;