import { useState } from 'react'
import './App.css'
import LandingPage from './stores/pages/LandingPage'
import {Routes, Route} from "react-router-dom"
import MobilePage from './stores/pages/MobilePage'
import ComputerPage from './stores/pages/ComputerPage'
import WatchesPage from './stores/pages/WatchesPages'
import AcsPage from './stores/pages/AcsPage'
import FridgesPage from './stores/pages/FridgesPage'
import MobileSingle from './singles/MobileSingle'
import AcSingle from './singles/AcSingle'
import ComputerSingle from './singles/ComputerSinglr'
import FridgeSingle from './singles/FridgeSingle'
import WatchSingle from './singles/WatchSingle'
import UserCart from './stores/UserCart'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/mobiles" element={<MobilePage/>}/>
        <Route path="/computers" element={<ComputerPage/>}/>
        <Route path="/watches" element={<WatchesPage/>}/>
        <Route path="/ac" element={<AcsPage/>}/>
        <Route path="/fridges" element={<FridgesPage/>}/>
        <Route path="/mobiles/:id" element={<MobileSingle/>}/>
        <Route path="/ac/:id" element={<AcSingle/>}/>
        <Route path="/computers/:id" element={<ComputerSingle/>}/>
        <Route path="/fridges/:id" element={<FridgeSingle/>}/>
        <Route path="/watches/:id" element={<WatchSingle/>}/>
        <Route path="/cart" element={<UserCart/>}/>
      </Routes>
    </>
  )
}

export default App
