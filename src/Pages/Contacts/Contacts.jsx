import React, { useEffect, useRef, useState, useContext } from 'react'
import Transition from '../../components/Transition/Transition'
import { motion } from "framer-motion"
import Withgetpath from '../../HOCS/Withgetpath'
import s from './Contacts.module.scss'
import BlobsAnim from '../../components/BlobsAnim/BlobsAnim'
import { MyContext } from '../../App'

function Contacts() {

  const [isClicked, setIsClicked] = useState(false)

  const {isMobile} = useContext(MyContext)

  function onClickLink() {
    setIsClicked(true)
  }

  return (
    <> 
    <motion.div initial={{visibility: 'hidden'}} animate={{visibility: 'visible', transition: {delay: 2}}} exit={{opacity: 1, transition: {delay: 2}}}>
      <div className="container">
      <section className={`${s.contacts} ${isMobile ? s.mb : ''}`}>
      <BlobsAnim isMobile={isMobile} />
      <div className={s.items}>
        <div className={`${s.item} ${isClicked ? s.active : ''}`}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#ffffff" stroke='#000000' stroke-width="10" d="M42.8,-73.6C56,-66.5,67.6,-56.1,76.4,-43.3C85.1,-30.5,91.1,-15.2,91.4,0.2C91.7,15.6,86.3,31.2,77.5,44C68.8,56.8,56.6,66.8,43.1,74C29.6,81.2,14.8,85.5,-0.5,86.4C-15.8,87.3,-31.6,84.7,-45.9,78C-60.2,71.2,-72.9,60.3,-81.4,46.7C-89.8,33,-93.9,16.5,-93.4,0.3C-92.8,-15.8,-87.6,-31.7,-79.1,-45.3C-70.7,-59,-59,-70.5,-45.3,-77.3C-31.5,-84.2,-15.8,-86.4,-0.5,-85.5C14.8,-84.7,29.6,-80.8,42.8,-73.6Z" transform="translate(100 100)" />
</svg>
          <div className={s.link_field}>
          <a onClick={onClickLink} href="https://t.me/danielgerchik" target="_blank">Telegram</a>
          </div>
        </div>
        <div className={s.item}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#ffffff" stroke='#000000' stroke-width="10" d="M42,-70.9C55,-65.4,66.3,-55.1,73.6,-42.5C80.9,-29.9,84.2,-14.9,84.7,0.2C85.1,15.4,82.6,30.9,75.4,43.6C68.2,56.4,56.2,66.6,42.9,75C29.5,83.5,14.8,90.3,0.3,89.8C-14.2,89.3,-28.4,81.6,-40.1,72.1C-51.8,62.7,-61,51.6,-67.2,39.3C-73.4,27,-76.6,13.5,-79.1,-1.5C-81.7,-16.4,-83.5,-32.8,-76.8,-44.3C-70.2,-55.8,-55,-62.4,-40.7,-67.2C-26.5,-72,-13.3,-75.1,0.7,-76.3C14.6,-77.4,29.1,-76.5,42,-70.9Z" transform="translate(100 100)" />
</svg>
<div className={s.link_field}>
  <a href="https://wa.me/79801857531" target="_blank">WhatsApp</a>
</div>
          
        </div>
        <div className={s.item}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#ffffff" stroke='#000000' stroke-width="10" d="M46.3,-77.7C60.6,-72,73.3,-60.8,77.8,-46.9C82.3,-33.1,78.7,-16.5,77.2,-0.9C75.6,14.7,76.1,29.5,70.1,40.7C64.1,52,51.5,59.7,38.7,66.8C26,73.9,13,80.4,-0.3,81C-13.7,81.6,-27.3,76.3,-41.6,70.1C-55.8,63.8,-70.7,56.6,-79.5,44.7C-88.4,32.9,-91.3,16.5,-88.5,1.6C-85.6,-13.2,-77.1,-26.4,-69.4,-40.2C-61.7,-54.1,-54.8,-68.6,-43.4,-76C-32,-83.5,-16,-83.9,0,-83.9C16,-83.9,32,-83.5,46.3,-77.7Z" transform="translate(100 100)" />
</svg>
<div className={s.link_field}>
          <a href="mailto:danielgerchik1@gmail.com">Gmail</a>
          </div>
        </div>
        <div className={s.item}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#ffffff" stroke='#000000' stroke-width="10" d="M37.7,-64.7C49.6,-58.4,60.6,-49.9,66.8,-38.7C73,-27.6,74.4,-13.8,76.8,1.4C79.3,16.6,82.9,33.3,78.6,47.6C74.2,62,62,74.1,47.6,81.1C33.2,88.2,16.6,90.2,1.1,88.3C-14.4,86.4,-28.7,80.5,-42.6,73.2C-56.5,65.8,-70,57,-78,44.5C-86.1,32.1,-88.9,16,-86.4,1.4C-84,-13.2,-76.4,-26.5,-69.4,-40.7C-62.3,-55,-55.9,-70.3,-44.4,-77C-33,-83.6,-16.5,-81.6,-1.8,-78.5C12.9,-75.3,25.7,-71.1,37.7,-64.7Z" transform="translate(100 100)" />
</svg>
<div className={s.link_field}>
          <a href="tel:79801857531">Сall me</a>
          </div>
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