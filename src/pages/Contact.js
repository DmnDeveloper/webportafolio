import React from 'react'
import { motion } from 'framer-motion'
import FormContact from '../components/FormContact'
import Perfil from '../components/Perfil'
import {ButtonCv} from '../components/Buttons'
import '../styles/pages/Contact.scss'

const Contact = () => {
  return (
    <motion.div className="contact"
      initial={{width: 0}}
      animate={{width: '100%'}}
      exit={{x: window.innerWidth, transition: { duration: 0.4 } }}
    >
      <Perfil 
        text={'Muchas gracias por tu visita, esto es un poco de mi experiencia como\
        desarrollador front-end.Puedes dejarme un correo para cualquier\
        duda, comentario, etc. Me pondre en contacto en cuanto me sea posible '}
        cv={<ButtonCv />}
      />

      <div className="form-container">
        <FormContact />
      </div>
    </motion.div>
  )
}

export default Contact