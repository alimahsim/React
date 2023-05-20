import React, { Component } from "react";
import getInfo from "../resource/usersService";

import s from "./LifeCycle.module.scss";

class LifeCycle extends Component {
  constructor(props) {
    super(props);
    console.log("CONSTRUCTOR");
  }
  state = {
    data: [],
  };
  componentDidMount() {
    getInfo("https://jsonplaceholder.typicode.com/users").then((res) => {
      this.setState(() => {
        return {
          data: res,
        };
      });
    });
    console.log("DIDMOUNT");
  }
  componentDidUpdate() {
    console.log("UPDATE");
  }
  // componentWillUnMount(){
  //    console.log('WILLUNMOUNT');
  // }
  render() {
    console.log("RENDER");
    const { data } = this.state;
    return (
      <React.Fragment>
        <h1 className={s["appHeader"]}>Users</h1>
        <table > <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
        {data.map((user) => {
          return (
            <React.Fragment>
             
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>
              </React.Fragment>
          );
        })}
        </table>
      </React.Fragment>
    );
  }
}
export default LifeCycle;
