import React, { Component } from "react";
import s from "./SearchPanel.module.scss";

class SearchPanel extends Component {
  state = {
    userName: ''
  }

  addUser = (e) => {
    this.setState(() => {
        return {
            [e.target.name]: e.target.value
        }
    })
  }

  onSearch = (e) => {
    if(this.state.userName){
      this.props.addUser(this.state.userName)
    }
    this.setState(() => {
      return {
        userName: ""
      }
    })
  }
  render() {
    // let {userName, addUser, onSearch } = this.state
    let { searchIcon } = this.props
    return (
      <div className={s["search-panel"]}>
        <div className={s["search-right"]}>
          <img src={searchIcon} alt="search-icon" />
          <input type="text" onChange={this.addUser} name="userName" value={this.state.userName} placeholder="Search GitHub username…" />
        </div>
        <div className={s["search-left"]}>
          <div className={s["search-result"]}></div>
          <button type='button' onClick={this.onSearch}>Search</button>
        </div>
      </div>
    );
  }
}
export { SearchPanel };
