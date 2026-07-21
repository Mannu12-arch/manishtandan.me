import "./HeroImg.css";

import profile from "./images/profile.jpeg";

import react from "./images/react.png";
import html from "./images/html.png";
import css from "./images/css.png";
import js from "./images/js.png";
import nod from "./images/nod.png";

import TechIcon from "./TechIcon";

const HeroImg = () => {
  return (
    <div className="hero-img">
      <div className="image-circle">
        <img src={profile} alt="Profile" />
        
      </div>

      <TechIcon icon={react} className="react-icon" />
      <TechIcon icon={html} className="html-icon" />
      <TechIcon icon={css} className="css-icon" />
      <TechIcon icon={js} className="js-icon" />
      <TechIcon icon={nod} className="node-icon" />
    </div>
  );
};

export default HeroImg;