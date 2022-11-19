import React from 'react'
import { motion } from 'framer-motion'
import foto from '../assets/fotoBN.jpg'
import { ButtonCv, ButtonContact } from '../components/Buttons'
import Perfil from '../components/Perfil'
import '../styles/pages/Home.scss'

const Home = () => {
  return (
    <motion.div className='home'
      initial={{width: 0}}
      animate={{width: '100%'}}
      exit={{x: window.innerWidth, transition: { duration: 0.4 } }}
    >
      <Perfil 
        text={'Mi nombre es Jesús Damián Matín Dávalos. Tengo 3 años como desarrollador web Front-end.\
        Me considero una persona sumamente autodidacta y proactiva siempre en busca de nuevos retos que me permitan conocer y mejorar mis habilidades.\
        Me encuentro en busca de nuevas oportunidades para póder seguir creciendo profesinalmente a la pár de póder aportar lo mejor de mi al equipo de trabajo.'}
        cv={<ButtonCv />}
        contact={<ButtonContact />}
      />
      
      <div className='foto'>
        <img  src={foto} alt='' />
      </div> 
    </motion.div>
  )
}

export default Home