import React, { useEffect, useState } from "react";

export default function GetQuestion(){

    const [question, setQuestion] = useState([])
    const [timer, setTimer] =  useState(0)
    const [hide, setHide] = useState(false)
    
    const questions = useEffect(() => {
        async function getquestions(){
            let response = await fetch('http://jservice.io/api/random')
            let data = await response.json()
            console.log(data)
            setQuestion(data)
        }
        getquestions()

    }, [timer])

        

        

    return(
        <div className="getquestion">
            <h2 className="play">Let's Play!</h2>
            <button className="questions" onClick={() => setTimer(prev=> prev + 1)} >Get Answer</button>
            <div className="catBox2">{question.map(quest => <p key ={quest.id} className="quest">Category: {quest.category.title}</p> )}</div>
            <h2 className="points" onClick={() => setTimer(prev=> prev + 1)} >{question.map(quest => <p key ={quest.id} className="point"> Points: {quest.value}</p> )}</h2>
            <h2 className="answers" onClick={() => setTimer(prev=> prev + 1)} >{question.map(quest => <p key ={quest.id} className="answer">Answer: {quest.question}</p> )}</h2>

            <button className="button" onClick={() => setHide(!hide)}>Click to Reveal Question</button>
            <div className="reveal"> {hide ? <p>Answer: {question[0].answer}</p>: null} </div>

            
        </div>
    )
    }
   //   
    //<div className="reveal" onClick={() => setTimer(prev=> prev + 1)} >{question.map(quest => <p key ={quest.id}>What is... { hide ? quest.answer : {display: 'none'}}</p> )} </div>