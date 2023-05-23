import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Intro1 from './pages/Intro/Intro';
import CharExercise from './pages/SingleCharExercise/charExercise';
import MiscTesting from './pages/Testing/MiscTest';

import CharacterDisplay from './components/CharacterDisplay/CharacterDisplay';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Intro1 /> */}
    {/* <CharExercise /> */}
    <MiscTesting />
  </React.StrictMode>,
)
