import React from 'react'
import s from './Green.module.scss'
import { motion } from "framer-motion"

export default function Green() {
  return (
    <>
    <motion.div initial={{opacity: 0}} animate={{opacity: 1 , transition: {delay:2}}} exit={{opacity: 1, transition: {delay:2}}} className={s.green}>
    </motion.div>
    <motion.div initial={{opacity: 1}} animate={{opacity: 0, y: '100%', transition:{delay: 2}}} className="animationBlock">
    <span>Green</span>
      </motion.div>
    </>
  )
}
