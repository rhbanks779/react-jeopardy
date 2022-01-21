import React, {useState} from "react";

export default function Score(props){
    const [count, setCount] = useState(0)

    function add(){
      setCount(preValue=> preValue +  props.question.value )
  }
  
  function subtract(){
      setCount(preValue=> preValue - props.question.value )
  }
  
  function reset(){
      setCount(preValue=> preValue = 0)
  } 
      

    return(
        <div className="score">
            <h2 className="title">Score: {count}</h2>
            <button className="plus" onClick={add}>Increase</button>
            <button className="minus" onClick={subtract}>Decrease</button>
            <button className="reset" onClick={reset}>Reset</button>
        </div>
    )
}

//{props.question.value}