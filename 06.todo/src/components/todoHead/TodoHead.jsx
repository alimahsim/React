import React, { Component } from "react";
import { Header, HeaderRight, HeaderLeft , BackImgSVG} from "../../app/Styles";

class TodoHead extends Component{
    render(){
        return(
            <Header>
                <HeaderRight>todo</HeaderRight>
                <HeaderLeft><BackImgSVG></BackImgSVG></HeaderLeft>
            </Header>
        )
    }
}

export default TodoHead;