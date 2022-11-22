import React, { useState, useEffect } from 'react';
import AnswerButton from '../answerButton/AnswerButton';

import "./TriviaQuestion.css";

export default function TriviaQuestion(props) {

    function getRandomQuestion(){
        fetch(`https://the-trivia-api.com/api/questions?limit=1&difficulty=${difficulty}`, {
            method: "GET"

        }).then((res) => {
            res.json().then((data) => {
                setQuestion(data[0].question)
                let allAnswers = [{value: data[0].correctAnswer, correct: true}]
                for (let i = 0; i < data[0].incorrectAnswers.length; i++) {
                    allAnswers.push({value: data[0].incorrectAnswers[i], correct: false})
                }
                allAnswers = allAnswers.sort((a, b) => 0.5 - Math.random());
                setAnswers(allAnswers)
                setLoading(false)
                console.log(difficulty)
            })
        })}

    useEffect(() => {
        getRandomQuestion()
    }, []);



    const [question, setQuestion] = useState("")

    const [answers, setAnswers] = useState(null)

    const [roundOver, setRoundOver] = useState(false)

    const [score, setScore] = useState(0)

    const [highScore, setHighScore] = useState(0)

    const [loading, setLoading] = useState(true)

    const [difficulty, setDifficulty] = useState("easy")


    function handleDiffClick(e) {
        setDifficulty(e.target.id)
    }

    return (
            <>
            {loading     
                ?  <div className='innerDiv d-flex justify-content-center m-auto w-100'>
                        <div className='container centerDiv d-flex justify-content-center'>
                            <div className='col'>
                                <h2 className="score">Score: {score}</h2>
                                <h2 className='highScore'>High Score: {highScore}</h2><div className="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div>  
                            </div>
                        </div>
                    </div>
            
                : <div className='innerDiv d-flex justify-content-center m-auto w-100'>
                <div className='container centerDiv d-flex justify-content-center'>
                <div className='col'>
                <h2 className="score">Score: {score}</h2>
                <h2 className='highScore'>High Score: {highScore}</h2>
                <div className="dropdown">
                <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {difficulty}
                </a>
                <ul className="dropdown-menu dropdown-menu-dark">
                    <li><a className="dropdown-item" href="#" onClick={handleDiffClick} id="easy">Easy</a></li>
                    <li><a className="dropdown-item" href="#" onClick={handleDiffClick} id="medium">Medium</a></li>
                    <li><a className="dropdown-item" href="#" onClick={handleDiffClick} id="hard">Hard</a></li>
                </ul>
                </div>
                <div className='outerCountdownLine d-flex justify-content-left text-left w-100'>
                    <div className={roundOver ? `countdownLine countdownLineStart` : `countdownLine`}></div>
                </div>
                <h2 className='question p-3'>{question}</h2>
                <div className='row'>
                    {
                        answers && <>
                            <div className='col text-center'>
                                <div className='row buttonRows'>
                                    <AnswerButton value={answers[0].value} correct={answers[0].correct} roundOver={roundOver} setRoundOver={setRoundOver} getRandomQuestion={getRandomQuestion} score={score} setScore={setScore} highScore={highScore} setHighScore={setHighScore}/>
                                </div>
                                <div className='row buttonRows'>
                                    <AnswerButton value={answers[1].value} correct={answers[1].correct} roundOver={roundOver} setRoundOver={setRoundOver} getRandomQuestion={getRandomQuestion} score={score} setScore={setScore} highScore={highScore} setHighScore={setHighScore}/>
                                </div>
                            </div>
                            <div className='col text-center'>
                                <div className='row buttonRows'>
                                    <AnswerButton value={answers[2].value} correct={answers[2].correct} roundOver={roundOver} setRoundOver={setRoundOver} getRandomQuestion={getRandomQuestion} score={score} setScore={setScore} highScore={highScore} setHighScore={setHighScore}/>
                                </div>
                                <div className='row buttonRows'>
                                    <AnswerButton value={answers[3].value} correct={answers[3].correct} roundOver={roundOver} setRoundOver={setRoundOver} getRandomQuestion={getRandomQuestion} score={score} setScore={setScore} highScore={highScore} setHighScore={setHighScore}/>
                                </div>
                            </div>
                        </>
                    }
            </div>
            </div>
        </div>
    </div>
        
        }
        </>
    )
};
