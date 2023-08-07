import React, { useRef } from 'react'
import Transition from '../../components/Transition/Transition'
import { motion } from "framer-motion"
import Withgetpath from '../../HOCS/Withgetpath'
import s from './Work.module.scss'
import WorkItem from '../../components/WorkItem/WorkItem'

function Work() {

  const bgBlobFirst = useRef(null)
  const bgBlobSecond = useRef(null)
  
  function moveBg(e) {
    let y = e.clientY / window.innerHeight
    
    bgBlobSecond.current.style.transform =  `rotate(-${y * 50}deg) rotate(20deg)` 
    bgBlobFirst.current.style.transform =  `translateX(-${y * 30}px)` 

  }

  return (
    <> 
    <motion.div onMouseMove={moveBg} initial={{visibility: 'hidden'}} animate={{visibility: 'visible', transition: {delay: 2}}} exit={{opacity: 1, transition: {delay: 2}}}>

    <section className={s.work}>
      <div className="container">
        <div className={s.content}>
        <div className={s.items}>
          <svg ref={bgBlobFirst} className={s.blob_bg} id={s.blob1} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#000000" d="M41,-70.3C49.5,-66.2,50.2,-47.8,51.5,-33.7C52.9,-19.6,54.9,-9.8,58.6,2.1C62.2,14,67.4,27.9,63.5,37.6C59.5,47.2,46.5,52.5,34.4,55.6C22.3,58.7,11.1,59.6,-1.4,62C-13.9,64.5,-27.8,68.4,-41.1,66C-54.4,63.6,-67.1,54.8,-69.7,42.7C-72.2,30.7,-64.8,15.3,-61,2.2C-57.3,-11,-57.3,-22.1,-52.7,-30.6C-48,-39.1,-38.8,-45.1,-29.2,-48.6C-19.7,-52.2,-9.8,-53.3,3.2,-58.9C16.3,-64.5,32.6,-74.5,41,-70.3Z" transform="translate(100 100)" />
          </svg>
          <svg ref={bgBlobSecond} className={s.blob_bg} id={s.blob2} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
         <path fill="#000000" d="M45.8,-76.9C60.2,-71.1,73.2,-60.4,73.1,-46.8C73.1,-33.1,60.1,-16.6,59.6,-0.3C59.1,16,71.1,32,70.1,43.9C69.2,55.8,55.2,63.6,41.4,71C27.5,78.4,13.7,85.4,3.5,79.4C-6.8,73.4,-13.7,54.5,-20.2,42.9C-26.8,31.2,-33,27,-38.5,21C-44,15.1,-48.8,7.6,-48.3,0.3C-47.9,-7,-42.3,-14.1,-40.3,-26.2C-38.4,-38.2,-40.1,-55.3,-34,-65.9C-27.9,-76.4,-13.9,-80.4,0.9,-81.9C15.7,-83.5,31.5,-82.7,45.8,-76.9Z" transform="translate(100 100)" />
         </svg>
          <WorkItem name={'Rusmetal'} url={'https://rusmetal.pro/'} src={'/img/work/01.svg'}/>
          <WorkItem name={'Brick-factory'} url={'https://xn--e1agabgvidcdddgah7g.xn--p1ai/'} src={'/img/work/02.svg'}/>

        </div>
        </div>
      </div>
    </section>

    </motion.div>
    <Transition currentPage= 'Work' nextPage='Services'/>
    </>
  )
}

export default Withgetpath(Work)