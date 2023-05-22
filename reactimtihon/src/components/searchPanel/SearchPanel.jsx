import React from "react"

import seachIcon from "../../assets/search-icon.png"

import s from "./SearchPanel.module.scss"

export const SearchPanel = () => {
  return (
  <>
    <div className={s["searching"]}>
        <div className={s["searching-left"]}>Search</div>
        <div className={s["searching-right  "]}>
            <img src={seachIcon} alt="There is a icon of the searching"/>
        </div>
    </div>
  </>
  )
}
