import { motion } from 'framer-motion';
export default function HeroAnimation({ children }) {
  return (
    <div className='relative w-full'>
      <div className='relative overflow-hidden w-full h-screen md:h-[80vh]'>
        <motion.div
          className='absolute w-[18em] h-[18em] bg-[#1FBED6] rounded-full opacity-30'
          animate={{
            x: ['80vw', '-5vw', '85vw', '-5vw', '80vw'],
            y: ['-15vh', '-15vh', '55vh', '55vh', '-15vh'],

            delay: 1,
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            type: 'spring',
            stiffness: 100,
          }}
        ></motion.div>
        <motion.div
          className='absolute w-[18em] h-[18em] bg-[#2BAF66] rounded-full opacity-30 '
          animate={{
            x: ['-5vw', '80vw', '-5vw', '80vw', '-5vw'],
            y: ['60vh', '60vh', '-15vh', '-15vh', '60vh'],

            delay: 1,
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            type: 'spring',
          }}
        ></motion.div>
        <motion.div
          className='absolute  w-[18em] h-[18em] bg-[#1FBED6] rounded-full opacity-30'
          animate={{
            x: ['8vw', '-10vw', '-5vw', '8vw'],
            y: ['60vh', '20vh', '15vh', '60vh'],
            backgroundColor: ['#2BAF66', '#1FBED6', '#2BAF66', '#1FBED6'],
            scale: ['80%', '80%', '100%', '80%'],

            delay: 1,
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
            type: 'spring',
          }}
        ></motion.div>
        <motion.div
          className='absolute  w-[18em] h-[18em] bg-[#2BAF66] rounded-full opacity-30 '
          animate={{
            x: ['70vw', '85vw', '80vw', '70vw'],
            y: ['60vh', '20vh', '15vh', '60vh'],

            backgroundColor: ['#1FBED6', '#2BAF66', '#1FBED6', '#1FBED6'],
            delay: 1,

            scale: ['100%', '80%', '100%', '80%'],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
            type: 'spring',
          }}
        ></motion.div>
      </div>
      <div className='absolute w-full h-full min-h-[17rem]  top-0  backdrop-blur-3xl  flex items-center justify-center'>
        {children}
      </div>
    </div>
  );
}
