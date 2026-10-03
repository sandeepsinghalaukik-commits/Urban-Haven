import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='w-full overflow-hidden bg-slate-950/95 px-4 pt-10 md:px-20 lg:px-32' id='Footer'>
      <div className='container mx-auto flex flex-col items-start justify-between md:flex-row'>
        <div className='mb-8 w-full md:mb-0 md:w-1/3'>
          <div className='flex items-center gap-3'>
            <img src={assets.logo} alt='urban heaven logo' className='h-15  w-auto bg-white rounded-full object-contain' />
            <span className='text-2xl   text-white font-semibold uppercase tracking-[0.3em]  sm:inline'>Urban Haven</span>
          </div>
          <p className='mt-4 max-w-md text-slate-400'>We help individuals and families find their dream homes with trusted expertise, premium properties, and exceptional customer service. Your perfect home starts here.</p>
        </div>
        <div className='mb-8 w-full md:mb-0 md:w-1/5'>
          <h3 className='mb-4 text-lg font-bold text-white'>Quick links</h3>
          <ul className='flex flex-col gap-2 text-slate-400'>
            <NavLink to='/header' className='transition hover:text-white'>Home</NavLink>
            <NavLink to='/about' className='transition hover:text-white'>About us</ NavLink>
            <NavLink to='/contact' className='transition hover:text-white'>Contact us</NavLink>
            <NavLink to='/projects' className='transition hover:text-white'>Projects</NavLink>
          </ul>
        </div>
        <div className='w-full md:w-1/3'>
          <h3 className='mb-4 text-lg font-bold text-white'>Stay in the loop</h3>
          <p className='mb-4 max-w-sm text-slate-400'>Get fresh listings, local tips, and a little inspiration in your inbox each week.</p>
          <div className='flex flex-col gap-2 sm:flex-row'>
            <input type='email' placeholder='Enter your email' className='w-full rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-slate-300 outline-none focus:border-blue-400 sm:w-auto' />
            <button className='rounded-full bg-blue-300 px-4 py-2 font-semibold text-slate-950'>Subscribe</button>
          </div>
        </div>
      </div>
      <div className='mt-10 border-t border-slate-800 py-4 text-center text-slate-500'>
        Copyright 2026 © Urban Heaven. All rights reserved.
      </div>
    </div>
  )
}

export default Footer
