import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'

const Home = () => <h1>Home page</h1>
const AboutUs = () => <h1>About us page</h1>

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
      </Routes>
    </>
  )
}

export default App
