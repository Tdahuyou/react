/**
 * src/App.jsx
 */
import { useState } from 'react'

// 在 ./src/App.jsx 中引入 ./src/App.css
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>
        <button className="card" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </p>
      {/* <p>
        <button class="card" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </p> */}
    </>
  )
}

export default App
