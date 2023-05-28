import React from 'react'
import {useState, useEffect } from 'react' 

import { CardListItem, EmptyCard } from '../index'


import s from "./CardList.module.scss"

export const CardList = ({  books, changeLike, temp}) =>{
  
  const searchItem = (word, data) => {
    if(word){
      return data.filter((info)=>{
        return info.title.toLowerCase().includes(word.toLowerCase())
      })
    }else{
      return data
    }
  }

let newBooks = searchItem(temp, books)
  return (
    <>
      <div className={s["card-list-content"]}>
        {
          newBooks.length === 0
          ?
          <EmptyCard/>
          :
          newBooks?.map((item, i)=>{
            return <CardListItem 
            key = {i}
            img = {item.img}
            title = {item.title}
            author = {item.author}
            date = {item.createdAt}
            rate = {item.rate}
            like = {item.like}
            id = {item.id}
            changeLike={changeLike}
            />
          })          
        }
      </div>
    </>
  )
}
