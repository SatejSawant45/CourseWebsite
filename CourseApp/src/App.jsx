import './App.css'
import "./index.css"
import Navbar from './componants/Navbar'
import Hero from './componants/Hero'
import About from './componants/About'
import Workshop from './componants/Workshop'
import Footer from './componants/Footer'
import Background from './componants/Background'


function App() {
  

  return (
    <>
    <div className="min-h-screen relative">
      <Background></Background>
        <div className="min-h-screen">
          <Navbar></Navbar>
          <Hero></Hero>
          <About></About>
          <Workshop></Workshop>
          <Footer></Footer>
        </div>
      </div>

      
    </>
  )
}

export default App
