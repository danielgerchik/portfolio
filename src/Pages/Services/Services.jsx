import React, { createRef, useEffect, useRef } from 'react'
import Transition from '../../components/Transition/Transition'
import { motion } from "framer-motion"
import Withgetpath from '../../HOCS/Withgetpath'
import s from './Services.module.scss'

function Services() {

  const bgNumberOne = useRef(null)
  const bgNumberTwo = useRef(null)

  function moveBg(e) {

    let x = e.clientX / window.innerWidth
    let y = e.clientY / window.innerHeight

    bgNumberOne.current.style.transform =  `translate(-${x * 50}px, -${y * 50}px) translate(-50%, -50%)` 
    bgNumberTwo.current.style.transform =  `translate(-${x * 50}px, -${y * 50}px) translate(-50%, -50%)` 

  }

  return (
    <> 
    <motion.div initial={{visibility: 'hidden'}} animate={{visibility: 'visible', transition: {delay: 2}}} exit={{opacity: 1, transition: {delay: 2}}}>

    <section onMouseMove={moveBg} className={s.services}>
      <div className="container">
        <div className={s.content}>
          <div className={s.halfscreen}>
            <span ref={bgNumberOne} className={s.bg_number}>01</span>
            <div className={s.label}>Completely make any website</div>
          </div>
          <div className={s.halfscreen}>
          <span ref={bgNumberTwo} className={s.bg_number}>02</span>
            <div className={s.label}>Implement a CMS system</div>
          </div>
        </div>
      </div>
    </section>

    </motion.div>
    <Transition currentPage= 'Services' nextPage='Contacts'/>
    </>
  )
}

export default Withgetpath(Services)