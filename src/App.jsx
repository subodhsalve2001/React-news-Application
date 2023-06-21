import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './component/Navbar'
import Business from './component/pages/Business'
import Ent from './component/pages/Ent'
import Home from './component/pages/Home'
import Sports from './component/pages/Sports'
import Tech from './component/pages/Tech'
import ScrollToTop from "react-scroll-to-top";
import Loading from './component/pages/Loading'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ent' element={<Ent />} />
        <Route path='/sports' element={<Sports />} />
        <Route path='/tech' element={<Tech />} />
        <Route path='/business' element={<Business/>} />
        <Route path='/loading' element={<Loading/>} />
      </Routes>
    </BrowserRouter>
  )
}
