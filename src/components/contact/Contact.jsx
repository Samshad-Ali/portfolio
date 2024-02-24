import React, { useRef } from "react";
import {
  BsLinkedin,
  BsGithub,
  BsInstagram,
  BsArrowRightShort,
} from "react-icons/bs";
const Contact = () => {
  return (
    <section id="contact">
      <div className="container flex-center">
        <h2>Contact me</h2>

        <div>
          <div className="card">
            <BsLinkedin />
            <p>LinkedIn</p>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/samshad-ali-406525256/"
            >
              visit
              <BsArrowRightShort />
            </a>
          </div>
          <div className="card">
            <BsGithub />
            <p>Github</p>
            <a target="_blank" href="https://github.com/Samshad-Ali">
              visit
              <BsArrowRightShort />
            </a>
          </div>
          <div className="card">
            <BsInstagram />
            <p>Instagram</p>
            <a target="_blank" href="https://www.instagram.com/___sam___102/">
              visit
              <BsArrowRightShort />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
