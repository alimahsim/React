import React, { Component } from "react";
import { InputChekbox, ListItem, Span, Button } from "../../app/Styles";

class TodoListItem extends Component {
 
  render() {
    let { todo, onDelete } = this.props;

    return (
      <React.Fragment>
        <ListItem>
          <Span>
            <InputChekbox type="checkbox" className="chek"/>&nbsp;
            <Span className="checkedSpan">{todo}</Span>
          </Span>
          <Button onClick={onDelete}>&times;</Button>
        </ListItem>
      </React.Fragment>
    );
  }
}
export default TodoListItem;
