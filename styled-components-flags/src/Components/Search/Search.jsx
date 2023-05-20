import React, { Component } from "react";
import {SearchMain,SearchRight,SearchLeft} from "../../app/styles"

class Search extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <SearchMain>
                <SearchRight>Search for a country… </SearchRight>
                <SearchLeft>Filter by Region</SearchLeft>
            </SearchMain>
        )
    }
}
export default Search