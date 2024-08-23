import { useEffect, useState } from "react";
import React from "react";

export default function(){
    let [time , setTime] = useState(0);

    useEffect(()=>{
    let myInterval = setInterval(()=>{
            setTime(prev => prev + 1);
        } , 1000)

    return ()=>clearInterval(myInterval)
    }, [])
    
    

    return(
        <h1 style={{marginLeft:'100px'}}>TIME:{time}</h1>
    )
}