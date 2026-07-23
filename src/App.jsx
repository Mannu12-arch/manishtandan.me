import React from 'react'
import Hero from './components/sections/Hero/Hero'
import Navbar from './components/Layout/Navbar'
import About from './components/sections/About/About'
import Skills from './components/sections/Skills/Skills'
import Projects from './components/sections/Projects/Projects'
const App = () => {
  return (
    <div>
      <Hero />
      <Navbar />
      <About />
      <Skills />
      <Projects />
    </div>
  )
}

export default App

