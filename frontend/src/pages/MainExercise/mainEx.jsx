import React, { useEffect, useState, useSyncExternalStore } from "react";
import './mainEx.styled.css';
import airbnbLogo from '../../assets/airbnb.svg';
import GlobalStyles from "../../components/GlobalStyles.styled";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import Exercise_1 from "../../exercises/ex1/Exercise1";
import Exercise_2 from "../../exercises/ex2/Exercise_2";
import Exercise_4 from "../../exercises/ex4/Exercise_4";
import Exercise_5 from "../../exercises/ex5/Exercise_5";
import Exercise_6 from '../../exercises/ex6/Exercise_6';

import sample_logo2 from '../../assets/sample_logo2.png';
import sampleSound from '../../assets/sampleSound.mp3';

const PageText = {
    "title": "No Question given",
    "footer_text": "Bottom Footer text",
    "footer_button_text": "next"
}

const mango = "https://static.vecteezy.com/system/resources/previews/011/502/022/original/an-illustration-of-cute-mango-fruit-hand-drawn-cartoon-free-png.png";


const Exercise1_W = ({data, setIsCorrect, reset}) => {
    const characterDisplayed= data.displayCharacter; 
    const correct_option= data.correct_option; 
    const options_array= data.optionsArray; 
    
    const title = false || PageText.title;
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

    const title = false || PageText.title;
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

    const title = "Order the given according to the sound!" || PageText.title;

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

    const title = false || PageText.title;
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

    const title = false || PageText.title;

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

import { getRandomEx } from "../../QuestionCombos";
let [initNum, initData] = getRandomEx();

const MainEx = () => {
    const [isCorrect, setIsCorrect] = useState("");
    const [changeEx, setChangeEx] = useState({"count": 0, "score": 0, "change": false});
    const [exerciseData, setExerciseData] = useState({"ExNum": initNum, "data": initData});
    const [resetButtons, setResetButtons] = useState(false);
    const [currentExercise, setCurrentExercise] = useState(<Exercise1_W
                                                                data={exerciseData.data}
                                                                setIsCorrect={setIsCorrect}/>);

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
            default:
                break;
        }
    }

    useEffect(() => {
        switchEx(exerciseData.ExNum);
    }, [exerciseData])

    useEffect(() => {
        if (changeEx.change) {
            if (changeEx.count >= 5) {
                alert(`Score is ${changeEx.score}/5`);
            } else {
                let [ExNum, ExData] = getRandomEx();
                console.log(ExData)
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

    return (
        <div id='MainEx--root'>
            <Header logo={sample_logo2}></Header>

            {currentExercise}

            <div className="MainEx--footer">
                <Footer bottomText={PageText.footer_text} 
                        button_text={PageText.footer_button_text} 
                        checkAnswer={isCorrect} 
                        answer_description={exerciseData.data.answer_description} 
                        nextExState={setChangeEx}
                        prevExState={changeEx}>
                </Footer>
            </div>
        </div>
    )
};

export default MainEx;