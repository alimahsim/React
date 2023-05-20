import React, { Component } from "react";
import LifeCycle from "../components/lifeCycle/LifeCycle";
import s from "./App.module.scss";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <LifeCycle></LifeCycle>
      </React.Fragment>
    );
  }
}
export default App;
