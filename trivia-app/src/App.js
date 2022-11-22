import './App.css';
import React, { useState } from "react"
import TriviaQuestion from './TriviaQuestion/TriviaQuestion';


function App() {
  return (
    <div className='outerContainer'>
      <h1 className='text pageTitle'>Rny8's Trivia</h1>
      <div className='centerDiv w-100 m-auto d-flex justify-content-center'>
        <TriviaQuestion/>
        </div>
    </div>
  );
}

export default App;
