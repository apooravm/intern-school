import React, { useEffect, useState, useSyncExternalStore } from "react";
import './mainEx.styled.css';
import airbnbLogo from '../../assets/airbnb.svg';

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ScorePage from "../ScorePage/ScorePage";

import Exercise_1 from "../../exercises/ex1/Exercise1";
import Exercise_2 from "../../exercises/ex2/Exercise_2";
import Exercise_4 from "../../exercises/ex4/Exercise_4";
import Exercise_5 from "../../exercises/ex5/Exercise_5";
import Exercise_6 from '../../exercises/ex6/Exercise_6';
import Exercise_7 from "../../exercises/ex7/Exercise_7";

import sample_logo2 from '../../assets/sample_logo2.png';
import sampleSound from '../../assets/sampleSound.mp3';

import correct_answer from '../../assets/correct_answer.wav';
import wrong_answer from '../../assets/wrong_answer.wav';
import wrong_answer2 from '../../assets/wrong_answer2.mp3';

const PageText = {
    "title": "No Question given",
    "footer_text": "Bottom Footer text",
    "footer_button_text": "next",
    "Ex1": "Identify the correct english transliteration",
    "Ex2": "Object in the image starts with the character...",
    "Ex4": "Order the given according to the sound",
    "Ex5": "Complete the given word",
    "Ex6": "Identify the character from the given sound"
}

const mango = "https://static.vecteezy.com/system/resources/previews/011/502/022/original/an-illustration-of-cute-mango-fruit-hand-drawn-cartoon-free-png.png";

const Exercise1_W = ({data, setIsCorrect, reset}) => {
    const characterDisplayed= data.displayCharacter; 
    const correct_option= data.correct_option; 
    const options_array= data.optionsArray; 
    
    const title = PageText.Ex1 || PageText.title;
    const char = characterDisplayed;

    function foo(chosenOption) {
        if (chosenOption === correct_option) {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
    }
    return (
        <div className="MainEx--container">
            <div className="MainEx--tile">
                {title}
            </div>
            <Exercise_1 char={char}
                        reset={reset}
                        optionsArray={options_array}
                        func={foo}
                        ></Exercise_1>
            </div>
    )
}

const Exercise2_W = ({data, setIsCorrect, reset}) => {
    const displayImage= data.imgSrc;
    const correct_option= data.correctOption; 
    const optionsArray= data.optionsArray; 

    const title = PageText.Ex2 || PageText.title;
    const image = displayImage || mango;

    function setResult(chosenOption) {
        if (chosenOption === correct_option) {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
    }
    return (
        <div className="MainEx--container">
            <div className="MainEx--tile">
                {title}
            </div>
            <Exercise_2 func={setResult} 
                        reset={reset} 
                        image={image} 
                        optionsArray={optionsArray}/>
        </div>
    )
}

const Exercise4_W = ({data, setIsCorrect, reset}) => {
    const sound = data.sound; 
    const correct_order = data.correctOrder; 
    const optionsArray = data.optionsArray;

    const title = PageText.Ex4 || PageText.title;

    function checkOrder(inputStackArray) {
        const checkArrayNull = () => {
            for (const char of inputStackArray) {
                if (char !== null) {
                    return false;
                }
            }
            return true;
        }
        if (!checkArrayNull()) {
            if (JSON.stringify(correct_order) === JSON.stringify(inputStackArray)) {
                setIsCorrect(true);
            } else {
                setIsCorrect(false);
            }   
        } else {
            setIsCorrect("");
        }
    }

    return (
        <div className="MainEx--container">
            <div className="MainEx--tile">
                {title}
            </div>
            <Exercise_4 charSound={sound} 
                        reset={reset} 
                        correctOrder={correct_order}
                        func={checkOrder} 
                        optionsArray={optionsArray}/>
        </div>
    )
};

const Exercise5_W = ({data, setIsCorrect, reset}) => {
    const correct_option = data.correctOption; 
    const incompleteText = data.incompleteText; 
    const optionsArray = data.optionsArray;
    // console.log(optionsArray)

    const title = PageText.Ex5 || PageText.title;
    function checkResult(chosenOption) {
        if (chosenOption === correct_option) {
            setIsCorrect(true);

        } else {
            setIsCorrect(false);
        }
    }
    return (
        <div className="MainEx--container">
            <div className="MainEx--tile">
                {title}
            </div>
            <Exercise_5 func={checkResult} 
                        reset={reset} 
                        incompleteText={incompleteText} 
                        optionsArray={optionsArray}/>
        </div>
    )
};

const Exercise6_W = ({data, setIsCorrect, reset}) => {
    const sound = data.sound;
    const correct_option = data.correctOption; 
    const optionsArray = data.optionsArray; 

    const title = PageText.Ex6 || PageText.title;

    function checkResult(chosenOption) {
        if (chosenOption === correct_option) {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
    }
    return (
        <div className="MainEx--container">
            <div className="MainEx--tile">
                {title}
            </div>
            <Exercise_6 optionsArray={optionsArray} 
                        reset={reset} 
                        func={checkResult} 
                        sound={sound}/>
        </div>
    )
};

const Exercise7_W = ({data, setIsCorrect, reset}) => {
    const character = data.character;
    const title = PageText.Ex7 || PageText.title;

    function checkResult(chosenOption) {
        // change the condition if needed
        if (chosenOption) {
            // Condition should include setIsCorrect state setter
            // Needed for footer
            // Call this function with chosenOption=true if answer correct
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
    }
    return (
        <div className="MainEx--container">
            <div className="MainEx--tile">
                {title}
            </div>
            <Exercise_7 character={character} 
                        func={checkResult} 
                        reset={reset}/>
        </div>
    )
}

const Footer_Score = ({bottomText}) => {
    const selectedOption = ""; // disable button
    const [footerData, setFooterData] = useState(
        {
            "footerState": "inactive",
            "changeFooterColour": true,
            "button_disabled": true,
            "bottom_text": bottomText,
            "button_text": "next",
        }
    )

    useEffect(() => {
        if (selectedOption !== "" && selectedOption !== " ") {
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
    }, [selectedOption]);

    return (
        <Footer 
            footerData={footerData}
            func_1={() => {}}
            func_2={() => {}}
        />
    )

}

const Footer_Ex = ({bottomText_1, bottomText_2, selectedOption, setNextExState, prevExState}) => {
    const [isDisabled, setDisabled] = useState(false);
    const [footerCorrect, setFooterCorrect] = useState("inactive");
    const [footerData, setFooterData] = useState(
        {
            "footerState": footerCorrect,
            "changeFooterColour": true,
            "button_disabled": true,
            "bottom_text": bottomText_1,
            "button_text": "check",
        }
    )

    useEffect(() => {
        if (selectedOption !== "" && selectedOption !== " ") {
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
    }, [selectedOption]);

    const PlaySound = (audioPath) => {
        setDisabled(true);
        if (!isDisabled) {
            const audio = new Audio(audioPath);
            audio.play();
            setDisabled(true);
        
            audio.onended = () => {
                setDisabled(false);
            };
        }
    }

    const checkIfAnswerCorrect = () => {
        // selectedOption => "", true, false
        if (selectedOption) {
            setFooterCorrect("correct");
            PlaySound(correct_answer);

            setFooterData(prevState => ({
                ...prevState,
                "footerState": "correct",
                "bottom_text": `Correct | ${bottomText_2}`,
                "button_text": "next"
            }))

        } else {
            setFooterCorrect("incorrect");

            PlaySound(wrong_answer2);
            setFooterData(prevState => ({
                ...prevState,
                "footerState": "incorrect",
                "bottom_text": `Wrong | ${bottomText_2}`,
                "button_text": "next"
            }))
        }
    }

    const goToNextPage = () => {
        setNextExState({
            "count": prevExState.count += 1,
            "score": footerCorrect === "correct" ? prevExState.score += 1 : prevExState.score,
            "change": true
        });
        setFooterCorrect("inactive");
        setFooterData(prevState => ({
            ...prevState,
            "footerState": "inactive",
            "bottom_text": bottomText_1,
            "button_text": "check"
        }))
    }

    return (
        <Footer 
            footerData={footerData}
            func_1={checkIfAnswerCorrect}
            func_2={goToNextPage}
        />
    )
}

import { ExerciseDataGen } from "../../QuestionCombos";

const MainEx = ({exNum, type}) => {
    const getRandomEx = () => {
        let exMain = ExerciseDataGen[exNum];
        let [num, data] = [exMain.num, exMain.getData(type)];
        return [num, data];
    }

    let [initNum, initData] = getRandomEx();

    const [isCorrect, setIsCorrect] = useState("");
    const [changeEx, setChangeEx] = useState({"count": 0, "score": 0, "change": false});
    const [exerciseData, setExerciseData] = useState({"ExNum": initNum, "data": initData});
    const [resetButtons, setResetButtons] = useState(false);
    const [currentExercise, setCurrentExercise] = useState('');
    const [scoreDisplay, setScoreDisplay] = useState(false);

    const switchEx = (num) => {
        switch (num) {
            case 1:
                setCurrentExercise(
                    <Exercise1_W
                            data={exerciseData.data}
                            reset={resetButtons}
                            setIsCorrect={setIsCorrect}/>
                )
                break;
            case 2:
                setCurrentExercise(
                    <Exercise2_W
                            data={exerciseData.data}
                            reset={resetButtons}
                            setIsCorrect={setIsCorrect}/>
                )
                break;
            case 4:
                setCurrentExercise(
                    <Exercise4_W
                        data={exerciseData.data}
                        reset={resetButtons}
                        setIsCorrect={setIsCorrect}/>
                )
                break;
            case 5:
                setCurrentExercise(
                    <Exercise5_W
                        data={exerciseData.data}
                        reset={resetButtons}
                        setIsCorrect={setIsCorrect}/>
                )
                break;
            case 6:
                setCurrentExercise(
                    <Exercise6_W 
                        data={exerciseData.data}
                        reset={resetButtons}
                        setIsCorrect={setIsCorrect}/>
                )
                break;
            case 7:
                setCurrentExercise(
                    <Exercise7_W 
                        data={exerciseData.data}
                        reset={resetButtons}
                        setIsCorrect={setIsCorrect}/>
                )
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        switchEx(exerciseData.ExNum);
    }, [exerciseData])

    useEffect(() => {
        if (changeEx.change) {
            if (changeEx.count % 5 === 0) {
                setScoreDisplay(true);
            } else {
                let [ExNum, ExData] = getRandomEx();
                setResetButtons(!resetButtons);
                setExerciseData({
                    "ExNum": ExNum, 
                    "data": ExData
                });
                setIsCorrect(""); // Disable footer button
                setChangeEx((prevState) => ({
                    ...prevState,
                    "change": false
                }));
            }
        }
    }, [changeEx]);

    const ExerciseBlock = (
        <div id='MainEx--root'>
            <Header logo={sample_logo2}></Header>

            {currentExercise}

            <div className="MainEx--footer">
                <Footer_Ex bottomText_1={exerciseData.data.exercise_hint}
                        bottomText_2={exerciseData.data.answer_description}
                        setNextExState={setChangeEx}
                        prevExState={changeEx}
                        selectedOption={isCorrect}
                />
            </div>
        </div>
    );

    const ScoreBlock = (
        <div id='MainEx--root'>
            <Header logo={sample_logo2}></Header>

            <ScorePage setScoreDisplay={setScoreDisplay} 
                    score={changeEx.score} 
                    maxScore={changeEx.count}
                    mainPath={`/${type}`}
                    />

            <div className="MainEx--footer">
                <Footer_Score 
                    bottomText={`End of ${changeEx.count}th Question!`}
                />
            </div>
        </div>
    )

    return !scoreDisplay ? ExerciseBlock : ScoreBlock;
};

export default MainEx;