import { Link } from "react-router-dom";

import booksPic from "../../assets/patterns/book.svg";
import owaBooksPic from "../../assets/patterns/owa-books.svg";
import hilalPic from "../../assets/patterns/hilal.svg";
import sunPic from '../../assets/patterns/sun.svg'

import s from "./Header.module.scss";

export const Header = () => {
  
//   const setDarkMode = () => {
//     document.querySelector("body").setAttribute("data-theme", "dark");
//   };

//   const setLightMode = () => {
//     document.querySelector("body").setAttribute("data-theme", "light");
//   };
//   const setActiveSun = () => {
//     document.querySelector(".sun").setAttribute("data-sun", "active");
//   };
// // setDarkMode()
//   const onToggleTheme = (e) =>{
//     if(e.target.clicked){
//       setLightMode()
//       setActiveSun()
//     }else{
//       setDarkMode()
//     } 
//   }
  return (
    <header>
      <div className={s["header-right"]}>
        <img src={booksPic} alt="books-icon" />
        <img src={owaBooksPic} alt="owa-books" />
      </div>
      <div className={s["header-left"]}>
        <img className="moon" src={hilalPic} alt="hilal-icon" />
        <img className="sun"  src={sunPic} alt="sun-icon" />
        <Link to="/sign-in" className={s["log-out"]} onClick={()=>{localStorage.removeItem("token")}}>log out</Link>
      </div>
    </header>
  );  
};
