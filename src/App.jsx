import React from "react";
import CounterClass from "./components/CounterClass";
import CounterFunction from "./components/CounterFunction";
import TimerFunction from "./components/TimerFunction";
import TimerClass from "./components/TimerClass"; 
function App(){
    return(
        <>
        <h1>Counter</h1>
        <div style={{display:"flex"}}>
            <h1>Классовый подход</h1>
            <CounterClass/>
        </div>
        <div style={{display:"flex"}}>
            <h1>Функциональный подход</h1>
            <CounterFunction/>
        </div>
        <hr />
        <h1>Timer</h1>
        <div style={{display:"flex"}}>
            <h1>Классовый подход</h1>
            <TimerClass/>
        </div>
        <div style={{display:"flex"}}>
            <h1>Функциональный подход</h1>
            <TimerFunction/>
        </div>
        </>
    )
}

export default App