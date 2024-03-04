import React from 'react'
import { NavLink } from 'react-router-dom'


export const Items = ({content,route}) => <li><NavLink to={route} className='linkMenu'>{content}</NavLink></li>