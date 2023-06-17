import React, { useEffect } from "react";
import { useState } from "react";
import './App.styled.css';
import { Route, Routes, redirect } from "react-router-dom";

import VowelsPage from "./pages/VowelsPage/VowelsPage";
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
    const vowelsDisplay = <VowelsPage />

    return (
        <Routes>
            <Route path="/vowels" element={vowelsDisplay} />
            <Route path="/vowelsExercises" element={exerciseChooser} />
            <Route path="/ex1" element={<MainEx exNum={"Ex1"}/>} />
            <Route path="/ex2" element={<MainEx exNum={"Ex2"}/>} />
            <Route path="/ex4" element={<MainEx exNum={"Ex4"}/>} />
            <Route path="/ex5" element={<MainEx exNum={"Ex5"}/>} />
            <Route path="/ex6" element={<MainEx exNum={"Ex6"}/>} />
            <Route path="/ex7" element={<MainEx exNum={"Ex7"}/>} />
            {/* {chooserYN ? exerciseChooser : <MainEx exNum={selectedExercise}/>} */}
            {/* <MainEx /> */}
        </Routes>
    )
}

export default App;