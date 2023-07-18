import React, { useRef } from 'react'
import { BsLinkedin, BsGithub, BsInstagram, BsArrowRightShort } from "react-icons/bs";
import { TbSend } from 'react-icons/tb';
import toast  from 'react-hot-toast';
// importing email js..--------
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    toast.success(" Thankyou, I'll reply ASAP !")
    e.preventDefault();
    emailjs.sendForm('service_8ezwmgw', 'template_71sdz2s', form.current, '865WDeSR_IInir7bl')
   
  };
  return (
    <section id="contact">
      <div className="container flex-center">
          <h2>Contact me</h2>
      <div>
        <div>
        <h3 className='mini-title'>Talk to me</h3>
        <div> 
            
      <div className='card'>
       <BsLinkedin/>
       <p>LinkedIn</p>
       <a target='_blank' href="https://www.linkedin.com/in/samshad-ali-406525256/">visit<BsArrowRightShort/></a>
      </div>
      <div className='card'>
       <BsGithub/>
       <p>Github</p>
       <a target='_blank' href="https://github.com/Samshad-Ali">visit<BsArrowRightShort/></a>
      </div>
      <div className='card'>
       <BsInstagram/>
       <p>Instagram</p>
       <a target='_blank' href="https://www.instagram.com/___sam___102/">visit<BsArrowRightShort/></a>
        </div>

        </div>
        </div>
        <div>
      <h3 className='mini-title'>Write me a project</h3>
      <form ref={form} onSubmit={sendEmail}>
        <div className='message-info'>
        <label htmlFor="name">Name</label>
        <input type="text" name='to_name' id='name' placeholder='username' />
        </div>
        <div className='message-info'>
        <label htmlFor="email">Email</label>
        <input type="email" name='from_name' id='email' placeholder='user@gmail.com' />
        </div>
        <div className='message-info'>
        <label htmlFor="message">Project</label>
        <textarea id="message"  cols="30" rows="10" placeholder='write your project' name='message'></textarea>
        </div>
        
        <button onClick={sendEmail}>Send Message <TbSend/></button>
      </form>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Contact