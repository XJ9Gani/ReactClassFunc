import React from "react";
class TimerClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count : 0
        }
    }
    componentDidMount(){
      this.myInterval = setInterval(()=>{
        this.setState(prev => ({
            count: prev.count + 1
        }));
       }, 1000)
     }
     componentWillUnmount() {
        clearInterval(this.myInterval); 
      }
    render(){
      return( <h1 style={{marginLeft:'100px'}}>Time : {this.state.count}</h1>)    }
}

export default TimerClass;