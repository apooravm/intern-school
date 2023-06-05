import React, { useState } from "react";
import './mainEx.styled.css';
import airbnbLogo from '../../assets/airbnb.svg';

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import Exercise_1 from "../../exercises/ex1/Exercise1";
import Exercise_2 from "../../exercises/ex2/Exercise_2";
import Exercise_4 from "../../exercises/ex4/Exercise_4";
import Exercise_5 from "../../exercises/ex5/Exercise_5";
import Exercise_6 from '../../exercises/ex6/Exercise_6';

const PageText = {
    "title": "No Question given",
    "footer_text": "Bottom Footer text",
    "footer_button_text": "next"
}

const mango = "https://static.vecteezy.com/system/resources/previews/011/502/022/original/an-illustration-of-cute-mango-fruit-hand-drawn-cartoon-free-png.png";

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

const Exercise1_W = ({question, characterDisplayed, correct_option, other_option1, other_option2, setIsCorrect}) => {
    const title = question || PageText.title;
    const char = characterDisplayed;
    
    let optionsArray = [other_option1, correct_option, other_option2];
    function foo(chosenOption) {
        if (chosenOption === correct_option) {
            console.log("correct!");
            setIsCorrect(true);
        } else {
            console.log("wrong");
            setIsCorrect(false);
        }
    }
    return (
        <div className="MainEx--container">
            <div className="MainEx--tile">
                {title}
            </div>
            <Exercise_1 char={char}
                        optionsArray={optionsArray}
                        func={foo}
                        ></Exercise_1>
        </div>
    )
}

const Exercise2_W = (props) => {
    const title = props.title || PageText.title;
    const image = props.image || mango;
    const correct_op = props.correct_op;
    const other_op1 = props.other_op_1;
    const other_op2 = props.other_op_2;
    return (
        <div className="MainEx--container">
            <div className="MainEx--tile">
                {title}
            </div>
            <Exercise_2 image={image} correct_op={correct_op} other_op_1={other_op1} other_op_2={other_op2}></Exercise_2>
        </div>
    )
}

const Exercise4_W = (props) => {
    const title = props.title || PageText.title;
    return (
        <div className="MainEx--container">
            <div className="MainEx--tile">
                {title}
            </div>
            <Exercise_4 ></Exercise_4>
        </div>
    )
};

const Exercise5_W = (props) => {
    const title = props.title || PageText.title;
    return (
        <div className="MainEx--container">
            <div className="MainEx--tile">
                {title}
            </div>
            <Exercise_5 ></Exercise_5>
        </div>
    )
};

const Exercise6_W = (props) => {
    const title = props.title || PageText.title;
    return (
        <div className="MainEx--container">
            <div className="MainEx--tile">
                {title}
            </div>
            <Exercise_6 ></Exercise_6>
        </div>
    )
}

const MainEx = ({data}) => {
    const [isCorrect, setIsCorrect] = useState(false);
    return (
        <div id='MainEx--root'>
            <Header logo={airbnbLogo}></Header>

            <Exercise1_W question="" characterDisplayed="A" correct_option="A" other_option1="B" other_option2="C" setIsCorrect={setIsCorrect}></Exercise1_W>
            <Exercise2_W title="" image="" correct_op="M" other_op_1="A" other_op_2="B"></Exercise2_W>
            <Exercise4_W />
            <Exercise5_W />
            <Exercise6_W/>
            <div className="MainEx--footer">
                <Footer text={PageText.footer_text} button_text={PageText.footer_button_text} checkAnswer={isCorrect}></Footer>
            </div>
        </div>
    )
}

export default MainEx;