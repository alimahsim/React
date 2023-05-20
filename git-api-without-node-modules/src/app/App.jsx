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
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      error: false,
      loading: false,
    };
  }
  // componentDidMount() {
  //   getInfo("octocat");
  // }
  onSearch() {
    // this.setState(() => {
    //   // return {
    //   //   // user:  getInfo(username),
    //   // z  // loading: true,
   
    //   // };
    // });
    console.log("Searching ...");
  }
  componentDidUpdate() {
    getInfo(`https://api.github.com/users/`).then((res) => {
      this.setState((prevState) => {
        return {
          user: [...prevState, res.data],
          error: !prevState.error,
          loading: !prevState.loading,
        };
      }).catch(() => {
        this.setState((prevState) => {
          return {
            error: !prevState.error,
            loading: !prevState.loading,
          };
        });
      });
    });
  }

  render() {
    let { onSearch, error, loading , user} = this.state
    return (
      <React.Fragment>
        <div className={s["container"]}>
          <Header modeIcon={modeIcon}></Header>
          <SearchPanel
            onSearch={onSearch}
            hasError={error}
            hasLoading={loading}

            searchIcon={searchIcon}
          ></SearchPanel>
          <Main
            userData={user}
            hasError={error}
            hasLoading={loading}

            octocat={octocat}
            locationIcon={locationIcon}
            urlIcon={urlIcon}
            twitterIcon={twitterIcon}
            officeIcon={officeIcon}
          ></Main>
        </div>
      </React.Fragment>
    );
  }
}
export default App;
