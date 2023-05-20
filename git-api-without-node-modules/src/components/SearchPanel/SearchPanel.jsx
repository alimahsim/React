import React, { Component } from "react";
import s from "./SearchPanel.module.scss";

class SearchPanel extends Component {
  render() {
    let {onSearch, searchIcon} = this.props
    return (
      <div className={s["search-panel"]}>
        <div className={s["search-right"]}>
          <img src={searchIcon} alt="search-icon" />
          <input type="text" />
        </div>
        <div className={s["search-left"]}>
          <div className={s["search-result"]}>No results</div>
          <button type='button' onClick={onSearch}>Search</button>
        </div>
      </div>
    );
  }
}
export { SearchPanel };
