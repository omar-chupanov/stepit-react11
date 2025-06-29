import { Component } from "react";

export default class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {
            count:0
        }
    }

    increment = ()=>{
        this.setState((prevState)=>{
            if (prevState.count < 10) {
                return {count: prevState.count + 1}
            }
            return null
        })
    }

    dicrement = () =>{
          this.setState((prevState)=>{
            if (prevState.count > 0) {
                return {count: prevState.count - 1}
            }
            return null
        })
    }

    render (){
        return(
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Увеличение</button>
                <button onClick={this.dicrement}>уменьшение</button>
            </div>
        )
    }
}