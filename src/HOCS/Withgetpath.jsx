import React, { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { MyContext } from '../App'

function Withgetpath(Page) {
  return function() {   
    const {setCurrentPath, setContacts, setHome} = useContext(MyContext)
    const path = useLocation().pathname
    setCurrentPath(path)

    if(path !== '/Contacts' && path !== '/') {
      setContacts(false)
      setHome(false)
    }
    if(path === '/Contacts'){
      setContacts(true)
      setHome(false)
    }
    if(path === '/'){
      setHome(true)
    }
    return <Page/>
  }
}

export default Withgetpath