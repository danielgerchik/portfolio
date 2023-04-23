import Orange from "./components/Orange/Orange";
import Green from "./components/Green/Green";
import Home from "./components/Home/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion"

function App() {
  const location = useLocation()

  return (
    <div className="wrapper">
      <AnimatePresence initial={true}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/orange" element={<Orange />} />
        <Route path="/green" element={<Green/>} />
      </Routes>
      </AnimatePresence>
    </div>    
  )
}

export default App
