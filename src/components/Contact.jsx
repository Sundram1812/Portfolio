import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser'

import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { logo } from '../assets';



const Contact = () => {

  const formRef=useRef();

  const [form, setForm]= useState({
    name: '',
    email: '',
    message: ''
  })

  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setForm({...form, [name]: value})
  }

  const handleSubmit =(e) =>{
    e.preventDefault();
    setLoading(true)

    // template_u1kbmnk

// service_jlj5zv8

// IsIjU90yijN--uNF3
    emailjs.send(
      'service_jlj5zv8', 
      'template_u1kbmnk',
      {
        from_name: form.name,
        to_name: 'Sundram kumar',
        from_email: form.email,
        to_email: 'sundram62048@gmail.com',
        message: form.message
      },
      'IsIjU90yijN--uNF3'

    ).then(()=>{
      setLoading(false);
      alert('Thank you. I will get back to you as soon as possible');
      setForm({
        name: '',
        email: '',
        message: ''
      })
    }, (error)=>{
      setLoading(false)
      console.log('error')
      alert('Something went wrong.')
    })

    
  }

  return (
    <div className='xl:mt-12 xl:flex-row flex flex-col-reverse gap-10 overflow-hidden'>
        <motion.div
          variants={slideIn('left', "tween", 0.2, 1)}
          className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>
          <form 
            ref={formRef}
            onSubmit={handleSubmit}
          >
            <label className='flex flex-col mt-2'>
              <span className='font-medium text-wrap mb-4'>Your Name</span>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary rounded-lg border-none font-medium'
              />
            </label>

            <label className='flex flex-col mt-2'>
              <span className='font-medium text-wrap mb-4'>Your Email</span>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="What's your Email"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary rounded-lg border-none font-medium'
              />
            </label>

            <label className='flex flex-col mt-2'>
              <span className='font-medium text-wrap mb-4'>Your Message</span>
              <textarea
                rows="7"
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say ?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary rounded-lg border-none font-medium'
              />
            </label>

            <button
              type='submit'
              className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl mt-3'
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn('right', "tween", 0.2, 1)}
          className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
        >
            <EarthCanvas/>
        </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact");