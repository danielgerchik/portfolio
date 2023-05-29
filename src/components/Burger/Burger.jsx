import React, { useContext, useState } from 'react'
import s from './Burger.module.scss'
import { MyContext } from '../../App'

function Burger() {
  const {isMenuOpen, setMenuOpen, isClosing, setIsClosing, setIsHiddenBurger, isHiddenBurger, closeMenu} = useContext(MyContext)


  const openMenu = e => {
    setMenuOpen(true)
    setTimeout(e=> {
      setIsHiddenBurger(true)
    }, 2000)
  }

  return (
    <>
      <button onClick={() => closeMenu(0)} type='button' className={`${s.close_btn} ${isMenuOpen ? s.active : ''} ${isClosing ? s.closing : ''}`}>
        <span>close</span>
      </button>
      <div className={`${s.burger_wrap} ${isMenuOpen ? s.active : ''} ${isHiddenBurger ? s.hidden : ''}`}>
      <button onClick={openMenu} className={`${s.burger}`} type='button'>
          <span>me</span>
          <span>nu</span>
      </button>
      </div>
    </>
  )
}

export default Burger