import { useState } from "react";
import "./App.css";

function App() {
  // console.log(useState()); // [undefined, ƒ]  // it returns an array
  const [title, setTitle] = useState("NAXCA");
  const [events, setEvents] = useState([
    { id: 1, name: "John", surname: "Smith", age: 45, position: "Web dev" },
    { id: 2, name: "Tim", surname: "Edison", age: 20, position: "Web design" },
    {id: 45, name: "Garry",surname: "Adams",age: 18,position: "Front-end dev"}
  ]);

  // let title = "Alibek Coding Academy"
  // title = "NAXCA" // it chages

  //  const handleClick = () =>{
  //   title = "NAXCA"
  //   console.log(title); // changed into NAXCA
  //   }

  const handleClick = () => {
    setTitle("Ali's Coding Academy");
  };

  
  const handleDelete = (id) => {
    const newEvents = events.filter((event)=>{
      return event.id !== id
    })
    setEvents(newEvents)
  };

  return (
    <>
      <h1>{title}</h1>
      <div className="card">
        <button
          onClick={handleClick}
          style={{ background: "#000", color: "#FF0000" }}
        >
          Click and look up
        </button>
        <h2>The list of employees</h2>
        {events.map((event) => {
          return (
            <> 
              <h3>{`${event.id} ${event.name} ${event.surname} ${event.age}`}</h3>
              <button onClick={(()=>{handleDelete(event.id)})} style={{paddingTop: "10px", background: "#000", color: "#FF0000", marginLeft: "10px"}}>
                Delete employees
              </button >
            </>
          );
        })}
      </div>
    </>
  );
}

export default App;


const tableBordering = {border: "2px solid red"}
const centering = {display: "flex", alignItems: "center", justifyContent: "center", color: "red"}
const white = {color: "#FFF"}
const paddingTop = {paddingTop: "10px"}