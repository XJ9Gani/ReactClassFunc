import React from "react";
class CounterClass extends React.Component{
   constructor(props){
    super(props);
    this.state = {
        count : 0
    }
   }
   increment = () => {
    this.setState(prev => ({
        count: prev.count + 1
    }));
   }
   decrement = () => {
    this.setState(prev => ({
        count: prev.count - 1
    }));
   }

    render(){
        return(
            <>
            <div style={{display:"flex" , justifyContent:'space-around' , width:"200px" , height:"50px" , margin: "auto"}}>
            <button onClick={this.increment} >+</button>
            <h1>{this.state.count}</h1>
            <button  onClick={this.decrement}>-</button>
            </div>
            </>
        )
        
     }

}

export default CounterClass;