
import arrow from "../../assets/back-arrow-icon.png";
import bookPhoto from "../../assets/Don't-make-me-think.jpg";
import texting from "../../assets/patterns/texting.svg";
import noting from "../../assets/patterns/noting.svg";
import shareing from "../../assets/patterns/shareing.svg";

import fullStar from "../../assets/full-star.png"
import emptyStar from "../../assets/empty-star.png"
import completedIcon from "../../assets/completed-icon.png"
import locationIcon from "../../assets/location.png"
import headphones from "../../assets/headphones.png"

import authorPhoto from "../../assets/author-photo.png";

import s from "./Info.module.scss";

export const Info = () => {
  return (
    <>
      <h1>Hello Info</h1>
      <div className={s["info-main"]}>
        <div className={s["back-icon"]}>
          <img src={arrow} alt="There is an back-arrow icon"/> 
          <p>Back to results</p>
        </div>
        <div className={s["info-main_content"]}>
          <div className={s["info-main_content__book-photo"]}>
            <img src={bookPhoto} alt="There is a photo of book" />
            <div className={s["social-status"]}>
              <div className={s["pending"]}>
                <img src={texting} alt="There is a texting icon here" />
                <p>Review</p>
              </div>
              <div className={s["noting"]}>
                <img src={noting} alt="There is a noting icon here" />
                <p>Notes</p>
              </div>
              <div className={s["shareing"]}>
                <img src={shareing} alt="There is a shareing icon here" />
                <p>Share</p>
              </div>
            </div>
          </div>
          <div className={s["info-main_content__book-info"]}>
            <div className="book-info_content">
              <div className="book-title">Don’t Make Me Think </div>
              <div className="book-author">By Steve Krug, 2000</div>
              <div className="edition">Second Edition</div>
              <div className="book-rating">
                <div className="stars">
                  <img src={fullStar} alt="There is a full star icon"/>
                  <img src={emptyStar} alt="There is a empty star icon"/>
                </div>
                <div className="rating">4.0 Ratings</div>
                <div className="reading">25 Currently reading</div>
              </div>
              <div className="availability">
                <div className="copy">
                  <img src={completedIcon} alt="" />
                  <p>Hard Copy</p>
                </div>
                <div className="e-book">
                  <img src={completedIcon} alt="" />
                  <p>E-Book</p>
                </div>
                <div className="audio-book">
                  <img src={completedIcon} alt="" />
                  <p>Audio-Book</p>
                </div>
              </div>
              <div className="status">
                <div>in-Shelf</div>
                <div className="location">
                  <img src={locationIcon} alt="" />
                  <p>CS A-15</p>
                </div>
              </div>
              <div className="borrow">Borrow</div>
              <div className="read-more">
                <p>Read more</p>
                <img src={headphones} alt="" />
              </div>
            </div>
           </div>
          <div className={s["info-main_content_book-author"]}>
            <div className={s["author-title-name-photo"]}>
              <div className={s["title-author-name"]}>
                <div className={s["title"]}><span>About</span>Author</div>
                <div className={s["author-name"]}>Steve Krug</div>
              </div>
              <img src={authorPhoto} alt="author photo" />
            </div>
            <div className={s["text"]}>
              Steve Krug is a usability consultant who has more than 30 years of
              experience as a user advocate for companies like Apple, Netscape,
              AOL, Lexus, and others. Based in part on the success of his first
              book, Don't Make Me Think, he has become a highly sought-after
              speaker on usability design.
            </div>
          </div>
        </div>
      </div>
      <div className={s["info-description"]}>
        <div className={s["description-title"]}>Description</div>
        <p>Steve Krug is a usability consultant who has more than 30 years of experience as a user advocate for companies like Apple, Netscape, AOL, Lexus, and others. Based in part on the success of his first book, Don't Make Me Think, he has become a highly sought-after speaker on usability design. Steve Krug is a usability consultant who has more than 30 years of experience as a user advocate for companies like Apple, Netscape, AOL, Lexus, and others. Based in part on the success of his first book, Don't Make Me Think, he has become a highly sought-after speaker on usability design. Steve Krug is a usability consultant who has more than 30 years of experience as a user advocate for companies like Apple, Netscape, AOL, Lexus, and others. Based in part on the success of his first book, Don't Make Me Think, he has become a highly sought-after speaker on usability design. Steve Krug is a usability consultant who has more than 30 years of experience as a user advocate for companies like Apple, Netscape, AOL, Lexus, and others. Based in part on the success of his first book, Don't Make Me Think, he has become a highly sought-after speaker on usability design.</p>
      </div>
      <h4><span>Other</span> Books</h4>
      <div className={s["info-cards"]}>
        <div className={s["info-card"]}>
          <div className="info-card_context">
            <img src={bookPhoto} alt="There is a photo of the book" />
            <div className="info-card_context__text">
              <h5>Don’t Make Me think</h5>
              <h6>Steve Krug, 2000</h6>
              <p>4.5<span>/5</span></p>
            </div>
          </div>
        </div>
        <div className={s["info-card"]}>
          <div className="info-card_context">
            <img src={bookPhoto} alt="There is a photo of the book" />
            <div className="info-card_context__text">
              <h5>Don’t Make Me think</h5>
              <h6>Steve Krug, 2000</h6>
              <p>4.5<span>/5</span></p>
            </div>
          </div>
        </div>
        <div className={s["info-card"]}>
          <div className="info-card_context">
            <img src={bookPhoto} alt="There is a photo of the book" />
            <div className="info-card_context__text">
              <h5>Don’t Make Me think</h5>
              <h6>Steve Krug, 2000</h6>
              <p>4.5<span>/5</span></p>
            </div>
          </div>
        </div>
        <div className={s["info-card"]}>
          <div className="info-card_context">
            <img src={bookPhoto} alt="There is a photo of the book" />
            <div className="info-card_context__text">
              <h5>Don’t Make Me think</h5>
              <h6>Steve Krug, 2000</h6>
              <p>4.5<span>/5</span></p>
            </div>
          </div>
        </div>
        <div className={s["info-card"]}>
          <div className="info-card_context">
            <img src={bookPhoto} alt="There is a photo of the book" />
            <div className="info-card_context__text">
              <h5>Don’t Make Me think</h5>
              <h6>Steve Krug, 2000</h6>
              <p>4.5<span>/5</span></p>
            </div>
          </div>
        </div>
        <div className={s["info-card"]}>
          <div className="info-card_context">
            <img src={bookPhoto} alt="There is a photo of the book" />
            <div className="info-card_context__text">
              <h5>Don’t Make Me think</h5>
              <h6>Steve Krug, 2000</h6>
              <p>4.5<span>/5</span></p>
            </div>
          </div>
        </div>
        <div className={s["info-card"]}>
          <div className="info-card_context">
            <img src={bookPhoto} alt="There is a photo of the book" />
            <div className="info-card_context__text">
              <h5>Don’t Make Me think</h5>
              <h6>Steve Krug, 2000</h6>
              <p>4.5<span>/5</span></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};