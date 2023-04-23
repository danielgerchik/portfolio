import React from 'react'
import s from './Navbar.module.scss'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <ul className={s.navbar}>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Work">Work</Link></li>
        <li><Link to="/Services">Services</Link></li>
        <li><Link to="/Contacts">Contacts</Link></li>
    </ul>
  )
}
