import React, { useEffect, useRef } from 'react'
import s from './Home.module.scss'
import Transition from '../../components/Transition/Transition'
import { motion } from "framer-motion"
import Withgetpath from '../../HOCS/Withgetpath'

export const Home = (props) => {

const spans_wrap = useRef(null)
const title = useRef(null)
const text = useRef(null)

function moveText(e) {

  let x = e.clientX / window.innerWidth
  let y = e.clientY / window.innerHeight

  title.current.style.transform =  `skew(-${x * 5}deg, -${y * 5}deg)` 
  text.current.style.transform =  `skew(-${x * 1.5}deg, -${y * 1.5}deg)` 

}

useEffect(()=> {
  spans_wrap.current.childNodes.forEach(element => {
    setInterval(()=> {
      if(element.classList.contains(s.active)) {
        element.classList.remove(s.active)
      }
      else {
        element.classList.add(s.active)
      }
    }, 4000)
    
  }) 
},[])

  return (
    <>
    <motion.div onMouseMove={moveText} className={s.firstScreen} initial={{visibility: 'hidden'}} animate={{visibility: 'visible', transition: {delay: 2}}} exit={{opacity: 1, transition: {delay: 2}}}>
      <div className="container">
        <div className={s.textContent}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path className={s.bgCircle} fill="#000000" d="M43.2,-70.2C56.2,-67.2,67.3,-56.2,76.2,-43.2C85.1,-30.2,91.8,-15.1,88.7,-1.8C85.7,11.6,72.8,23.1,62.9,34.4C53,45.7,46.1,56.7,36,62.1C26,67.5,13,67.3,-1,69C-15,70.7,-30,74.3,-39.8,68.7C-49.6,63.2,-54.2,48.6,-59.7,35.6C-65.3,22.6,-71.7,11.3,-71.7,0C-71.7,-11.3,-65.3,-22.7,-58,-32.6C-50.7,-42.5,-42.6,-51,-32.7,-55.9C-22.9,-60.8,-11.5,-62.1,1.8,-65.2C15,-68.3,30.1,-73.2,43.2,-70.2Z" transform="translate(100 100)" />
</svg>
<svg className={s.secondBg} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#000000" d="M26.4,-47.1C32.3,-42.4,33.7,-31.3,35.9,-22.4C38.1,-13.5,41,-6.8,37.4,-2.1C33.7,2.5,23.5,5.1,20.6,12.8C17.7,20.5,22.2,33.4,20,43C17.8,52.7,8.9,59.1,0.7,58C-7.6,56.8,-15.2,48.1,-19.4,39.7C-23.7,31.2,-24.7,23,-31.1,16.4C-37.6,9.9,-49.6,4.9,-49.7,-0.1C-49.9,-5.1,-38.3,-10.3,-31.6,-16.4C-24.9,-22.5,-23,-29.6,-18.6,-35.1C-14.1,-40.6,-7.1,-44.6,1.6,-47.4C10.3,-50.2,20.6,-51.8,26.4,-47.1Z" transform="translate(100 100)" />
</svg>
        <h1 ref={title} className={s.mainText}><span ref={spans_wrap} className={s.popup_text}><span className={s.active}>Effective</span><span>Modern</span></span><br /> site building</h1>
        <h2 ref={text} className={s.description}>Front end developement with a particular passion for creativity, communication and attention to details.</h2>
        </div>
      </div>
    </motion.div>
    <Transition currentPage= 'Home' nextPage='About'/>
    </>
  )
}

export default Withgetpath(Home)