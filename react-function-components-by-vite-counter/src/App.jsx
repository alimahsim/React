import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>INC</button>
        <button onClick={() => setCount((count) => count - 1)}>DEC</button>
        <button onClick={() => setCount((count) => count = 0)}>RST</button>
        <button onClick={() => setCount((count) => count = Math.floor(Math.random()*100-50))}>RND</button>
        <p>count is <span>{count}</span></p>
      </div>
    </>
  )
}
export default App;
