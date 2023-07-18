import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Skill from './components/skills/Skill'
import Work from './components/work/Work.jsx'
import Contact from './components/contact/Contact.jsx'
import Footer from './components/footer/Footer'
import {Toaster} from 'react-hot-toast';
import {BiMenuAltRight} from 'react-icons/bi'
const App = () => {
  const [bar,setBar]=useState(false);
  const handleBar=()=>{
    setBar(!bar);
  }
  return (
   <>
   <Toaster/>
   <Navbar/>
   <Hero/>
   <Skill/>
   <Work/>
   <Contact/>
   <Footer/>
    <span className='bars' onClick={handleBar}>
      <BiMenuAltRight/>
    </span>
    <PhoneNav bar={bar} setBar={setBar} />
   </>
  )
}

export default App;

const PhoneNav=({bar,setBar})=>{
  return(
    <nav className={`phone-nav ${bar?"phone-nav-come":""}`}>
        <div className="container flex-center">
          <h2>samshad.</h2>
          <ul className='phone-itemBox flex-center'>
            <li>
              {" "}
              <a onClick={()=>{setBar(false)}} href="#hero">Home</a>{" "}
            </li>
            <li>
              {" "}
              <a onClick={()=>{setBar(false)}} href="#skills">Skills</a>{" "}
            </li>
            <li>
              {" "}
              <a onClick={()=>{setBar(false)}} href="#work">Work</a>{" "}
            </li>
            <li>
              {" "}
              <a onClick={()=>{setBar(false)}} href="#contact">Contact</a>{" "}
            </li>
          </ul>
        </div>
      </nav>
  )
}