/**
 * Created by Hasani on 3/16/2017.
 */
import React from "react";
import Header from "./Header"
import Footer from "./Footer"
export default class Layout extends React.Component{
    constructor(){
        super();
        this.state = {
            title : "Welcome"
        }
    }

    /**
     * method merubah title
     * @param title
     */
    changeTitle(title){
        this.setState({title});
    }

    render(){
        return(
            <div>
                <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>
                <Footer/>
            </div>
        );
    }
}