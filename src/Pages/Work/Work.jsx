import React from 'react'
import Transition from '../../components/Transition/Transition'
import { motion } from "framer-motion"

function Work() {
  return (
    <> 
    <motion.div initial={{visibility: 'hidden'}} animate={{visibility: 'visible', transition: {delay: 2}}} exit={{opacity: 1, transition: {delay: 2}}}></motion.div>
    <Transition currentPage= 'Work' nextPage='Services'/>
    </>
  )
}

export default Work