import React from "react";
import { styled } from "styled-components";
import { useState, useEffect } from "react";
import './Exercise_7.styled.css';

const Exercise_7 = ({character, func, reset}) => {
    return (
        <div className="Ex7--container">
            <h1>
                Current Character: {character}
            </h1>
        </div>
    )
}

export default Exercise_7;