import React, { useContext, useEffect, useRef, useState } from 'react'
import s from './Navbar.module.scss'
import { Link } from 'react-router-dom'
import { MyContext } from '../../App'

export default function Navbar() {
  const {currentPath, isMenuOpen} = useContext(MyContext)

  const [isInitial, setIsInitial] = useState(false)
  
  const list = useRef(null)
  useEffect(()=> {
    if (isMenuOpen) {
      setIsInitial(true)
      setTimeout(e=> {
        setIsInitial(false)
      }, 2100)
    } else {
      setIsInitial(false)
    }
  }, [isMenuOpen])
  useEffect(()=> {   
    Array.from(list.current.childNodes).forEach(el => {

      el.classList.remove(s.active)

      if(el.childNodes[0].getAttribute('href') == currentPath) {
        el.classList.add(s.active)
      }
      
    })
  }, [currentPath])

  return (
    <>
    <ul ref={list} className={`${s.navbar} ${isMenuOpen ? s.active : ''} ${isInitial ? s.initial : ''}`}>
        <li><Link data-title='About' to="/About">About</Link></li>
        <li><Link data-title='Work' to="/Work">Work</Link></li>
        <li><Link data-title='Services' to="/Services">Services</Link></li>
        <li><Link data-title='Contacts' to="/Contacts">Contacts</Link></li>
    </ul>
    </>
  )
}
