import React from 'react'
import s from './BlobsAnim.module.scss'
import Blob from './Blob/Blob'

function BlobsAnim() {
  return (
    <div className={s.bg_animation}>
    <div className={s.blob_wrap}>
    <Blob/>
    <Blob/>
    <Blob/>
    <Blob/>
    <Blob/>
    <Blob/>
    <Blob/>
    <Blob/>
    <Blob/>
    <Blob/>
    <Blob/>
    <Blob/>
    <Blob/>
    <Blob/>
    <Blob/>
    <Blob/>
    <Blob/>
    <Blob/>
    <Blob/>
    </div>
  </div>
  )
}

export default BlobsAnim