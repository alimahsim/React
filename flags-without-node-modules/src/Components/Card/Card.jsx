import React, { Component } from "react";
import sm from "./Card.module.scss"

class Card extends Component{

    constructor(props){
        super(props)
    }
    render(){
        let {flagImg, country , population, region, capital} = this.props
        // let { data } = this.state
        return(
            <div className={sm["card-main"]}>
                <div className={sm["card-img"]}>
                    <img src={flagImg} alt="Flag of Countries" />
                </div>
                <div className={sm["text"]}>
                    <h1>{country}</h1>
                    <p><span>Population:</span>{population}</p>
                    <p><span>Region:</span>{region}</p>
                    <p><span>Capital:</span>{capital}</p>
                </div>
            </div>        
        );
    }
}
export default Card;