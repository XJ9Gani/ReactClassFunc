import React, { useState } from "react";

export default function (){
    let [count , setCount] = useState(0);

    function increment(){
        setCount(prev => prev + 1);
    }
    function decrement(){
        setCount(prev => prev - 1);
    }

    return(
        <>
         <div style={{display:"flex" , justifyContent:'space-around' , width:"200px" , height:"50px" , margin: "auto"}}>
            <button onClick={increment} >+</button>
            <h1>{count}</h1>
            <button  onClick={decrement}>-</button>
            </div>
        </>
    )
}
