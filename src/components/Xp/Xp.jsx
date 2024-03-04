import React from 'react'

export const Xp = ({img,progress,text}) => {
  return (
    <div className='.containerXp'>
        <img src={img} alt="" className='imgXp' />
        <div className='progressText'>
        <progress max='100' value={progress}></progress>
        <p className='textXp'>{text}</p>
        </div>
    </div>
  )
}
