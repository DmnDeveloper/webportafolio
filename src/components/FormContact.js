import React from 'react'
import { useFormik } from 'formik'
import toast, { Toaster } from 'react-hot-toast'
import emailjs from '@emailjs/browser'
import {IoMdSend} from 'react-icons/io'
import * as Yup from 'yup'
import '../styles/components/FormContact.scss'

const FormContact = () => {
  const formik = useFormik({
    initialValues: {
      name: ' ',
      correo: ' ',
      number: ' ',
      asunto: ' '
    },
    validationSchema: Yup.object({
      name: Yup.string()
      .required('campo obligatorio'),
      email: Yup.string()
      .email('correo no valido')
      .required('campo obligatorio'),
      number: Yup.number()
      .typeError('debes ingresar unicamente numeros')
      .min(8, 'min 8 digitos')
      .max(10, 'max 10 digitos'),
      asunto: Yup.string()
      .required('campo obligatorio'),
    }),
    onSubmit: values => {
      emailjs.send('service_wk7oipo', 'template_p1om6xp', values, 'ByxGvfOOiYG4nJvWS')
           .then((response) => {
           console.log("SUCCESS!", response.status, response.text);
           toast.success('Enviado Correctamente', {
            duration: 10000,
           })
          const valuesAll = (JSON.stringify(values, null, 2))
          console.log(valuesAll)
         })
          .catch((err) => {
          console.log("FAILED...", err);
          toast.error('UP! Algo salio mal')
           });
    }
  })
  return (
    <form className='form' onSubmit={formik.handleSubmit}>
      <label className='item'>
        *Nombre:
        <input
          className='name'
          name='name'
          type='text'
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.errors.name}
        />
      </label>

      <label className='item'>
        *Correo:
        <input 
          className='correo'
          name='correo'
          type='text'
          value={formik.values.correo}
          onChange={formik.handleChange}
          error={formik.errors.correo}
        />
      </label>

      <label className='item'>
        Telefono:
        <input 
          className='number'
          name='number'
          type='text'
          value={formik.values.number}
          onChange={formik.handleChange}
          error={formik.errors.number}
        />
      </label>

      <label className='item'>
        Asunto:
        <textarea 
          className='asunto'
          name='number'
        />
      </label>

      <button type='submit'>
        ENVIAR<IoMdSend color='#981f1f' size='40px'/>
      </button>

      <Toaster 
        containerStyle={{
          position: 'relative', 
        }}
        toastOptions={{
          success: {
            style: {
            border: '1px solid green',
            minWidth: '350px',
            }
          }
        }}/>
    </form>
  )
}

export default FormContact