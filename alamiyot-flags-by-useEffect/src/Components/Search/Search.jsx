import React, { Component } from "react";
import sm from "./Search.module.scss"

class Search extends Component{
    constructor(props){
        super(props)
    }

    render(){
        let { onChangeSearch, wordForSeachingCountry } = this.props
        return(
            <div className={sm["search-main"]}>
                <input type="text" 
                        placeholder="Search for a country… "
                        value={wordForSeachingCountry}
                        onChange={(e)=>onChangeSearch(e.target.value)}
                        className={sm["search-right"]}/>
                <input placeholder="Filter by Region" className={sm["search-left"]} />
            </div>
        )
    }
}
export default Search