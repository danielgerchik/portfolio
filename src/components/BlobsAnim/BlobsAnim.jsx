import React from 'react'
import s from './BlobsAnim.module.scss'
import Blob from './Blob/Blob'

function BlobsAnim({isMobile}) {
  return (
    <div className={`${s.bg_animation} ${isMobile ? s.mb : ''}`}>
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