import { CardList, Header, SearchPanel, BookMark } from "../../components/index"

import s from "./Homepage.module.scss"

export const Homepage = () => {
  return (
    <>
      <Header></Header>
      <div className={s["main-content"]}>
        <div className={s["main_left"]}><BookMark></BookMark></div>
        <div className={s["main_right"]}><SearchPanel></SearchPanel><CardList></CardList></div>
      </div>
    </>
  )
}
