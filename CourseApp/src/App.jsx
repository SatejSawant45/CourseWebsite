import './App.css'
import "./index.css"
import Navbar from './componants/Navbar'
import Hero from './componants/Hero'
import About from './componants/About'
import Workshop from './componants/Workshop'
import Footer from './componants/Footer'

function App() {
  

  return (
    <>
    <div className="min-h-screen bg-customDark">
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Workshop></Workshop>
      <Footer></Footer>
      </div>

      
    </>
  )
}

export default App
