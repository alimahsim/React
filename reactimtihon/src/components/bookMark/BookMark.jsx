import React from "react";

import bookPhoto from "../../assets/Don't-make-me-think.jpg";
import heardIcon from "../../assets/heard-icon.png";

import s from "./BookMark.module.scss";

export const BookMark = () => {
  return (
    <>
      <div className={s["book-mark-wrapper"]}>
        <div className={s["book-mark-content"]}>
          <div className={s["title"]}>Bookmarks</div>
          <div className={s["book-mark-card"]}>
            <img src={bookPhoto} alt="There is a photo of the book" />
            <div className={s["card-text"]}>
              <h5>Don’t Make Me... </h5>
              <p>Steve Krug</p>
              <img src={heardIcon} alt="There is a heard icon"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
