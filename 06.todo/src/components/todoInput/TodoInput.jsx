import React, {Component} from "react";
import TodoListItem from "../todoListItem/TodoListItem";

import { Container, Input, UnorderedList, Button} from "../../app/Styles";


class TodoInput extends Component{
    state={
        todos: ["Jog around the park 3x", "10 minutes meditation", "Read for 1 hour", "Pick up groceries", "Pick up groceries"],
        text: "",
    }
    showText = (e) => {
        this.setState(()=>{
            return{
                text: e.target.value
            }
        })     
    }
    addText = () =>{
        let {todos, text} = this.state
       if(text){
            this.setState(()=>{
                return{
                  todos: [...todos, text]
                }
            })
        }
    }
    deleteItem = (elI) =>{
        this.setState(({todos})=>{
            // let index = todos.findIndex((item, i)=> i === elI)
            // let prevArr = todos.slice(0, index)
            // let nextArr = todos.slice(index + 1)
            // return{
            //     todos:[...prevArr, nextArr]
            // }
            return{
                todos: todos.filter((item, i)=> i !== elI)
            }
        })

    }
    render(){
        let {todos} = this.state
        // let {onDelete2} = this.props

        let todoArr = todos.map((eachTodo, i)=>{
          return <TodoListItem todo={eachTodo} key={i} onDelete={()=>{this.deleteItem(i)}}></TodoListItem>
        })
        return(
            <React.Fragment>
                <Container>
                    <Input type="text" placeholder="Create a new todo" onInput={this.showText}></Input>
                    <Button onClick={this.addText}>add</Button>
                </Container>
                <UnorderedList>{todoArr}</UnorderedList>
           </React.Fragment>
        )
    }
}
export default TodoInput; 