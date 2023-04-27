import React from 'react'
import Transition from '../../components/Transition/Transition'
import { motion } from "framer-motion"

function Services() {
  return (
    <> 
    <motion.div initial={{visibility: 'hidden'}} animate={{visibility: 'visible', transition: {delay: 2}}} exit={{opacity: 1, transition: {delay: 2}}}></motion.div>
    <Transition currentPage= 'Services' nextPage='Contacts'/>
    </>
  )
}

export default Services