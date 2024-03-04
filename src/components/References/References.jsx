import React from 'react'
import './References.css'

export const References = ({name,charge,phone,email}) => {
  return (
    <div className='containerReferences'>
      <div className='names'><p className='name'>Nombre:</p><p className='resultName'>{name}</p></div>
      <div className='ocupation'><p className='charge'>Cargo:</p><p className='resultCharge'>{charge}</p></div>
      <div className='cell'><p className='phone'>Teléfono:</p><p className='resultPhone'>{phone}</p></div>
      <div className='email'><p className='email'>Correo electrónico:</p><p className='resultEmail'>{email}</p></div>
    </div>
  )
}
