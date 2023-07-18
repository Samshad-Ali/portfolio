import React from 'react'
import {FaArrowAltCircleUp} from 'react-icons/fa'
const Footer = () => {
    const date = new Date().getFullYear();
  return (
    <footer className='footer'>
        <div className="container flex-center">
            <p>
                Samshad Ali. {date} © All rights Reserved
            </p>
            <a href="#hero">
                <FaArrowAltCircleUp/>

            </a>
        </div>
    </footer>
    
  )
}

export default Footer