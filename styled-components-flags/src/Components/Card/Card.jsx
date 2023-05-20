import React, { Component } from "react";
import {CardMain,Img,Text,Heading,P,Span} from "../../app/styles"

class Card extends Component{
    constructor(props){
        super(props)
    }
    render(){
        let {flagImg, country , population, region, capital} = this.props
        return(
            <CardMain>
                <Img src={flagImg} alt="Flag of Countries" />
                <Text>
                    <Heading>{country}</Heading>
                    <P><Span>Population:</Span>{population}</P>
                    <P><Span>Region:</Span>{region}</P>
                    <P><Span>Capital:</Span>{capital}</P>
                </Text>
            </CardMain>           
        )
    }
}

export default Card;