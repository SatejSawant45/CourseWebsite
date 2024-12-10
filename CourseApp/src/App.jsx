import './App.css'
import "./index.css"
import Navbar from './componants/Navbar'
import Hero from './componants/Hero'
import About from './componants/About'
import Workshop from './componants/Workshop'
import Footer from './componants/Footer'
import Background from './componants/Background'
import RegisterForm from './componants/RegisterForm'
import React from 'react'
import { useState } from 'react'


function App() {
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  

  return (
    <>
    <div className="min-h-screen relative">
      <Background></Background>
        <div className="min-h-screen">
          <Navbar onRegisterClick={() => setShowRegisterForm(true)} />
          <Hero></Hero>
          <About></About>
          <Workshop onRegisterClick={() => setShowRegisterForm(true)}></Workshop>
          <Footer></Footer>
          {showRegisterForm && (
          <RegisterForm onClose={() => setShowRegisterForm(false)} />
        )}
        </div>
      </div>

      

      
    </>
  )
}

export default App
