import React from 'react'
import { NavLink, Link } from 'react-router-dom'

// import bookPhoto from "../../assets/Don't-make-me-think.jpg"
import heardIcon from "../../assets/heard-icon.png"

import s from "./CardListItem.module.scss"


export const CardListItem = (props) => {
  const { img, title, author, createdAt, rate, like, getName } = props
  return (
    <>
      <div className={s["card-list-item-wrapper"]}>
        <div className={s["card-list-item-content"]}>
          <img src={img} alt="There is a photo of the book" />
          <div className={s["title"]}>{title}</div>
          <div className={s["author"]}>{author}, {createdAt}</div>
          <div className={s["rating"]}>{rate}<span>/5</span>
            < img src={ heardIcon } alt="There is an icon of the small full heard" />
          </div>
          <div className={s["btns"]}>
            <NavLink to="/home/info">Info</NavLink>
            <Link href="#">Read</Link>
          </div>
        </div>
      </div>
    </>
  )
}
