import React, { useState } from 'react'
import s from './Blob.module.scss'

const Blob = () => {

  const [isHovered, setIsHovered] = useState(false)

  const onHover = () => {
    setIsHovered(true)
  }

  return (
    <span onMouseOver={onHover} className={`${s.blob} ${isHovered ? s.active : ''}`}></span>
  )
}

export default Blob