import React from "react";
import { styled } from "styled-components";
import { useState, useEffect } from "react";
import "./Exercise_7.styled.css";
// import Canvas from "../../components/Canvas";
import Aa from '../../components/alphabets/Aa'
import Au from '../../components/alphabets/Au'
import E from '../../components/alphabets/E'

import Ee from '../../components/alphabets/Ee'
import Ayu from '../../components/alphabets/Ayu'

const Exercise_7 = ({ character, func, reset }) => {
  const [slide, setSlide] = useState(0);
  return (
    <>
      <div className="Ex7--container">
        {/* <Canvas char={character}/> */}
       {/* <E slide={slide}/> */}
       {/* <Ayu slide={slide}/> */}

       <Aa slide={slide}/>

      </div>
    </>
  );
};

export default Exercise_7;
