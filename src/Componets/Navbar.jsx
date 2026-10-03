import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [showMobileMenu])

  return (
    <div className='absolute left-0 top-0 z-20 w-full'>
      <div className='container mx-auto flex items-center justify-between rounded-b-3xl border border-white/20 bg-slate-950/30 px-6 py-4 backdrop-blur-md md:px-20 lg:px-32'>
        <div className='flex items-center gap-3'>
          <img src={assets.logo} alt='Urban Heavan' className='h-15  w-auto rounded-full bg-white' />
          <span className='hidden text-2xl font-semibold uppercase tracking-[0.3em] text-slate-100/90 sm:inline'>Urban Haven</span>
        </div>
        <ul className='hidden gap-7 text-sm font-medium text-slate-100/90 md:flex'>
          <NavLink to='/' className='cursor-pointer transition hover:text-blue-300'>Home</NavLink>
          <NavLink to='/about' className='cursor-pointer transition hover:text-blue-300'>About</NavLink>
          <NavLink to= '/projects' className='cursor-pointer transition hover:text-blue-300'>Projects</NavLink>
          <NavLink to='/testimonials' className='cursor-pointer transition hover:text-blue-300'>Testimonials</NavLink>
        </ul>
        <NavLink to='/contact' className='hidden rounded-full bg-blue-200 px-6 py-2 text-sm font-semibold text-slate-900 transition hover:bg-blue-300 md:block'>Book a tour</NavLink>
        <img onClick={() => setShowMobileMenu(true)} src={assets.menu_icon} className='w-7 cursor-pointer md:hidden' alt='Open menu' />
      </div>

      <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 overflow-hidden bg-slate-950/95 transition-all`}>
        <div className='flex justify-end p-6'>
          <img onClick={() => setShowMobileMenu(false)} src={assets.cross_icon} className='w-6 cursor-pointer' alt='Close menu' />
        </div>
        <ul className='mt-5 flex flex-col items-center gap-2 px-5 text-lg font-medium text-slate-100'>
          <NavLink onClick={() => setShowMobileMenu(false)} href='#Header' className='inline-block rounded-full px-4 py-2'>Home</NavLink>
          <NavLink onClick={() => setShowMobileMenu(false)} href='#About' className='inline-block rounded-full px-4 py-2'>About</NavLink>
          <NavLink onClick={() => setShowMobileMenu(false)} href='#Projects' className='inline-block rounded-full px-4 py-2'>Projects</NavLink>
          <NavLink onClick={() => setShowMobileMenu(false)} href='#Testimonials' className='inline-block rounded-full px-4 py-2'>Testimonials</NavLink>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
