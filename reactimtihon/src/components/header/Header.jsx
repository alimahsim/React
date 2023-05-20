import booksPic from "../../assets/patterns/book.svg";
import owaBooksPic from "../../assets/patterns/owa-books.svg";
import hilalPic from "../../assets/patterns/hilal.svg";

import s from "./Header.module.scss";

export const Header = () => {
  return (
    <header>
      <div className={s["header-right"]}>
        <img src={booksPic} alt="books-icon" />
        <img src={owaBooksPic} alt="owa-books" />
      </div>
      <div className={s["header-left"]}>
        <img src={hilalPic} alt="hilal-icon" />
        <button>log out</button>
      </div>
    </header>
  );
};
