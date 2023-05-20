import React, { Component } from "react";
import {HeaderContainer , HeaderRight, HeaderLeft} from "../../app/styles"

class Header extends Component{
    constructor(props){
        super(props)       
    }   

    render(){

    return(
        <HeaderContainer> 
            <HeaderRight>
                Where in the world?
            </HeaderRight>
            <HeaderLeft>
                Dark Mode
            </HeaderLeft>
        </HeaderContainer>
        )
    }       
}

export default Header
