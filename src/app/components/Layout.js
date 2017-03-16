/**
 * Created by Hasani on 3/16/2017.
 */
import React from "react";
import Header from "./Header"
import Footer from "./Footer"
export default class Layout extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <Footer/>
            </div>
        );
    }
}