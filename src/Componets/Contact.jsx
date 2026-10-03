import React from 'react'
import { toast } from 'react-toastify'
import { motion } from 'framer-motion'

const Contact = () => {
  const [result, setResult] = React.useState('')

  const onSubmit = async (event) => {
    event.preventDefault()
    setResult('Sending....')
    const formData = new FormData(event.target)
    

    formData.append('access_key', "1e7bfa0c-6712-43e1-a752-4c2bcabbffb8")

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    })

    const data = await response.json()

    if (data.success) {
      setResult('')
      toast.success('Form submitted successfully')
      event.target.reset()
    } else {
      console.log('Error', data)
      toast.error(data.message)
      setResult('')
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -300 }}
      transition={{ duration: 2 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className='section-anchor w-full overflow-hidden px-6 py-20 text-center lg:px-32'
      id='Contact'
    >
      <div className='mx-auto max-w-3xl rounded-4xl border border-white/20 bg-slate-950/30 p-8 text-slate-100 soft-shadow backdrop-blur md:p-12'>
        <div className='mb-3 inline-flex rounded-full bg-blue-200 px-3 py-1 text-sm font-semibold text-blue-900'>Let's create something fun</div>
        <h1 className='m-2 text-2xl font-bold sm:text-4xl'>Contact <span className='font-light text-slate-400'>with us</span></h1>
        <p className='mx-auto mb-10 max-w-xl text-slate-400'>Ready to make a move? Share a few details and we'll help you find a place that feels just right.</p>

        <form onSubmit={onSubmit} className='mx-auto max-w-2xl pt-2 text-left text-slate-300'>
          <div className='flex flex-wrap gap-4'>
            <div className='w-full md:w-[calc(50%-0.5rem)]'>
              <label className='mb-2 block text-sm'>Your Name</label>
              <input className='mt-2 w-full rounded-2xl border border-slate-600 bg-slate-900/70 px-4 py-3 text-slate-100 outline-none ring-0 transition focus:border-blue-400' type='text' name='Name' placeholder='Your Name' required />
            </div>
            <div className='w-full md:w-[calc(50%-0.5rem)]'>
              <label className='mb-2 block text-sm'>Your Email</label>
              <input className='mt-2 w-full rounded-2xl border border-slate-600 bg-slate-900/70 px-4 py-3 text-slate-100 outline-none transition focus:border-blue-400' type='email' name='Email' placeholder='Your Email' required />
            </div>
          </div>
          <div className='my-6 text-left'>
            <label className='mb-2 block text-sm'>Message</label>
            <textarea className='mt-2 h-48 w-full resize-none rounded-2xl border border-slate-600 bg-slate-900/70 px-4 py-3 text-slate-100 outline-none transition focus:border-blue-400' name='Message' placeholder='Tell us about your dream home' required></textarea>
          </div>
          <button className='mb-4 rounded-full bg-blue-300 px-8 py-3 font-semibold text-slate-950 transition hover:bg-blue-400'>
            {result || 'Send Message'}
          </button>
        </form>
      </div>
    </motion.div>
  )
}

export default Contact
