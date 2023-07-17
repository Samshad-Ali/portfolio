import React from "react";
import { FaCss3Alt, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import { BsGit } from "react-icons/bs";
import { BiLogoTailwindCss, BiLogoMongodb } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import {motion} from 'framer-motion'
const Skill = () => {
  return (
    <section id="skills">
     <div className="container flex-center">
          <div className="flex-center">

      <h2>Skills</h2>
      <p>My techinal skill</p>
          </div>
      <div className="skill-box">
        <div className="card">
       < motion.p className="title" 
        initial={{y:'-100%',opacity:0}}
        whileInView={{y:'0%',opacity:1}}
        transition={{delay:.1}}
        >
       HTML <span className="icon"><FaHtml5/> </span>
       </motion.p>
       < motion.p className="title"
            initial={{y:'-100%',opacity:0}}
            whileInView={{y:'0%',opacity:1}}
            transition={{delay:.1}}
       >
       CSS  <span className="icon"><FaCss3Alt/></span>
       </motion.p>
       < motion.p className="title js"
            initial={{y:'-100%',opacity:0}}
            whileInView={{y:'0%',opacity:1}}
       >
       Javascript <span className="icon"><FaJs/> </span>
       </motion.p>
       < motion.p className="title"
        initial={{x:'-100%',opacity:0}}
        whileInView={{x:'0%',opacity:1}}
       >
       Redux  <span className="icon">
       <TbBrandRedux/>
       </span>
       </motion.p>
       < motion.p className="title react"
            initial={{y:'-100%',opacity:0}}
            whileInView={{y:'0%',opacity:1}}
            transition={{delay:.1}}>
       React <span className="icon"> <FaReact/></span>
       </motion.p>
       < motion.p className="title"
        initial={{x:'-100%',opacity:0}}
        whileInView={{x:'0%',opacity:1}}
       >
       Node js <span className="icon">
       <DiNodejs/> 
       </span>
       </motion.p>
       < motion.p className="title express"
            initial={{x:'100%',opacity:0}}
            whileInView={{x:'0%',opacity:1}}
            transition={{delay:.1}}
        >
       Express js <span className="icon">
       <SiExpress/>
       </span>
       </motion.p>
       < motion.p className="title"
           initial={{x:'100%',opacity:0}}
           whileInView={{x:'0%',opacity:1}}
           transition={{delay:.2}}>
       Mongo DB <span className="icon">
       <BiLogoMongodb/> 
       </span>
       </motion.p
       >
       < motion.p className="title"
            initial={{y:'100%',opacity:0} }
            whileInView={{y:'0%',opacity:1}}
            transition={{delay:.1}}
            >
       Tailwind CSS  <span className="icon"><BiLogoTailwindCss/></span>
       </motion.p>
       < motion.p  className="title"
            initial={{y:'100%',opacity:0}}
            whileInView={{y:'0%',opacity:1}}>
       Git  <span className="icon"><BsGit/></span>
       </motion.p>
     
        </div>
      </div>
      </div>
    </section>
  )
}

export default Skill;
