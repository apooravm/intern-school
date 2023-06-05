import React from "react";
import './CharExercise.styled.css';

import Footer from '../../components/Footer/Footer';
import BodyTitle from '../../components/BodyTitle/BodyTitle';
import SingleCharacter from "../../components/SingleCharacter/SingleCharacter";

import Exercise1 from '../../exercises/ex1/Exercise1';

const CharExercise = () => {
    return (
        <div id="root--ex">
            <NavBar/>
            <div className="body--ex">
                <Exercise1 />
            </div>
            <Footer btn_text="next" bottom_text="middle text" left_text="left text"/>
        </div>
        // <SingleCharacter char="B" trans="bee"/>
    )
}

export default CharExercise;