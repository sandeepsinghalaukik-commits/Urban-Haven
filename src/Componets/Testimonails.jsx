import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from 'framer-motion'

const Testimonails = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 300 }}
      transition={{ duration: 3 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className='section-anchor container mx-auto w-full overflow-hidden px-6 py-20 md:px-20 lg:px-32'
      id='Testimonials'
    >
      <div className='m-5 text-center'>
        <div className='mb-3 inline-flex rounded-full bg-fuchsia-100 px-3 py-1 text-sm font-semibold text-fuchsia-700'>Happy memories</div>
        <h1 className='mb-2 text-2xl font-bold sm:text-4xl'>Customer <span className='font-light text-slate-400'>stories</span></h1>
        <p className='mx-auto max-w-2xl text-slate-400'>The kind of experiences that make people smile long after they move in.</p>
      </div>

      <div className='flex flex-wrap justify-center gap-8'>
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className='w-full max-w-85 rounded-3xl border border-white/20 bg-white/90 px-8 py-10 text-center text-slate-700 soft-shadow sm:w-85'>
            <img className='mx-auto mb-4 h-20 w-20 rounded-full object-cover' src={testimonial.image} alt={testimonial.alt} />
            <h2 className='text-xl font-semibold text-slate-900'>{testimonial.name}</h2>
            <p className='mb-4 text-sm text-slate-500'>{testimonial.title}</p>
            <div className='mb-4 flex justify-center gap-1 text-red-500'>
              {Array.from({ length: testimonial.rating }, (item, index) => (
                <img key={index} src={assets.star_icon} alt='' />
              ))}
            </div>
            <p className='text-slate-600'>{testimonial.text}</p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Testimonails
