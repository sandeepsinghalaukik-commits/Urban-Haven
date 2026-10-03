import React from 'react'
import Navbar from './Navbar'

const Navlogo = () => {
  return (
    <div>
        <div className='flex items-center gap-3'>
            <img src={assets.logo} alt='Urban Heavan' className='h-15  w-auto rounded-full bg-white' />
            <span className='hidden text-2xl font-semibold uppercase tracking-[0.3em] text-slate-100/90 sm:inline'>Urban Haven</span>
        </div>
    </div>
  )
}

export default Navlogo