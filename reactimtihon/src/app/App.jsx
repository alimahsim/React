import {Header, Homepage, Error404, SignIn, Info, Layout} from "../components/index";
import { Routes, Route, Navigate} from "react-router-dom"

import s from "./App.module.scss";

function App() {
  return (
    <div className={s["app-wrapper"]}>
        <Routes>
          <Route path="/" element={<Navigate to="/sign-in"/>}></Route>
          <Route path="/home" element={<Layout/>}>
            <Route index element={<Homepage/>}></Route>
            <Route path="/home/info" element={<Info/>}></Route>
          </Route>
          <Route path="/sign-in" element={<SignIn/>}></Route>
          <Route path="*" element={<Error404/>}></Route>
        </Routes>

        {/* <Header></Header> */}
        {/* <Layout></Layout>   */}
        {/* <Info></Info>
        <Homepage></Homepage> */}
    </div>
  )
}
export default App;
