import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

// import Intro1 from './pages/Intro/Intro.jsx';
// import CharExercise from './pages/SingleCharExercise/charExercise';
import MiscTesting from './pages/Testing/MiscTest';

import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Intro1 /> */}
      {/* <CharExercise /> */}
      {/* <MiscTesting /> */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
