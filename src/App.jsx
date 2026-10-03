import React from 'react'
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import About from './Componets/About'
import Header from './Componets/Header'
import Contact from './Componets/Contact'
import Projects from './Componets/Projects'
import Testimonails from './Componets/Testimonails'
import Footer from './Componets/Footer'
import Navbar from './Componets/Navbar'

const App = () => {
  return (
    <div className='relative min-h-screen w-full overflow-hidden text-slate-100'>
      <div className='pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top, _rgba(56,189,248,0.16),_transparent_45%)]' />
      <ToastContainer position='bottom-right' theme='dark' />
      <Navbar/>
     <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/home" element={<Header />} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/testimonials" element={<Testimonails/>} />
    
     </Routes>
     <Footer/>
    </div>
  )
}

export default App
