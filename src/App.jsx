import { useState } from 'react'
import './App.css'
import Navbar from './Components/Header/Navbar'
import Overview from './Components/Home/Overview'
import Footer from './Components/Footer/Footer'
import Routing from './Utils/Routing'


function App() {
  
  
  return (
    <div className='app-design'>
      <Navbar />
      <Overview />
      <Footer />
    </div>
  )
}

export default App
