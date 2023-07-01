import React, { useEffect } from "react";
import { useState } from "react";
import './App.styled.css';
import { Route, Routes, redirect } from "react-router-dom";

import VowelsPage from "./pages/VowelsPage/VowelsPage";
import ConsonantsPage from "./pages/ConsonantsPage/ConsonantsPage";
import ExerciseChooser from "./pages/ExerciseChooser/ExerciseChooser";
import MainEx from "./pages/MainExercise/mainEx";
import ExTypePage from "./pages/ExTypePage/ExTypePage";

const vowelExDescription = {
    "footer_text":  "Learn Konkani Vowels with the given exercises",
    "description": [
        {
            "ex": "Ex1",
            "route": "vowels/exercises/ex1",
            "title": "Choose the correct english transliteration"
        },
        {
            "ex": "Ex2",
            "route": "vowels/exercises/ex2",
            "title": "First character of the object in the given image"
        },
        {
            "ex": "Ex4",
            "route": "vowels/exercises/ex4",
            "title": "Order the characters according to the sound"
        },
        {
            "ex": "Ex5",
            "route": "vowels/exercises/ex5",
            "title": "Complete the given word"
        },
        {
            "ex": "Ex6",
            "route": "vowels/exercises/ex6",
            "title": "Identify the character from the given sound"
        },
        {
            "ex": "Ex7",
            "route": "vowels/exercises/ex7",
            "title": "Trace the Character"
        },
    ]
};

const consonantExDescription   = {
    "footer_text":  "Learn Konkani Consonants with the given exercises",
    "description": [
        {
            "ex": "Ex1",
            "route": "consonants/exercises/ex1",
            "title": "Choose the correct english transliteration"
        },
        {
            "ex": "Ex2",
            "route": "consonants/exercises/ex2",
            "title": "First character of the object in the given image"
        },
        {
            "ex": "Ex4",
            "route": "consonants/exercises/ex4",
            "title": "Order the characters according to the sound"
        },
        {
            "ex": "Ex5",
            "route": "consonants/exercises/ex5",
            "title": "Complete the given word"
        },
        {
            "ex": "Ex6",
            "route": "consonants/exercises/ex6",
            "title": "Identify the character from the given sound"
        },
        {
            "ex": "Ex7",
            "route": "consonants/exercises/ex7",
            "title": "Trace the Character"
        },
    ]
}

const App = () => {
    const [selectedExercise, setSelectedExercise] = useState('');
    const [chooserYN, setChooserYN] = useState(true);
    useEffect(() => {
        if (selectedExercise !== "") {
            setChooserYN(false);
        }
    }, [selectedExercise]);

    return (
        <Routes>
            <Route path="/" element={<ExTypePage />} />
            <Route path="/vowels" element={<VowelsPage />} />
            <Route path="/vowels/exercises" element={<ExerciseChooser setExercise={setSelectedExercise} exerciseDescription={vowelExDescription}/>} />
            <Route path="/vowels/exercises/ex1" element={<MainEx exNum={"Ex1"} type={"vowels"}/>} />
            <Route path="/vowels/exercises/ex2" element={<MainEx exNum={"Ex2"} type={"vowels"}/>} />
            <Route path="/vowels/exercises/ex4" element={<MainEx exNum={"Ex4"} type={"vowels"}/>} />
            <Route path="/vowels/exercises/ex5" element={<MainEx exNum={"Ex5"} type={"vowels"}/>} />
            <Route path="/vowels/exercises/ex6" element={<MainEx exNum={"Ex6"} type={"vowels"}/>} />
            <Route path="/vowels/exercises/ex7" element={<MainEx exNum={"Ex7"} type={"vowels"}/>} />

            <Route path="/consonants" element={<ConsonantsPage />} />
            <Route path="/consonants/exercises" element={<ExerciseChooser setExercise={setSelectedExercise} exerciseDescription={consonantExDescription}/>} />
            <Route path="/consonants/exercises/ex1" element={<MainEx exNum={"Ex1"} type={"consonants"}/>} />
            <Route path="/consonants/exercises/ex2" element={<MainEx exNum={"Ex2"} type={"consonants"}/>} />
            <Route path="/consonants/exercises/ex4" element={<MainEx exNum={"Ex4"} type={"consonants"}/>} />
            <Route path="/consonants/exercises/ex5" element={<MainEx exNum={"Ex5"} type={"consonants"}/>} />
            <Route path="/consonants/exercises/ex6" element={<MainEx exNum={"Ex6"} type={"consonants"}/>} />
            <Route path="/consonants/exercises/ex7" element={<MainEx exNum={"Ex7"} type={"consonants"}/>} />
            {/* {chooserYN ? exerciseChooser : <MainEx exNum={selectedExercise}/>} */}
            {/* <MainEx /> */}
        </Routes>
    )
}

export default App;