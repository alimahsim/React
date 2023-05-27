import { CardList, Header, SearchPanel, BookMark, EmptyCard} from "../../components/index"
import { useState } from "react"

import s from "./Homepage.module.scss"

export const Homepage = () => {
  const [temp, setTemp] = useState('')


  function onChangeTemp(str){
    return setTemp(str)
  }

 

  return (
    <>
      {/* <Header></Header> */}
      <div className={s["main-content"]}>
        <div className={s["main_left"]}><BookMark></BookMark></div>
        <div className={s["main_right"]}>
          <SearchPanel onChangeTemp={onChangeTemp}></SearchPanel>
          <CardList temp={temp}></CardList></div>
      </div>
    </>
  )
}
