import React, { Component } from "react";
import sm from "./Header.module.scss"

class Header extends Component{
    constructor(props){
        super(props)       
    }   

    render(){

    return(
        <header className={sm["header-container"]}>
            <div className={sm["head-right"]}>
                Where in the world?
            </div>
            <div className={sm["head-left"]}>
                Dark Mode
            </div>

        </header>
        )
    }       
}
export default Header
