import React, {useState} from "react";

export default function Score(){
    const [count, setCount] = useState(0)

    function add(){
        setCount(preValue=> preValue + 100 )
    }

    function subtract(){
        setCount(preValue=> preValue - 100 )
    }

    function reset(){
        setCount(preValue=> preValue = 0)
    }

    return(
        <div className="score">
            <h2 className="title">Score:  {count}</h2>
            <button className="plus" onClick={add}>Increase</button>
            <button className="minus" onClick={subtract}>Decrease</button>
            <button className="reset" onClick={reset}>Reset</button>
        </div>
    )
}