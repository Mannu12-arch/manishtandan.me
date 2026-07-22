import React from 'react'
import Hero from './components/sections/Hero/Hero'
import Navbar from './components/Layout/Navbar'
import About from './components/sections/About/About'
import Skills from './components/sections/Skills/Skills'
const App = () => {
  return (
    <div>
      <Hero />
      <Navbar />
      <About />
      <Skills />
    </div>
  )
}

export default App

