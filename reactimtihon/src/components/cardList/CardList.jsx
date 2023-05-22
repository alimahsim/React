import React from 'react'

import { CardListItem } from '../cardListItem/CardListItem'

import s from "./CardList.module.scss"

export const CardList = () => {
  return (
    <>
      <div className={s["card-list-content"]}>
        <CardListItem></CardListItem>
      </div>
    </>
  )
}
