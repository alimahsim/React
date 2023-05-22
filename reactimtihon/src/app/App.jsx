import { Header, Homepage, General, Error404, SignIn, Info} from "../components/index";
import { Routes, Route } from "react-router-dom"

// import { General } from "../pages/General"

import s from "./App.module.scss";

function App() {
  return (
    <div className={s["app-wrapper"]}>
      {/* <Header></Header> */}
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/sign" element={<SignIn/>}></Route>
        <Route path="/gen" element={<General/>}></Route>
        <Route path="/info" element={<Info/>}></Route>
        <Route path="*" element={<Error404/>}></Route>
      </Routes>
      {/* <Header></Header> */}
      {/* <Homepage></Homepage> */}
      {/* <General></General>  */}
      {/* <Error404></Error404> */}
      {/* <SignIn></SignIn> */}
      {/* <Info></Info> */}
    </div>
  )
}
export default App;
