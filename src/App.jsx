import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Header from "./components/Header/Header";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion"
import Work from "./Pages/Work/Work";
import Services from "./Pages/Services/Services";
import Contacts from "./Pages/Contacts/Contacts";
import { createContext, useState, useEffect } from "react";

export const MyContext = createContext() 

function App() {
  const location = useLocation()
  const [hasClickedOnBubble, setHasClickedOnBubble] = useState(false)
  const [contacts, setContacts] = useState(false)
  const [home, setHome] = useState(false)
  const [currentPath, setCurrentPath] = useState('')
  const [isMenuOpen, setMenuOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const [isHiddenBurger, setIsHiddenBurger] = useState(false)

  const [isMobile, setIsMobile] = useState(false)


  function getRealHeight() {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }
  getRealHeight()
  window.addEventListener('resize', e => {
    getRealHeight()
  })

  useEffect(e => {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i
    .test(navigator.userAgent)) {

      setIsMobile(true)

} 
  }, [])


  const closeMenu = time => {
    setTimeout(e=> {
      setMenuOpen(false)
      setIsClosing(true)
      setTimeout(e=> {
        setIsClosing(false)
      }, 1200)
      setTimeout(e=> {
        setIsHiddenBurger(false)
      }, 2000)
    }, time)
  }

  return (
    <div className="wrapper">
      <MyContext.Provider value={{setHasClickedOnBubble, hasClickedOnBubble, setCurrentPath, currentPath, setContacts, 
        contacts, setHome, home, setMenuOpen, isMenuOpen, setIsClosing, isClosing, closeMenu, isHiddenBurger, setIsHiddenBurger, 
        isMobile}}>
      <AnimatePresence initial={false}>
        <Header/>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      </AnimatePresence>
      </MyContext.Provider>
    </div>    
  )
}

export default App
