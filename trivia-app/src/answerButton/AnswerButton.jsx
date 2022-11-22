import TriviaQuestion from "../TriviaQuestion/TriviaQuestion";
import "../TriviaQuestion/TriviaQuestion.css"
import React, { useState } from 'react'
import { useEffect } from "react";

export default function AnswerButton(props) {

    const [color, setColor] = useState(null)

    const [disabled, setDisabled] = useState(false)

    const delay = ms => new Promise(res => setTimeout(res, ms));

    useEffect(() => {
        setDisabled(true)
        if (props.correct && props.roundOver){
            setColor(correctColor)
            newRound()
        }
        if(!props.roundOver){
            setColor(null)
            setDisabled(false)
        }
    }, [props.roundOver])

    useEffect(() => {
        setDisabled(false)
    }, [])

    const correctColor = "#097631";
    const incorrectColor = "#c42e21";

    async function newRound(){
        await delay(5000);
        props.getRandomQuestion()
        setDisabled(false)
        props.setRoundOver(false)
        setColor(null)
    }


    function handleClick(){
        console.log(props.roundOver)
        if (!props.roundOver) {
            if (props.correct === true) {
                setColor(correctColor)
            }
            else{
                setColor(incorrectColor)
            }
            props.setRoundOver(true);
        }
    }

    if (!props.correct) {
        return (
            <>
            {props.roundOver
                ? <button className='questionButtonDisabled' style={color && {backgroundColor: color}} disabled={disabled}>{props.value}</button>
                : <button className='questionButton' onClick={handleClick} style={color && {backgroundColor: color}} disabled={disabled}>{props.value}</button>
            }
            </>
        );
    }
    else {
        return (
            <button className={props.roundOver ? `questionButton pe-none` : `questionButton`} onClick={handleClick} style={color && {backgroundColor: correctColor}} disabled={disabled}>{props.value}</button>
        );
    }

}
