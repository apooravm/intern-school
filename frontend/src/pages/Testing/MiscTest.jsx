import React from 'react';
import './MiscTest.css';

// import Footer from '../../components/Footer/Footer';

import airbnbLogo from "../../assets/airbnb.svg";

import GlobalStyles from '../../components/styles/GlobalStyles.styled';

import CharacterDisplay from '../../components/CharacterDisplay';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import OptionsButton from '../../components/OptionsButton';
import ImageDisplay from '../../components/ImageDisplay';

import Intro1 from '../Intro2/Intro';

import Exercise_1 from '../../exercises/ex1/Exercise1';

function printFoo() {
  console.log("Foo!");
}

const MiscTesting = () => {
  return (
    // <div className="app">
    //   <header>Header</header>
    //   <main>
    //     <div className="content">Content 1</div>
    //     <div className="content">Content 2</div>
    //     <div className="content">Content 3</div>
    //   </main>
    //   <Footer left_text="left" bottom_text="bottom" btn_text="Click me"/>
    // </div>
    <>
      <GlobalStyles />
        {/* <CharacterDisplay char="A" eng_trans="bruh"></CharacterDisplay> */}
        {/* <Button title="Click Me!" func={printFoo}></Button> */}
        {/* <Footer text="testing one one one" button_text="hi :D"></Footer> */}
        {/* <Header logo={airbnbLogo}></Header> */}
        {/* <OptionsButton title="Option A" func={printFoo}></OptionsButton> */}
        {/* <ImageDisplay image={airbnbLogo} text="image desc"></ImageDisplay> */}
        {/* <Intro1></Intro1> */}
        <Exercise_1 char="A"></Exercise_1>
    </>
  );
};

export default MiscTesting;
