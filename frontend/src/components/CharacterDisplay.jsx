import React from "react";
import styled from 'styled-components';

const StyledCharacterDisplay = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    
    font-size: 3.2rem;
    border: 0.1px solid rgba(113, 113, 113, 0.411);
    transition: all 0.2s;

    border-radius: 10px;

    box-shadow: 4px 2px lightblue;
    text-align: center;

    width: 100px;
    min-width: 100px;

    padding: 20px;

    &:hover {
        color: rgb(0, 0, 0);
        border: 0.1px solid rgb(148, 148, 148);
        cursor: default;
        
        #char--trans {
            color: rgb(71, 71, 71);
            font-size: 1.8rem;
        }
    }

    @media (max-width: 600px) {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;

        padding: 10px;

        font-size: 2rem;
        border: 3px solid rgba(113, 113, 113, 0.411);
        transition: all 0.05s;
    
        border-radius: 5px;
    
        box-shadow: 0px 0px lightblue;
        text-align: center;

        width: 90px;
        min-width: 60px;

        -webkit-user-select: none; /* Safari */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none; /* Standard syntax */

        &:hover {
            color: rgb(0, 0, 0);
            border: 3px solid rgb(148, 148, 148);
            cursor: default;
        }
    }
`;

const StyledTextChar = styled.div`
    color: rgba(0, 0, 0, 0.723);
`;

const StyledTransChar = styled.div`
    transition: all 0.2s;

    color: rgba(0, 0, 0, 0.157);
    font-size: 1.8rem;
`;

export default function CharacterDisplay(props) {
    const playSound = async () => {
      console.log(`${props.char} sound`);
    };
  
    return (
      <StyledCharacterDisplay onMouseEnter={playSound}>
        <StyledTextChar>{props.char}</StyledTextChar>
        <StyledTransChar id="char--trans">{props.eng_trans}</StyledTransChar>
      </StyledCharacterDisplay>
    );
  }
  