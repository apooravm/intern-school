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
import Exercise_3 from '../../exercises/ex3/Exercise_3';
import Exercise_4 from '../../exercises/ex4/Exercise_4';
import Exercise_5 from '../../exercises/ex5/Exercise_5';
import Exercise_6 from '../../exercises/ex6/Exercise_6';

import MainEx from '../MainExercise/mainEx';

const vowels = [['अ', 'a'],
['आ', 'aa'],
['इ', 'i'],
['ई', 'ii'],
['उ', 'u'],
['ऊ', 'uu'],
['ऋ', 'tri'],
['ए', 'e'],
['ऐ', 'ai'],
['ओ', 'o'],
['औ', 'au'],
['अं', 'an']];

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
        {/* <Exercise_3 correctSequence={vowels.slice(0, 4)}></Exercise_3> */}
        {/* <Exercise_4 /> */}
        {/* <Exercise_5 /> */}
        {/* <Exercise_6 /> */}
    </>
  );
};

export default MiscTesting;
