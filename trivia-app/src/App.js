import './App.css';
import React from "react"
import TriviaQuestion from './TriviaQuestion/TriviaQuestion';

function App() {
  return (
    <div className='outerContainer'>
      <h1 className='text pageTitle'>Rny's Trivia</h1>
      <div className='centerDiv'>
      </div>
      <TriviaQuestion/>
    </div>
  );
}

export default App;
