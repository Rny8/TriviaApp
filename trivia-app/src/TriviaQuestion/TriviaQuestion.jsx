import React, { useState, useEffect } from 'react';
import AnswerButton from '../answerButton/AnswerButton';

import "./TriviaQuestion.css";

export default function TriviaQuestion() {

    function getRandomQuestion(){
        fetch("https://the-trivia-api.com/api/questions?limit=1", {
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
            })
        })}

    useEffect(() => {
        getRandomQuestion()
    }, []);



    const [question, setQuestion] = useState("")

    const [answers, setAnswers] = useState(null)

    const [roundOver, setRoundOver] = useState(false)


    return (
        <div className='outerDiv'>
            <div className='container centerDiv d-flex justify-content-center'>
                <div className='col'>
                    <div className='outerCountdownLine d-flex justify-content-left text-left w-100'>
                        <div className={roundOver ? `countdownLine countdownLineStart` : `countdownLine`}></div>
                    </div>
                    <h2 className='question p-3'>{question}</h2>
                    <div className='row'>
                        {
                            answers && <>
                                <div className='col text-center'>
                                    <div className='row buttonRows'>
                                        <AnswerButton value={answers[0].value} correct={answers[0].correct} roundOver={roundOver} setRoundOver={setRoundOver} getRandomQuestion={getRandomQuestion}/>
                                    </div>
                                    <div className='row buttonRows'>
                                        <AnswerButton value={answers[1].value} correct={answers[1].correct} roundOver={roundOver} setRoundOver={setRoundOver} getRandomQuestion={getRandomQuestion}/>
                                    </div>
                                </div>
                                <div className='col text-center'>
                                    <div className='row buttonRows'>
                                        <AnswerButton value={answers[2].value} correct={answers[2].correct} roundOver={roundOver} setRoundOver={setRoundOver} getRandomQuestion={getRandomQuestion}/>
                                    </div>
                                    <div className='row buttonRows'>
                                        <AnswerButton value={answers[3].value} correct={answers[3].correct} roundOver={roundOver} setRoundOver={setRoundOver} getRandomQuestion={getRandomQuestion}/>
                                    </div>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
};
