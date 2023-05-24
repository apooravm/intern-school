import React from 'react';
// import './MiscTest.styled.css';

// import Footer from '../../components/Footer/Footer';

import airbnbLogo from "../../assets/airbnb.svg";

import GlobalStyles from '../../components/styles/GlobalStyles.styled';

import CharacterDisplay from '../../components/CharacterDisplay';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import OptionsButton from '../../components/OptionsButton';
import ImageDisplay from '../../components/ImageDisplay';
import ImageButtonDisplay from '../../components/ImageButtonDisplay';

import Intro1 from '../Intro2/Intro.jsx';

import Exercise_1 from '../../exercises/ex1/Exercise1';
import Exercise_2 from '../../exercises/ex2/Exercise_2';

import MainEx from '../MainExercise/mainEx';

function printFoo() {
  console.log("Foo!");
}

const MiscTesting = () => {
  return (
    <>
      <GlobalStyles />
        {/* <CharacterDisplay char="A" eng_trans="bruh"></CharacterDisplay> */}
        {/* <Button title="Click Me!" func={printFoo}></Button> */}
        {/* <Footer text="testing one one one" button_text="hi :D"></Footer> */}
        {/* <Header logo={airbnbLogo}></Header> */}
        {/* <OptionsButton title="Option A" func={printFoo}></OptionsButton> */}
        {/* <ImageDisplay image={airbnbLogo} text="image desc"></ImageDisplay> */}
        {/* <Intro1></Intro1> */}
        {/* <Exercise_1 char="A"></Exercise_1> */}
        <MainEx></MainEx>
        {/* <ImageButtonDisplay image={airbnbLogo} text="img"></ImageButtonDisplay> */}
    </>
  );
};

export default MiscTesting;
