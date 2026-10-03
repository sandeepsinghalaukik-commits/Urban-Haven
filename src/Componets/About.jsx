import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 300 }}
      transition={{ duration: 2 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className='section-anchor container mx-auto w-full overflow-hidden px-6 py-24 md:px-20 lg:px-32'
      id='About'
    >
      <div className='grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]'>
        <div className='rounded-4xl border border-slate-200/40 bg-white/90 p-8 text-slate-700 soft-shadow md:p-10'>
          <div className='m-5 inline-flex rounded-full bg-blue-200 px-3 py-1 text-sm font-semibold text-blue-800'>Why clients love us</div>
          <h1 className='mb-3 text-2xl font-bold sm:text-4xl'>About <span className='font-light text-slate-500'>our playful approach</span></h1>
          <p className='mb-6 max-w-xl text-slate-600'>We blend polished design, clear guidance, and a little sparkle to make buying or selling feel exciting rather than stressful.</p>
          <div className='mb-8 grid grid-cols-2 gap-4'>
            <div className='rounded-2xl bg-slate-50 p-4'>
              <p className='text-3xl font-semibold text-slate-900'>10+</p>
              <p className='text-sm text-slate-500'>Years of experience</p>
            </div>
            <div className='rounded-2xl bg-slate-50 p-4'>
              <p className='text-3xl font-semibold text-slate-900'>12+</p>
              <p className='text-sm text-slate-500'>Projects delivered</p>
            </div>
            <div className='rounded-2xl bg-slate-50 p-4'>
              <p className='text-3xl font-semibold text-slate-900'>20+</p>
              <p className='text-sm text-slate-500'>Million sqft inspired</p>
            </div>
            <div className='rounded-2xl bg-slate-50 p-4'>
              <p className='text-3xl font-semibold text-slate-900'>25+</p>
              <p className='text-sm text-slate-500'>Happy buyers</p>
            </div>
          </div>
          <ul className='mb-8 space-y-3 text-sm text-slate-600'>
            <li>• Thoughtful recommendations that fit your lifestyle</li>
            <li>• Stunning spaces with real comfort and personality</li>
            <li>• Friendly support from first visit to final handover</li>
          </ul>
          <NavLink to='/contact' className='inline-flex rounded-full bg-blue-600 px-6 py-2.5 font-semibold text-white transition hover:bg-blue-700'>Learn more</NavLink>
        </div>

        <div className='rounded-4xl border border-white/20 bg-slate-950/30 p-4 soft-shadow backdrop-blur'>
          <img src={assets.brand_img} alt='Bright modern property interior' className='w-full h-162 rounded-3xl' />
        </div>
      </div>
    </motion.div>
  )
}

export default About
