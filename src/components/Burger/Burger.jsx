import React from 'react'
import s from './Burger.module.scss'

function Burger() {
  return (
    <button className={s.burger} type='button'>
        <span>me</span>
        <span>nu</span>
    </button>
  )
}

export default Burger