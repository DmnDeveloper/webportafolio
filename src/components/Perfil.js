import React from 'react'
import '../styles/components/Perfil.scss'

const Perfil = (props) => {
  return (
    <div className='perfil'>
      <p>{props.text}</p>
      <div className='btns'>
        {props.cv}
        {props.contact}
      </div>
    </div>
  )
}

export default Perfil