import React from 'react'
import logo from '../../assets/logosena.png'
import { Imgs } from '../Imgs/Imgs'
import './Tittle.css'

export const Tittle = ({title}) => {
  return (
    <div className='containerTittle'>
      <div className='containerTittleImg'>
      <div className='containerImg'>
      <Imgs img={logo} />
      </div>
      <h1>{title}</h1>
      </div>
      <hr className='hrTittle' />
    </div>
  )
}
