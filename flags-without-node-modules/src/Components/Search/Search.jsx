import React, { Component } from "react";
import sm from "./Search.module.scss"

class Search extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className={sm["search-main"]}>
                <div className={sm["search-right"]}>Search for a country… </div>
                <div className={sm["search-left"]}>Filter by Region</div>
            </div>
        )
    }
}
export default Search