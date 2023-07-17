import React from 'react'
import { useTypewriter } from 'react-simple-typewriter';
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import { TbSend } from "react-icons/tb";
import { BsMouse } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa";
import { BiFile } from "react-icons/bi";
import user from "../../assets/samshad.png";
import resume from '../../assets/samshad-resume.pdf'
const Hero = () => {
    const [text] = useTypewriter({
        words: ['Full Stack Developer', 'Aspiring MERN', 'A Learner', ],
        loop: true,
      })
  return (
    <section id="hero">
        <div className="container flex-center">
        <div className="left-side">
        <a
          target={"_blank"}
          href="https://www.linkedin.com/in/samshad-ali-406525256/"
        >
          <BsLinkedin />
        </a>

        <a target={"_blank"} href="https://github.com/Samshad-Ali">
          <BsGithub />
        </a>

        <a target={"_blank"} href="https://www.instagram.com/___sam___102/">
          <BsInstagram />
        </a>
      </div>
      <div className="right-side">
        <div>
          <h1 className='title'>Samshad Ali👋</h1>
          <p className='job-title'>
           I'm <span>{text}</span>
          </p>
          <div className="btn-box">
            <a href="mailto:sam606166@gmail.com">
              Hire me
              <TbSend />
            </a>
            <a className="resume-btn" href={resume} download={true}>
              Resume
              <BiFile />
            </a>
          </div>

          <p className="scroll-down">
            <BsMouse />
            <span>
              Scroll Down <FaAngleDown className="angle" />
            </span>
          </p>
        </div>
        <div>
          <img src={user} alt="profile-photo" />
        </div>
      </div>
        </div>
    </section>
    )
}

export default Hero