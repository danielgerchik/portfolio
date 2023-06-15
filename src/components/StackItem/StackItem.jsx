import React from 'react'
import s from './StackItem.module.scss'

function StackItem({name, desc}) {
  return (
    <div className={s.item}>
    <span className={s.name}>{name}</span>
      <span className={s.description}>{desc}</span>
    </div>
  )
}

export default StackItem