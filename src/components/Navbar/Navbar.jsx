import React, { useContext, useEffect, useRef } from 'react'
import s from './Navbar.module.scss'
import { Link } from 'react-router-dom'
import { MyContext } from '../../App'

export default function Navbar() {
  const activeStyle = s.active
  const {currentPath} = useContext(MyContext)
  
  const list = useRef(null)
  
  useEffect(()=> {
   
    Array.from(list.current.childNodes).forEach(el => {

      el.classList.remove(activeStyle)

      if(el.childNodes[0].getAttribute('href') == currentPath) {
        el.classList.add(activeStyle)
      }
      
    })
  }, [currentPath])

  return (
    <>
    <ul ref={list} className={s.navbar}>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Work">Work</Link></li>
        <li><Link to="/Services">Services</Link></li>
        <li><Link to="/Contacts">Contacts</Link></li>
    </ul>
    </>
  )
}
