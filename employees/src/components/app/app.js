import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";

class App extends Component {
  state = {
    employees: [
      {name: "John Doe", salary: 3000},
      {name: "Martin King", salary: 4000},
      {name: "Adam Smith", salary: 5500}
    ]
  }
  render() {
    let {employees} = this.state
    return (
      <div className="app">
        <AppInfo />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList  employees={employees}/>
        <EmployeesAddForm />
      </div>
    );
  }
}

export default App;
