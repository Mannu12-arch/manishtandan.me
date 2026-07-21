import "./AboutImg.css";
import about from "./images/about.png";

const AboutImg = () => {
  return (
    <div className="about-image">

      <div className="about-image-box">
        <img src={about} alt="About Manish" />
      </div>

    </div>
  );
};

export default AboutImg;