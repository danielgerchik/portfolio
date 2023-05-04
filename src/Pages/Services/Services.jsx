import React from 'react'
import Transition from '../../components/Transition/Transition'
import { motion } from "framer-motion"
import Withgetpath from '../../HOCS/Withgetpath'
import s from './Services.module.scss'

function Services() {
  return (
    <> 
    <motion.div initial={{visibility: 'hidden'}} animate={{visibility: 'visible', transition: {delay: 2}}} exit={{opacity: 1, transition: {delay: 2}}}>

    <section className={s.services}>
      <div className="container">
        <div className={s.content}>
          <div className={s.halfscreen}><div className={s.label}>Completely make any website</div></div>
          <div className={s.halfscreen}><div className={s.label}>Implement a CMS system</div></div>
        </div>
      </div>
    </section>

    </motion.div>
    <Transition currentPage= 'Services' nextPage='Contacts'/>
    </>
  )
}

export default Withgetpath(Services)