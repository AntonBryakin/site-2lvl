import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState(1)
  return (
    <>
      <button onClick={() => {
        setValue(state => state*2)
        }}>{value}</button>
    </>
  )
}

export default App