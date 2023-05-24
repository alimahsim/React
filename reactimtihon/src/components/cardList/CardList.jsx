import React from 'react'
import {useState, useEffect } from 'react' 

import { CardListItem } from '../cardListItem/CardListItem'
import getData from "../../resourse/bookInfo"

import s from "./CardList.module.scss"

export const CardList = (img, title, author, createdAt, rate, like, props, getName) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getData('https://owabooks.vercel.app/db.json')
    .then((data) => {
      setData(data) 
    })
  }, []);

  return (
    <>
      <div className={s["card-list-content"]}>
        {
          data?.map((item)=>{
            return <CardListItem 
            img = {item.img}
            title = {item.title}
            author = {item.author}
            date = {item.createdAt}
            rate = {item.rate}
            like = {item.like}
            />
          })
        }
      </div>
    </>
  )
}
