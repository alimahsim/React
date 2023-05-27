import React from "react"

import seachIcon from "../../assets/search-icon.png"

import s from "./SearchPanel.module.scss"

export const SearchPanel = ({onChangeTemp}) => {
  return (
  <>
    <div className={s["searching"]}>
        <div className={s["searching-left"]}>Search</div>
        <input type="text" onChange={(e) => onChangeTemp(e.target.value)}/>
        <div className={s["searching-right"]} >
            <img src={seachIcon} alt="There is a icon of the searching"/>
        </div>
    </div>
  </>
  )
}
