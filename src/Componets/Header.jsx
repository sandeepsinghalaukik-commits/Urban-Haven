import React from 'react'
import Navbar from './Navbar'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <div className='section-anchor relative mb-4 flex min-h-screen w-full items-center overflow-hidden bg-cover bg-center' id='Header'>
       <div className='absolute inset-0 bg-linear-to-r from-slate-950/80 via-slate-950/55 to-slate-900/30' />
      <div className='floaty absolute right-10 top-24 h-44 w-44 rounded-full bg-cyan-500/20 blur-3xl' />
      <div className='floaty absolute bottom-16 left-8 h-40 w-40 rounded-full bg-fuchsia-500/20 blur-3xl' /> 
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='relative z-10 container mx-auto px-6 py-4 text-center text-white md:px-20 lg:px-32'
      >
        <div className='mx-auto mb-6 inline-flex items-center rounded-full border border-blue-100/40 bg-blue-400/10 px-4 py-4 mt-25 text-sm font-medium text-blue-100'> Curated luxury living with a joyful twist</div>
        <h2 className='mx-auto inline-block max-w-3xl pt-8 text-4xl font-semibold sm:text-6xl md:text-[82px]'>Discover homes that feel like a celebration</h2>
        <p className='mx-auto mt-6 max-w-2xl text-lg text-slate-200/90'>From bright rooftops to cozy retreats, we help you find the kind of place that makes everyday life feel a little more magical</p>
        <div className='mt-10 flex flex-wrap items-center justify-center gap-4'>
          <a href='#Projects' className='rounded-full border border-white/70 bg-white/10 px-8 py-3 font-medium transition hover:bg-white/20'>Explore homes</a>
          <a href='#Contact' className='rounded-full bg-blue-300 px-8 py-3 font-semibold text-slate-950 transition hover:bg-blue-400'>Let's talk</a>
        </div>
        <div className='mt-10 flex flex-wrap justify-center gap-3 text-sm text-slate-100/90'>
          <span className='rounded-full border border-white/20 bg-slate-900/30 px-4 py-2'>🏡 120+ dream listings</span>
          <span className='rounded-full border border-white/20 bg-slate-900/30 px-4 py-2'>✨ Personal guidance</span>
          <span className='rounded-full border border-white/20 bg-slate-900/30 px-4 py-2'>🌟 Fast, friendly support</span>
        </div>
      </motion.div>
    </div>
  )
}

export default Header
