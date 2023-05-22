import React from 'react'
import { Link } from 'react-router-dom'

import bookPhoto from "../../assets/Don't-make-me-think.jpg"
import heardIcon from "../../assets/heard-icon.png"

import s from "./CardListItem.module.scss"


export const CardListItem = () => {
  return (
    <>
      <div className={s["card-list-item-wrapper"]}>
        <div className={s["card-list-item-content"]}>
          <img src={bookPhoto} alt="There is a photo of the book" />
          <div className={s["title"]}>Don’t Make Me think</div>
          <div className={s["author"]}>Steve Krug, 2000</div>
          <div className={s["rating"]}>4.5 <span>/5</span>
            <img src={ heardIcon } alt="There is an icon of the small full heard" />
          </div>
          <div className={s["btns"]}>\
            <Link to="/info">Info</Link>
            <Link href="#">Read</Link>
          </div>
        </div>
      </div>
    </>
  )
}
