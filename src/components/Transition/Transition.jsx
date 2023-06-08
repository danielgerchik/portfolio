import React, { useContext, useEffect, useRef, useState } from 'react'
import { motion } from "framer-motion"
import s from './Transition.module.scss'
import { Link } from 'react-router-dom'
import { MyContext } from '../../App'

const Transition = ({currentPage, nextPage}) => {

  const {hasClickedOnBubble, setHasClickedOnBubble, contacts, home, closeMenu, isMenuOpen} = useContext(MyContext)
  
  const [pageName ,setPageName] = useState(currentPage)

  const bubbleDiv = useRef(null)
  const lastSpan = useRef(null)

  useEffect(()=> {
    setTimeout(()=> {
      setPageName(nextPage)
      setHasClickedOnBubble(false)
    }, 700)
  }, [])

  useEffect(()=> {
    bubbleDiv.current.style.animation = `${window.innerWidth > 767 ? s.circle : s.circle_mobile} 2.1s cubic-bezier(0.68,-0.55,0.265,1.55) 0.3s`
    lastSpan.current.style.color = '#fff'
    if (contacts && home || isMenuOpen) {
      bubbleDiv.current.style.animation = `${window.innerWidth > 767 ? s.circle_wh : s.circle_wh_mobile} 2.1s cubic-bezier(0.68,-0.55,0.265,1.55) 0.3s`
      lastSpan.current.style.color = '#000'
    }
  }, [contacts, home])


const clickBubble = e => {
  setHasClickedOnBubble(true)
  if(isMenuOpen) {
    closeMenu(1000)
  }
}

  return (
    <Link onClick={clickBubble} className={hasClickedOnBubble ? s.clicked : ''} to={nextPage === 'Home' ? '/' : '/' + nextPage}>
    <motion.div ref={bubbleDiv} className={`${s.animationBlock} ${contacts && home ? s.wh : ''}`} initial={{visibility: 'visible'}} exit={{visibility: 'hidden'}}>
    <motion.span exit={{visibility: 'hidden'}}>{pageName}</motion.span>
    <motion.span ref={lastSpan} exit={{visibility: 'hidden'}}>{currentPage}</motion.span>
      </motion.div>
      </Link>
  )
}

export default Transition