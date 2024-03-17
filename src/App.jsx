import { useState } from 'react'
import './App.css'
import Home from './Components/Home'
import Navbar from './Components/Navbar/'
import './hams.css'
import Bg from './assets/bg.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='main h-[90vh] rounded-b-[50px]'>
        <Navbar/>
        <Home/>
      </div>
    </>
  )
}

export default App
