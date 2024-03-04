import React from 'react'

export const Name = ({content = "hi",style}) => {
  return (
      <h2 className={style} >{content}</h2>
  )
}