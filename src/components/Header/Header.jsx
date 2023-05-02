import React from 'react'
import s from './Header.module.scss'
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'

export default function Header(props) {
  return (
    <header className={s.header}>
    <div className="container">
      <div className={s.content}>
        <Link to="/">
        <div className={s.logo}>
      <div className={s.rightSign}>
          &copy;
      </div>
      <div className={s.created}>
      <span className={s.createdBy}>Created by</span> <span className={s.name}>Daniel Gerchik</span>
      </div>
      </div>
        </Link>
      <Navbar />
      </div>
      </div>
  </header>
  )
}