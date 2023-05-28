import { CardList, Header, SearchPanel, BookMark, EmptyCard} from "../../components/index"
import { useState } from "react"

import s from "./Homepage.module.scss"

export const Homepage = ({books, changeLike}) => {
  const [temp, setTemp] = useState('')

  function onChangeTemp(str){
    return setTemp(str)
  }

  return (
    <>
      {/* <Header></Header> */}
      <div className={s["main-content"]}>
        <div className={s["main_left"]}><BookMark changeLike = { changeLike } books={books}></BookMark></div>
        <div className={s["main_right"]}>
          <SearchPanel onChangeTemp={onChangeTemp}></SearchPanel>
          <CardList books={books} changeLike = { changeLike } temp={temp}></CardList></div>
      </div>
    </>
  )
}
