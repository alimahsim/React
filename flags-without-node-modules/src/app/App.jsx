import React, { Component } from "react";

import Header from "../Components/Header/Header";
import Search from "../Components/Search/Search";
import Card from "../Components/Card/Card";

import getInfo from "../Components/resource/serverces";

import sm from "./App.module.scss";

class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    data: [],
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
  render() {
    // let { data } = this.state;
    return (
      <div className={sm["container"]}>
        <div className={sm["app"]}>
          <Header></Header>
          <Search></Search>
          {this.state.data.map((item, id) => {
            return (
              <Card
                flagImg={item.flags.png}
                country={item.name.official}
                population={item.population}
                region={item.region}
                capital={item.capital}
              ></Card>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
