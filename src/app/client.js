/**
 * Created by Hasani on 3/16/2017.
 */
import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component{
    constructor(){
        super();
        this.name = "Hasani";
    }
    getVal(){
        return "Bridge Hasani";
    }
    render(){
        const name = "Abdul Kadir Hasani";
        return(
            <div>
                <h1>It's Working</h1>
                <h1>My Name is {name}</h1>
                <h1>Example Function {(function(){
                    return 3;
                })()}</h1>
                <h2>Example call Function in class : {this.getVal()}</h2>
                <h2>Example call varibael in constructor class : {this.name}</h2>
            </div>
        );
    }
}
const app = document.getElementById('app');
ReactDOM.render(<Layout/>,app);
