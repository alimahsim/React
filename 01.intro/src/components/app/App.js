// import React from "react"


// // jsx
// class App extends React.Component{
//   render(){
//     return(
//       <div>
//         Hello world!
//       </div>
//     )

//   }
// }

// export default App

import {Component} from "react"
import "./App.css"
import Header from "../header/Header"
import Main from "../main/Main"
import Footer from "../footer/Footer"

// jsx
class App extends Component{
  render(){
    return(
      <div>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
      )

  }
}

export default App
