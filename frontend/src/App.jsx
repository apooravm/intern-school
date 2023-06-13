import React, { useEffect } from "react";
import { useState } from "react";
import './App.styled.css';
import { styled } from "styled-components";
import { Route, Routes, redirect } from "react-router-dom";

import ExerciseChooser from "./pages/ExerciseChooser/ExerciseChooser";
import MainEx from "./pages/MainExercise/mainEx";

const App = () => {
    const [selectedExercise, setSelectedExercise] = useState('');
    const [chooserYN, setChooserYN] = useState(true);
    useEffect(() => {
        if (selectedExercise !== "") {
            setChooserYN(false);
        }
    }, [selectedExercise]);

    const exerciseChooser = <ExerciseChooser setExercise={setSelectedExercise}/>;

    return (
        <Routes>
            <Route path="/" element={exerciseChooser} />
            <Route path="/ex1" element={<MainEx exNum={"Ex1"}/>} />
            <Route path="/ex2" element={<MainEx exNum={"Ex2"}/>} />
            <Route path="/ex4" element={<MainEx exNum={"Ex4"}/>} />
            <Route path="/ex5" element={<MainEx exNum={"Ex5"}/>} />
            <Route path="/ex6" element={<MainEx exNum={"Ex6"}/>} />
            {/* {chooserYN ? exerciseChooser : <MainEx exNum={selectedExercise}/>} */}
            {/* <MainEx /> */}
        </Routes>
    )
}

export default App;