import React from 'react'
import { projectsData } from '../assets/assets'
import { motion } from 'framer-motion'

const Projects = () => {
  const duplicatedProjects = [...projectsData, ...projectsData]

  return (
    <motion.div
      initial={{ opacity: 0, x: -300 }}
      transition={{ duration: 2 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className='section-anchor container mx-auto my-20 w-full overflow-hidden px-6 py-4 md:px-20 lg:px-32'
      id='Projects'
    >
      <div className='m-4 text-center'>
        <div className='mb-3 inline-flex rounded-full bg-blue-200 px-3 py-1 text-sm font-semibold text-blue-900'>Featured picks</div>
        <h1 className='mb-2 text-2xl font-bold sm:text-4xl'>Projects <span className='font-light text-slate-400'>we absolutely love</span></h1>
        <p className='mx-auto max-w-2xl text-slate-400'>A few standout spaces where comfort, charm, and modern living all come together beautifully.</p>
      </div>

      <div className='overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/10 p-3 backdrop-blur'>
        <style>{`
          @keyframes marqueeScroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}</style>
        <div
          className='flex w-max gap-8'
          style={{
            animation: 'marqueeScroll 30s linear infinite',
            willChange: 'transform'
          }}
        >
          {duplicatedProjects.map((project, index) => (
            <div key={`${project.title}-${index}`} className='relative w-[85vw] shrink-0 sm:w-105 lg:w-90'>
              <div className='overflow-hidden rounded-[28px] border border-white/20 bg-slate-950/25 p-3 soft-shadow backdrop-blur'>
                <img src={project.image} alt={project.title} className='mb-4 h-72 w-full rounded-[22px] object-cover' />
                <div className='px-2 pb-2'>
                  <div className='mb-2 inline-flex rounded-full bg-blue-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-blue-900'>Hot listing</div>
                  <h2 className='text-xl font-semibold text-slate-100'>{project.title}</h2>
                  <p className='text-sm text-slate-400'>
                    {project.price} <span className='px-1'>|</span> {project.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Projects
