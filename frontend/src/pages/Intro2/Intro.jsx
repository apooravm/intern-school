import React from 'react';
import './Intro.styled.css';
import airbnbLogo from '../../assets/airbnb.svg';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CharacterDisplay from '../../components/CharacterDisplay';

const vowels = [['अ', 'a'],
['आ', 'aa'],
['इ', 'i'],
['ई', 'ii'],
['उ', 'u'],
['अ', 'uu'],
['ऋ', 'tri'],
['ए', 'e'],
['ऐ', 'ai'],
['ओ', 'o'],
['औ', 'au'],
['अं', 'an']];

const PageText = {
    "title": "Vowels...",
    "footer_text": "Bottom Footer text",
    "footer_button_text": "next"
}

const PageColours = {
    "background": 'rgb(255, 255, 255)',
    "char_display": 'rgb(255, 255, 255)',

}

function Intro1() {
  return (
    <div id='intro--root'>
        <Header logo={airbnbLogo}></Header>
        <div className="intro--tile">
            {PageText.title}
        </div>
        <div className="intro--container">
            {vowels.map((char, index) => (
                    <CharacterDisplay key={index} eng_trans={char[1]} char={char[0]}/>
                ))}
        </div>
      <Footer text={PageText.footer_text} button_text={PageText.footer_button_text}></Footer>
    </div>
  )
}

export default Intro1
