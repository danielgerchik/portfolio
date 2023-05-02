import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { MyContext } from '../App'

function Withgetpath(Page) {
  return function() {   
    const {setCurrentPath} = useContext(MyContext)
    const path = useLocation().pathname
    setCurrentPath(path)

    return <Page/>
  }
}

export default Withgetpath