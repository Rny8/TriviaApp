import './App.css';
import React, { useState } from "react"
import TriviaQuestion from './TriviaQuestion/TriviaQuestion';


function App() {
  const [score, setScore] = useState(0)
  return (
    <div className='outerContainer'>
      <h1 className='text pageTitle'>Rny8's Trivia</h1>
      <h2 className="score">Score: {score}</h2>
      <div className='centerDiv'>
      </div>
      <TriviaQuestion score={score} setScore={setScore}/>
    </div>
  );
}

export default App;
