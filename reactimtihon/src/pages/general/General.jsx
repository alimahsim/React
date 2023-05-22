import { CardList, Header, SearchPanel, BookMark } from "../../components"

import s from "./General.module.scss"

export const General = () => {
  return (
    <>
      <Header></Header>
      <div className={s["general-main-content"]}>
        <div className={s["general-main_left"]}><BookMark></BookMark></div>
        <div className={s["general-main_right"]}><SearchPanel></SearchPanel><CardList></CardList></div>
      </div>
    </>
  )
}
