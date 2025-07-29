import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import Citizenship from './pages/Citizen'
import PeopleAge from './pages/PeopleAge'
import Income from './pages/Income'
import Location from './pages/Location'
import HousingOptions from './pages/HousingOptions'
import Search from './pages/Search'
import About from './pages/About'
import Stepper from './components/Stepper'

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className={"container"}>
        <Stepper />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/citizenship" element={<Citizenship />} />
          <Route path="/peopleAndAge" element={<PeopleAge />} />
          <Route path="/income" element={<Income />} />
          <Route path="/location" element={<Location />} />
          <Route path="/housingOptions" element={<HousingOptions />} />
          <Route path="/search" element={<Search />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
