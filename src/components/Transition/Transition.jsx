import React from 'react'
import { motion } from "framer-motion"
import s from './Transition.module.scss'
import { Link } from 'react-router-dom'

const Transition = () => {
  return (
    <Link className={s.link} to='/'>
    <motion.div className={s.animationBlock} initial={{visibility: 'visible'}} exit={{visibility: 'hidden'}}>
    <span>Home</span>
    <span>Home</span>
      </motion.div>
      </Link>
  )
}

export default Transition