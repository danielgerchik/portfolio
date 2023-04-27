import React from 'react'
import Transition from '../../components/Transition/Transition'
import { motion } from "framer-motion"

function Contacts() {
  return (
    <> 
    <motion.div initial={{visibility: 'hidden'}} animate={{visibility: 'visible', transition: {delay: 2}}} exit={{opacity: 1, transition: {delay: 2}}}>ccc</motion.div>
    <Transition currentPage= 'Contacts' nextPage='Home'/>
    </>
  )
}

export default Contacts