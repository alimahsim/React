import React, { Component } from "react";
import TodoHead from "../components/todoHead/TodoHead";
import TodoInput from "../components/todoInput/TodoInput";
import TodoSortListItem from "../components/todoSortListItem/TodoSortListItem";
// import TodoListItem from "../components/todoListItem/TodoListItem"

import { AppStyle, BackImg, Wrapper} from "./Styles";

import "./Styles";

class App extends Component {

  render() {
    return (
      <AppStyle>
        <Wrapper>
        <BackImg/>
        <TodoHead></TodoHead>
          <TodoInput onDelete2={this.deleteItem}></TodoInput>
          {/* <TodoListItem>Allc dcdvdv</TodoListItem> */}
          <TodoSortListItem></TodoSortListItem>
        </Wrapper>
      </AppStyle>
    );
  }
}
export default App;
