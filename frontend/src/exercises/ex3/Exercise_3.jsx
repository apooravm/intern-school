import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const MatchButton = ({value}) => {
    return (
        <button type="button">{value}</button>
    )
}

const Exercise_3 = ({correctSequence}) => {
    let characters = [];
    let options = [];
    for (const [char, option] of correctSequence) {
        characters.push(char);
        options.push(option);
    };
    return (
        <div className="Ex3--container">
            {characters.map((option, ind) => {
                <MatchButton value={options} key={ind}></MatchButton>
            })}
        </div>
    )
}

export default Exercise_3;