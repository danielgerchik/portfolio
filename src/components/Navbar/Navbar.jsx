import React from 'react'
import s from './Navbar.module.scss'
import { Link } from 'react-router-dom'

export default function Navbar() {

  const clickHandle = e => {
    const activeClass = s.active
    Array.from(e.currentTarget.childNodes).forEach(el=> {
      el.classList.remove(activeClass)
    })
    e.target.parentNode.classList.add(activeClass)
  }

  return (
    <>
    <ul onClick={clickHandle} className={s.navbar}>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Work">Work</Link></li>
        <li><Link to="/Services">Services</Link></li>
        <li><Link to="/Contacts">Contacts</Link></li>
    </ul>
    </>
  )
}
