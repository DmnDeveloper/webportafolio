import React from 'react'
import { FaRegCopyright } from 'react-icons/fa'
import '../styles/components/Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
        <p className='copy-text'> 2022 Damian D, All Rights Reserved.<FaRegCopyright className='icon-copy' /></p>
    </div>
  )
}

export default Footer