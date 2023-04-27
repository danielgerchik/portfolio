import React from 'react'
import s from './About.module.scss'
import Transition from '../../components/Transition/Transition'
import { motion } from "framer-motion"


export const About = (props) => {

  return (
    <> 
    <motion.div initial={{visibility: 'hidden'}} animate={{visibility: 'visible', transition: {delay: 2}}} exit={{opacity: 1, transition: {delay: 2}}}></motion.div>
    <Transition currentPage= 'About' nextPage='Work'/>
    </>
  )
}
