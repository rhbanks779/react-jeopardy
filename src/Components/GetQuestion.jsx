import React,{ useState } from "react";

export default function GetQuestion(props){

   
    const [hide, setHide] = useState(false)

    
    return(
        <div className="getquestion">
            
            <h2 className="play">Let's Play!</h2>
            <button className="questions" onClick={() => props.getAnswer()} >Get Answer</button>
            <div className="catBox2" className="quest">Category: {props.question.category.title}</div>{console.log(props.question)}
            <h2 className="point"> Points: {props.question.value}</h2>

            <h2 className="answers" className="answer">Answer: {props.question.question}</h2>

            <button className="button" onClick={() => setHide(!hide)}>Click to Reveal Question</button>
            <div className="reveal"> {hide ? <p>Answer: {props.question.answer}</p>: null} </div>

            
        </div>
    )
    }

   // <div className="catBox2" className="quest">Category: props.question.cat{egory.title}</div>
    //const [timer, setTimer] =  useState(0)
    // const questions = useEffect(() => {
    //     async function getquestions(){
    //         let response = await fetch('http://jservice.io/api/random')
    //         let data = await response.json()
    //         console.log(data)
    //         setQuestion(data)
    //     }
    //     getquestions()

    // }, [timer])
    // <div className="catBox2">{question.map(quest => <p key ={quest.id} className="quest">Category: {quest.category.title}</p> )}</div>
    //         <h2 className="points" onClick={() => setTimer(prev=> prev + 1)} >{question.map(quest => <p key ={quest.id} className="point"> Points: {quest.value}</p> )}</h2>
    //         <h2 className="answers" onClick={() => setTimer(prev=> prev + 1)} >{question.map(quest => <p key ={quest.id} className="answer">Answer: {quest.question}</p> )}</h2>
    // <p>{props.question.value}</p>