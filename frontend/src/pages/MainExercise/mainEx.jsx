import React from "react";
import './mainEx.styled.css';
import airbnbLogo from '../../assets/airbnb.svg';

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import Exercise_1 from "../../exercises/ex1/Exercise1";
import Exercise_2 from "../../exercises/ex2/Exercise_2";

const PageText = {
    "title": "No Question given",
    "footer_text": "Bottom Footer text",
    "footer_button_text": "next"
}

const mango = "https://static.vecteezy.com/system/resources/previews/011/502/022/original/an-illustration-of-cute-mango-fruit-hand-drawn-cartoon-free-png.png";

const Exercise1_W = (props) => {
    const title = props.title || PageText.title;
    const char = props.char;
    const correct_op = props.correct_op;
    const other_op1 = props.other_op_1;
    const other_op2 = props.other_op_2;
    return (
        <div className="MainEx--container">
            <div className="MainEx--tile">
                {title}
            </div>
            <Exercise_1 char={char} correct_op={correct_op} other_op_1={other_op1} other_op_2={other_op2}></Exercise_1>
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

const MainEx = (props) => {
    return (
        <div id='MainEx--root'>
            <Header logo={airbnbLogo}></Header>

            {/* <Exercise1_W title="" char="A" correct_op="A" other_op_1="B" other_op_2="C"></Exercise1_W> */}
            <Exercise2_W title="" image="" correct_op="M" other_op_1="A" other_op_2="B"></Exercise2_W>
            
            <Footer text={PageText.footer_text} button_text={PageText.footer_button_text}></Footer>
        </div>
    )
}

export default MainEx;