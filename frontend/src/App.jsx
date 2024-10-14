import React from 'react'

import { About, Contact, Header, Qualification, Skills, Testimonial, Work } from './container'
import { Navbar } from './components'
import './App.scss'

const App = () => {
    return (
        <div className='app'>
            <Navbar />
            <Header />
            <About />
            <Qualification />
            <Work />
            <Skills />
            <Testimonial />
            <Contact />
        </div>
    )
}

export default App
