import React from 'react'
import Transition from '../../components/Transition/Transition'
import { motion } from "framer-motion"
import Withgetpath from '../../HOCS/Withgetpath'
import s from './Contacts.module.scss'

function Contacts() {
  return (
    <> 
    <motion.div initial={{visibility: 'hidden'}} animate={{visibility: 'visible', transition: {delay: 2}}} exit={{opacity: 1, transition: {delay: 2}}}>
      <div className="container">
      <section className={s.contacts}>
      <div className={s.items}>
        <div className={s.item}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#ffffff" stroke='#000000' stroke-width="10" d="M42.8,-73.6C56,-66.5,67.6,-56.1,76.4,-43.3C85.1,-30.5,91.1,-15.2,91.4,0.2C91.7,15.6,86.3,31.2,77.5,44C68.8,56.8,56.6,66.8,43.1,74C29.6,81.2,14.8,85.5,-0.5,86.4C-15.8,87.3,-31.6,84.7,-45.9,78C-60.2,71.2,-72.9,60.3,-81.4,46.7C-89.8,33,-93.9,16.5,-93.4,0.3C-92.8,-15.8,-87.6,-31.7,-79.1,-45.3C-70.7,-59,-59,-70.5,-45.3,-77.3C-31.5,-84.2,-15.8,-86.4,-0.5,-85.5C14.8,-84.7,29.6,-80.8,42.8,-73.6Z" transform="translate(100 100)" />
</svg>
          <a href="##">Telegram</a>
        </div>
        <div className={s.item}>
          <a href="##">WhatsApp</a>
        </div>
        <div className={s.item}>
          <a href="##">Gmail</a>
        </div>
        <div className={s.item}>
          <a href="##">+7(980) 185-75-31</a>
        </div>
      </div>
      </section>
      </div>
    </motion.div>
    <Transition currentPage= 'Contacts' nextPage='Home'/>
    </>
  )
}

export default Withgetpath(Contacts)