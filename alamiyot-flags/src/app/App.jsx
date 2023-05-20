import React, { Component } from "react";

import Header from "../Components/Header/Header";
import Search from "../Components/Search/Search";
import Card from "../Components/Card/Card";
import EmptyCard from "../Components/emptyCard/EmptyCard";

import getInfo from "../Components/Resource/serverces";

import sm from "./App.module.scss";

class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    data: [],
    wordForSeachingCountry: ''
  };

  componentDidMount() {
    getInfo("https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags")
    .then((res) => {
      this.setState(() => {
        return {
          data: res,
        };
      });
    });
  }
  searchForCountry(temp, info){
     if(temp){
      return info.filter((country)=>{
        return country.name.official.toLowerCase().includes(temp)
      })
     }else{
      return info
     }
  }
  onChangeSearch = (str) => {
    this.setState({ wordForSeachingCountry: str})
  }

  render() {
    let { data , wordForSeachingCountry } = this.state;
    let newData = this.searchForCountry( wordForSeachingCountry, data)
    return (
      <div className={sm["container"]}>
        <div className={sm["app"]}>
          <Header></Header>
          <Search searchValue={wordForSeachingCountry}
                  onChangeSearch={this.onChangeSearch}>
          </Search>
          {
            newData.length
            ?
            newData.map((item, id) => {
              return (
                <Card
                  flagImg={item.flags.png}
                  country={item.name.official}
                  population={item.population}
                  region={item.region}
                  capital={item.capital}
                ></Card>
              );
            })
            :
            <EmptyCard/>
          }
        </div>
      </div>
    );
  }
}

export default App;
