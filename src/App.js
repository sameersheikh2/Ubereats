import React from 'react'
import Food from './components/Food'
import HeadlinCards from './components/HeadlinCards'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <HeadlinCards/>
      <Food/>
    </div>
  )
}

export default App