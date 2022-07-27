import React from 'react'
import HeadlinCards from './components/HeadlinCards'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <HeadlinCards/>
    </div>
  )
}

export default App