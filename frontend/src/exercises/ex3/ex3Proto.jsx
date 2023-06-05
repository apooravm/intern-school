import React from "react";
import './Exercise_3.styled.css';
import { styled } from "styled-components";
import { useState } from "react";
import { useEffect } from "react";

const Styled_Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    @media (max-width: 600px) {
        flex-direction: row;
        justify-content: space-evenly;
    }
`;

const StyledButtonMatch = styled.button`
  padding-inline: 30px;
  padding-block: 30px;

  min-width: 130px;
  min-height: 110px;

  font-size: 200%;
  font-family: monospace;

  border: 2px solid rgb(137, 137, 137);
  border-radius: 1px;

  box-shadow: 3px 5px grey;

  transition: all 0.2s;

  &:active {
    border: 2px solid rgb(137, 137, 137);
    box-shadow: 0px 0px;
    transform: translateY(5px);
  }
  /* ${(props) =>
    props.selected === props.button_id &&
    `
        pointer-events: none;
    `} */
`;

const StyledCharButtonMatch = styled(StyledButtonMatch)`
  background-color: rgb(255, 255, 255);

  ${(props) =>
    props.curr_active === props.button_id &&
    `
    background-color: rgb(255, 219, 219);
    box-shadow: 0px 0px;
    transform: translateY(5px);
  `}

  &:hover {
    background-color: rgb(255, 219, 219);
  }
`;

const StyledOptionButtonMatch = styled(StyledButtonMatch)`
  background-color: rgb(255, 255, 255);

  ${(props) =>
    props.curr_active === props.button_id &&
    `
    background-color: rgba(229, 255, 194, 0.637);
    box-shadow: 0px 0px;
    transform: translateY(5px);
  `}

  &:hover {
    background-color: rgba(229, 255, 194, 0.637);
  }
`;

const TextButton_Match = ({option, button_type, button_id, currActive, setActive}) => {
    const toggleActive = () => {
        if (button_type === "char") {
            setActive({...currActive, 
                "char": button_id, 
                "clickCount": currActive.prevClick !== button_type? currActive.clickCount + 1: currActive.clickCount,
                "charVal": option,
                "prevClick": button_type
            })
        } else {
            setActive({...currActive, 
                "option": button_id, 
                "clickCount": currActive.clickCount + 1,
                "optionVal": option
            })
        }
    }
    if (button_type === "char") {
        return (
            <StyledCharButtonMatch key={option} curr_active={currActive.char} button_id={button_id} button_type={button_type} onClick={toggleActive}>{option}</StyledCharButtonMatch>
    )
    } else {
        return (
            <StyledOptionButtonMatch key={option} curr_active={currActive.option} button_id={button_id} button_type={button_type} onClick={toggleActive}>{option}</StyledOptionButtonMatch>
        )
    } 
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  

function foo() {
    console.log("foo!");
}

const Exercise_3__D = ({correctSequence}) => {
    const [shuffled, setShuffled] = useState(false);
    const [currActive, setCurrActive] = useState({
        "char": undefined, 
        "option": undefined, 
        "clickCount": 0,
        "charVal": undefined,
        "optionVal": undefined,
        "prevClick": undefined
    });

    let characters = [];
    let options = [];
    for (const [char, option] of correctSequence) {
        characters.push(char);
        options.push(option);
    };
    
    if (!shuffled) {
        options = shuffleArray(options);
        characters = shuffleArray(characters);
        setShuffled(true);
    }

    useEffect(() => {
        if (currActive.clickCount % 2 === 0 && currActive.clickCount !== 0) {
            for (const option of correctSequence) {
                console.log(currActive, option)
                if (currActive.charVal === option[0] && currActive.optionVal === option[1]) {
                    return;
                }
            }
            return;
        }
    }, [currActive])

    return (
        <Styled_Container id="Ex3--main">
            <div className="Ex3--container">
                {characters.map((char, ind) => (
                    <TextButton_Match key={ind} setActive={setCurrActive} currActive={currActive} button_id={`char${ind}`} button_type="char" option={char}></TextButton_Match>
                ))
                }
            </div>
            <div className="Ex3--container">
                {options.map((op, ind) => (
                    <TextButton_Match key={ind} setActive={setCurrActive} currActive={currActive} button_id={`option${ind}`} button_type="option" option={op}/>
                ))
                }
            </div>
        </Styled_Container>
    )
}

export default Exercise_3__D;