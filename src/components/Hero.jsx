/* eslint-disable */
import {motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import WritingTextEffect from './WritingTextEffect';
// import { Link } from 'react-router-dom';
// import {Typed} from 'react-typed'
// import { useTypewriter, Cursor} from 'react-simple-typewriter'
import {myPic} from '../assets'

const words=['Fullstack Developer', 'Java Developer', 'React Developer'];

const Hero = () => {

  
  return (
    <section className='relative w-full h-screen mx-auto'>
{/*       
      <div className='absolute m-3 h-24 w-24 left-40 top-72 rounded-full bg-secondary'>
        <img 
        src={myPic} alt='' 
        className='h-full w-full rounded-full object-cover mix-blend-color-burn'/>
      </div> */}
      
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
          <div className=' flex flex-col justify-center items-center mt-5'>
              <div className='mb-1 h-24 w-24 left-40 top-72 rounded-full bg-secondary'>
                <img 
                src={myPic} alt='' 
                className='h-full w-full rounded-full object-cover mix-blend-color-burn'/>
              </div>
              <div className=' h-5 w-5 rounded-full bg-[#915eff]'/>

              <div className=' w-1 sm:h-80 h-40 violet-gradient '/>

          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}> Hi, I'm <span className=' text-[#915eff]'>Sundram</span> </h1>
            <h1 className={`${styles.heroSubText} text-white`}> <WritingTextEffect words={words}/></h1>
            {/* <p className={`${styles.heroSubText} mt-2 text-white-100`}> I Develop 3D visuals, user <br className='sm:block hidden'/>interface and web application </p> */}
          </div>

      </div>

      <ComputersCanvas/>

      <div className=' absolute sm:bottom-4 bottom-4 w-full flex justify-center items-center'>
          <a 
            href="#about"
            className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'
             >
              <motion.div 
                animate={{y:[0, 24, 0]}}
                transition={{ duration: 2, repeat: Infinity, repeatType: 'loop'}}
                className='h-3 w-3 bg-secondary rounded-full mb-1'
              />
              
          </a>
      </div>
    </section>
  )
}

export default Hero