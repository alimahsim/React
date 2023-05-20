import React, { Component } from "react";

import { Header, SearchPanel, Main, getInfo } from "../components";
// import { modeIcon  , searchIcon, octocat, locationIcon, urlIcon, tweeterIcon, officeIcon } from "../components";

import modeIcon from "../components/image/patterns/the-sun.png";
import searchIcon from "../components/image/patterns/search-icon.png";
import octocat from "../components/image/octocat.png";
import locationIcon from "../components/image/patterns/location.png";
import urlIcon from "../components/image/patterns/url.png";
import twitterIcon from "../components/image/patterns/tweeter.png";
import officeIcon from "../components/image/patterns/office-building.png";

import s from "./App.module.scss";

// const [user, setUser] = useState('');
// const [error, setError] = useState(false);
// const [loading, setLoading] = useState(false)

class App extends Component {
    state = {
      userName: '',
      user: []
    }
    addUser = (user) => {
      this.setState(() => {
        return {
          userName: user
        }
      })
    }
    componentDidUpdate() {
      getInfo(`https://api.github.com/users/${this.state.userName}`).then((res) => {
        this.setState(() => {
          return {
            user: res
          }
        })
      });
    }
  render() {
    // let {addUser, user } = this.state
    return (
      <React.Fragment>
        <div className={s["container"]}>
          <Header modeIcon={modeIcon}></Header>
          <SearchPanel
            addUser={this.addUser}
            searchIcon={searchIcon}>
          </SearchPanel>
          <Main
            octocat={octocat}
            locationIcon={locationIcon}
            urlIcon={urlIcon}
            twitterIcon={twitterIcon}
            officeIcon={officeIcon}
            userData={this.state.user}>
          </Main>
        </div>
      </React.Fragment>
    );
  }
}
export default App;
