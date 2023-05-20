import { Component } from "react";
import EmployeesListItem from "../employees-list-item/employees-list-item";

import "./employees-list.css";

class EmployeesList extends Component {
  render() {
    let {employees} = this.props
    return (
      <ul className="app-list list-group">
        {employees.map((employee) => {
          let { name, salary } = employee;
          return <EmployeesListItem name={name} salary={salary} />;
        })}
      </ul>
    );
  }
}

export default EmployeesList;
