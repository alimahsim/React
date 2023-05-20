import React, { Component } from 'react';

import Header from "../Components/Header/Header";
import Search from "../Components/Search/Search";
import Card from "../Components/Card/Card";

import {Container, AppSc} from "./styles";

import flagGr from "../Components/image/germany-flag.jpg"
import flagUSA from "../Components/image/usa-flag.jpg"
import flagBr from "../Components/image/brazilian-flag.jpg"
import flagIl from "../Components/image/iceland-flag.jpg"
import flagAf from "../Components/image/afganistan-flag.jpg"
import flagAI from "../Components/image/aland-island-flag.jpg"
import flagA from "../Components/image/albanian-flag.jpg"
import flagAl from "../Components/image/algerian-flag.jpg";


class App extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <Container>
        <AppSc>
          <Header></Header>
          <Search></Search>
          <Card flagImg={flagGr} country={"Germanry"} population={"81,770,900"} region={"Europe"} capital={"Berlin"}></Card>
          <Card flagImg={flagUSA} country={"United States of America"} population={"323,947,000"} region={"Americas"} capital={"Washington, D.C."}></Card>
          <Card flagImg={flagBr} country={"Brazil"} population={"206,135,893"} region={"Americas"} capital={"Brasília"}></Card>
          <Card flagImg={flagIl} country={"Iceland"} population={"334,300"} region={"Europe"} capital={"Reykjavík"}></Card>
          <Card flagImg={flagAf} country={"Afghanistan"} population={"27,657,145"} region={"Asia"} capital={"Kabul"}></Card>
          <Card flagImg={flagAI} country={"Åland Islands"} population={"28,875"} region={"Europe"} capital={"Mariehamn"}></Card>  
          <Card flagImg={flagA} country={"Albania"} population={"2,886,026"} region={"Europe"} capital={"Tirana"}></Card>
          <Card flagImg={flagAl} country={"Algeria"} population={"40,400,000"} region={"Africa"} capital={"Algiers"}></Card>
        </AppSc>
      </Container>
    );
  }
}
export default App;
