import React, { useContext, useEffect, useState } from 'react'
import { motion } from "framer-motion"
import s from './Transition.module.scss'
import { Link } from 'react-router-dom'
import { MyContext } from '../../App'

const Transition = ({currentPage, nextPage}) => {

  const {hasClickedOnBubble, setHasClickedOnBubble} = useContext(MyContext)
  

    


  const [pageName ,setPageName] = useState(currentPage)

  useEffect(()=> {
    setTimeout(()=> {
      setPageName(nextPage)
      setHasClickedOnBubble(false)
    }, 700)
  }, [])

  return (
    <Link onClick={()=> setHasClickedOnBubble(true)} className={hasClickedOnBubble ? s.clicked : ''} to={nextPage === 'Home' ? '/' : '/' + nextPage}>
    <motion.div className={s.animationBlock} initial={{visibility: 'visible'}} exit={{visibility: 'hidden'}}>
    <motion.span exit={{visibility: 'hidden'}}>{pageName}</motion.span>
    <motion.span exit={{visibility: 'hidden'}}>{currentPage}</motion.span>
      </motion.div>
      </Link>
  )
}

export default Transition