import { useState } from 'react'
import './App.css'
import Cards from './Components/Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-5'  > Tailwind css</h1>
      <Cards username="Saumya" submitbttn="Click me" />
      <Cards username="Sonu"  submitbttn={"Visit me"}/>
      <Cards username="Ankush"    />
     
    </>
  )
}

export default App
