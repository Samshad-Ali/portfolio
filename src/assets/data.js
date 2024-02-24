import cart from "./cart.png";
import crypto from "./crypto.png";
import weather from "./weather.png";
import shein from "./shein.png";
import socialMedia from './social-media.webp';
import youtube from './youtube.png';
import codepen from './codepen.png';
import todo from './todo.jpeg';
import dashboard from './dashboard.avif';
const data = [
  {
    name:'Youtube Clone Nextjs',
    img:youtube,
    link:'https://youtube-clone-next-app.netlify.app/'
  },
  {
    name:'CodePen Clone',
    img:codepen,
    link:'https://codepen-clone-react-app-2.netlify.app/'
  },
  {
    name: "Crypto Web-App",
    desc: "It is a crypto web-app using React and Chakra-UI in which i used react Hooks,rect-router and fetch and show all real-time data and yet Responsive.",
    img: crypto,
    link: "https://crypto-web-app-react.netlify.app",
  },
  {
    name:'Redux Cart',
    img:cart
  },
  {
    name: "Weather | App",
    desc: "This is the web-app which show the real-weather data made by react",
    img: weather,
    link: "https://weather-forecasting-react-app.netlify.app",
  },
{
    name: "Sheine Clone",
    desc: "It is a Clone of Sheine a E-commerce website using REACT.",
    img: shein,
    link: "https://shein-clone-page-using-react.netlify.app/",
  },  
 
];

export const BackendData=[
  {
    name:"Admin DashBoard",
    img:dashboard,
    link: "https://github.com/Samshad-Ali/nextjs-admin-dashboard",
  },
  {
    name:"Social Hub",
    img:socialMedia,
    link: "https://github.com/Samshad-Ali/socia-media-server",
  },
  {
    name:"To-Do App",
    img:todo,
    link: "https://github.com/Samshad-Ali/to-do-full-stack-server",
  }
]

export default data;
