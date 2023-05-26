import React, { useContext, useState } from 'react'
import s from './Burger.module.scss'
import { MyContext } from '../../App'

function Burger() {
  const {isMenuOpen, setMenuOpen} = useContext(MyContext)
  const [isHiddenBurger, setIsHiddenBurger] = useState(false)

  const toggleMenu = e => {
    setMenuOpen(!isMenuOpen)
    setTimeout(e=> {
      setIsHiddenBurger(true)
    }, 2000)
  }

  return (
    <div className={`${s.burger_wrap} ${isMenuOpen ? s.active : ''} ${isHiddenBurger ? s.hidden : ''}`}>
    <button onClick={toggleMenu} className={`${s.burger}`} type='button'>
        <span>me</span>
        <span>nu</span>
    </button>
    </div>
  )
}

export default Burger