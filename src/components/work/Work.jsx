import React from "react";
import data,{BackendData} from "../../assets/data";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Work = () => {
  return (
    <section id="work">
      <div className="container flex-center">
        <div className="head-box flex-center">
          <h2>Work</h2>
          <p>My Projects</p>
        </div>
        <div className="item-container flex-center">
          <div className="box major flex-center">
            <p>Full Stack project</p>
            <Carousel
              autoPlay={true}
              infiniteLoop={true}
              interval={2000}
              showStatus={false}
              showThumbs={false}
              showIndicators={false}
              className="card"
            >
              {BackendData.map((item) => (
                <div key={item.name} className="card-item">
                  <img className="image" src={item.img} alt="project-photo" />
                  <div className="content">
                    <p className="title">{item.name}</p>
                    <a className="link" href={item.link}>
                      Demo Link
                    </a>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
          <div className="box minor flex-center">
            <p>Frontend project</p>
            <Carousel
              autoPlay={true}
              infiniteLoop={true}
              interval={2000}
              showStatus={false}
              showThumbs={false}
              showIndicators={false}
              className="card"
            >
              {data.map((item) => (
                <div key={item.name} className="card-item">
                  <img className="image" src={item.img} alt="project-photo" />
                  <div className="content">
                    <p className="title">{item.name}</p>
                    <a className="link" href={item.link}>
                      Demo Link
                    </a>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
