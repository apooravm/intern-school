import { useState } from 'react';
import './Intro.styled.css';

import CharacterDisplay from '../../components/CharacterDisplay/CharacterDisplay';
import NavBar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import BodyTitle from '../../components/BodyTitle/BodyTitle';

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


function Intro1() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="root">
        <NavBar />
      <div id='intro--bodytitle'>
        <BodyTitle title="Longer sentence, hope you keep up try and catch..."/>
      </div>
      <div className="container">
        <div className="vowels--all">
          {vowels.map((char, index) => (
                  <CharacterDisplay key={index} eng_trans={char[1]} char={char[0]}/>
              ))}
          </div>
        </div>
        <div>
          <Footer btn_text="next" bottom_text="middle text" left_text="left text"/>
        </div>
      </div>
    </>
  )
}

export default Intro1
