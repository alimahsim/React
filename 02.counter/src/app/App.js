import React, { Component } from 'react';
import './App.css';

// class App extends Component{
  
  // showMessage(){
  //   console.log("Hello");
  // }
  
  // render(){
  //   let counter = 0;
  //   function inc(){
  //     counter++
  //     console.log(counter);
  //   }
  //   function dec(){
  //     counter--
  //     console.log(counter);
  //   }

  //   return (
  //     <div className="wrapper">
  //       <button className='dec' onClick={dec}>DEC</button>
  //       <div className='counter'>{counter}</div>
  //       <button className='inc' onClick={inc}>INC</button> 
  //     </div>
  //   );
  // }
// }
// export default App;



// class App extends Component{
//   constructor(props){
//     super(props)
//     this.state = {
//       counter: 0
//     }

//   } 
 
//   inc = () =>{
//     this.setState(()=>{
//       return {
//         counter: this.state.counter +1 
//     }
//   })
//   }

//   dec = () =>{
//     this.setState(()=>{
//       return {
//         counter: this. state.counter -1 
//     }
//   })
//   }

//   render(){
//     return (
//       <div className="wrapper">
//         <button className='dec'onClick={this.dec}>DEC</button>
//         <div className='counter'>{this.state.counter}</div>
//         <button className='inc'onClick={this.inc}>INC</button> 
//       </div>
//     );
//   }
// }

// export default App;


// class App extends Component{
//   state = {
//     counter: 0
//   }
//   inc = this.inc.bind(this)
//   dec = this.dec.bind(this)
  
//     inc(){
//     this.setState((state)=>{
//       return {
//         counter: state.counter +1 
//       }
//     })
//   }
  
//   dec(){
//     this.setState((state)=>{
//       return {
//         counter: state.counter -1 
//       }
//     })
//   }

//   render(){
//     return (
//       <div className="wrapper">
//         <button className='dec'onClick={this.dec}>DEC</button>
//         <div className='counter'>{this.state.counter}</div>
//         <button className='inc'onClick={this.inc}>INC</button> 
//       </div>
//     );
//   }
// }

// export default App;

//class App extends Component{
//  state = {
//    counter: 0,
//    //codingLangs: 'Conding languages' 
//  }
//  // inc = this.inc.bind(this)
//  // dec = this.dec.bind(this)
//  rmd = this.rmd.bind(this)
//  rst = this.rst.bind(this)
  // randomEl = this.randomEl.bind(this)

//  dec = () =>{
//    if(this.state.counter > -25){
//      this.setState((state)=>{
//        return {
//          counter: state.counter -1 
//        }
//      })
//    }
//  }
//  inc = () => {
//    if(this.state.counter < 25){
//      this.setState((state)=>{
//        return {
//          counter: state.counter +1 
//        }
//     })
//    }
//  }
//  rmd(){
//    this.setState((state)=>{
//      return {
//        counter: state.counter = Math.floor(Math.random()*25) - 12 
//      }
//   })
//  }
//  rst(){
//    this.setState((state)=>{
//      return {
//        counter: state.counter = 0 
//      }
//   })
//  }
//  //randomEl(){
//  //   this.setState((state)=>{
//  //     return {
//   //      codingLangs: state.codingLangs = element
//   //    } 
//   //  })
//   //}

//  render(){
  //  // let itLangs = ['JS', 'Python', 'C++', 'SQL', 'PHP', 'GO']
  //  // let randomIndex = Math.floor(Math.random() * itLangs.length);
  //  // let element = itLangs[randomIndex];
  //  // let randomEl = () =>{
  //  //   this.setState((state)=>{
  //  //     return {
  //  //       codingLangs: state.codingLangs = element
  //  //     } 
  //  //   })
  //  // }
  //  // console.log(element);

// let itLangs = ['JS', 'Python', 'C++', 'SQL', 'PHP', 'GO']
// function getRandomItem(arr) {
//     let randomIndex = Math.floor(Math.random() * arr.length);
//     let element = arr[randomIndex];
//     return element;
//   }
//   getRandomItem(itLangs)

    
//     return (
//       <React.Fragment>
//         <div className="counter-wrapper">
//           <div className='counter'>{this.state.counter}</div>
//           <button className='dec'onClick={this.dec}>DEC</button>
//           <button className='inc'onClick={this.inc}>INC</button>
//           <button className='inc'onClick={this.rmd}>RMD</button>
//           <button className='inc'onClick={this.rst}>RST</button>
//         </div>
//         {/* <div className='langs-wrapper'>
//           <div className='coding-langs'>{this.state.codingLangs}</div>
//           <button className='btn' onClick={this.randomEl}>See random coding langs</button>
//         </div> */}
//       </React.Fragment>
//     );
//   }
// }

// export default App;

class App extends Component{
  constructor(props){
    super(props)

    this.state = { 
      counter: 0
    }
  }  
  inc = () =>{
    this.setState(()=>{
      return{
        counter: this.state.counter + 1
      }
    })
  }
  dec = () =>{
    this.setState(()=>{ // setState change the state and render it 
      return{
        counter: this.state.counter - 1 // setState is immutatable so not ++ but + 1
      }
    })
  }
  render(){
    return(
      <div className='wrapper'>
        <button className='dec' onClick={this.dec}>DEC</button>
        <div className='counter'>{this.state.counter}</div>
        <button className='inc'onClick={this.inc}>INC</button>
      </div>
    )
  }
}
export default App