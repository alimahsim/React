import { Homepage, Error404, SignIn, Info, Layout} from "../components/index";
import { Routes, Route, Navigate} from "react-router-dom"
import getData from "../resourse/bookInfo"
import { useState , useEffect} from "react";

import s from "./App.module.scss";





function App() {

const [books, setBooks] = useState([]);

  useEffect(() => {
    getData('https://owabooks.vercel.app/db.json')
    .then(setBooks)
  }, []);

  console.log(books);

const changeLike = (id) => {
  let newLike = books.map((item)=>{
   if(id === item.id){
      item = {...item, like: !item.like}
   }
   return item;
  })
  setBooks(newLike)
} 




  return (
    <div className={s["app-wrapper"]}>
        <Routes>
          <Route path="/" element={<Navigate to="/sign-in"/>}></Route>
          <Route path="/home" element={<Layout/>}>
            <Route index element={<Homepage changeLike={changeLike} books={books} />}></Route>
            <Route path="/home/:postId" element={<Info/>}></Route>
          </Route>
          <Route path="/sign-in" element={<SignIn/>}></Route>
          <Route path="*" element={<Error404/>}></Route>
        </Routes>
    </div>
  )
}
export default App;
