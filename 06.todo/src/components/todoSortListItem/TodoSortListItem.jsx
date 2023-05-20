import React, { Component } from "react";
import { Span, Sort } from "../../app/Styles";

class TodoSortListItem extends Component {
  render() {
    return (
      <Sort>
        <Span className="bgc-blue">5 items left</Span>
        <Span>
          <Span className="bgc-blue">All</Span>&nbsp;&nbsp;
          <Span className="bgc-blue">Active</Span>&nbsp;&nbsp;
          <Span className="bgc-blue">Completed</Span>
        </Span>
        <Span className="bgc-blue">Clear Completed</Span>
      </Sort>
    );
  }
}
export default TodoSortListItem;
