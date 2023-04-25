import Home from "./Pages/Home/Home";
import { About } from "./Pages/About/About";
import Header from "./components/Header/Header";
import Transition from "./components/Transition/Transition";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion"

function App() {
  const location = useLocation()

  return (
    <div className="wrapper">
      <AnimatePresence initial={false}>
        <Header/>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
      </Routes>
      </AnimatePresence>
    </div>    
  )
}

export default App
