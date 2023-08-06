import React from 'react'
import Hero from './Hero'
import { About } from '../pages/About'
import { Portfolio } from '../pages/Portfolio'
import { Services } from '../pages/Services'
import { Team } from '../pages/Team'
import { Testimonials } from '../pages/Testimonials'
import { Contact } from '../pages/Contact'

export const Home = () => {
  return (
    <div>
       <Hero />
       <About />
       <Portfolio />
       <Services />
       <Team />
       <Testimonials />
       <Contact />
    </div>
  )
}
