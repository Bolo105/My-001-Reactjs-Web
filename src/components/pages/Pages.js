import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Header } from '../common/Header'
import { Footer } from '../common/Footer'
import { Home } from '../home/Home'
import { About } from './About'
import { Portfolio } from './Portfolio'
import { Services } from './Services'
import { Team } from './Team'
import { Testimonials } from './Testimonials'
import { Contact } from './Contact'

export const Pages = () => {
  return (
    <div>
        <Router>
            <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />}/>
              <Route path='/portfolio' element={<Portfolio />}/>
              <Route path='/services' element={<Services />}/>
              <Route path='/team' element={<Team />}/>
              <Route path='/testimonials' element={<Testimonials />}/>
              <Route path='/contact' element={<Contact />}/>
            </Routes>
            <Footer />
        </Router>
    </div>
  )
}
