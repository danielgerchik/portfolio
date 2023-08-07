import React, { useRef } from 'react'
import s from './WorkItem.module.scss'

function WorkItem({name,url, src}) {

    const img = useRef(null)

    const displayImg = e => {
        const x = e.clientX
        const y = e.clientY

        img.current.style.left = `${x}px`
        img.current.style.top = `${y}px`

      
        
    }

  return (
    <div className={s.item} onMouseMove={displayImg}>
    <a href={url} className={s.name} target='_blank'>{name}<div className={s.arrow}><img src="/img/icons/next.png"/></div></a>
    <img ref={img} className={s.link_img} src={src} />
  </div>
  )
}

export default WorkItem