import React from 'react'
import Header from '../Componets/Header'
import About from '../Componets/About'
import Projects from '../Componets/Projects'
import Testimonails from '../Componets/Testimonails'
import Contact from '../Componets/Contact'

import Footer from '../Componets/Footer'

function HomePage() {
  return (
   <>
    <Header />
      <About />
      <Projects />
      <Testimonails />
      <Contact />
      {/* <Footer /> */}
   </>
  )
}

export default HomePage