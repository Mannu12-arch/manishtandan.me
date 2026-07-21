import "./Hero.css";
import HeroImg from "./HeroImg";
const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero__container">

        {/* Left Side */}
        <div className="hero__content">

          <span className="hero__subtitle">
            Hi, I'm
          </span>

          <h1 className="hero__title">
            Manish <span>Tandan</span>
          </h1>

          <h2 className="hero__roles">
            <span>Frontend Developer</span>
            <span className="divider">|</span>
            <span>React Developer</span>
            <span className="divider">|</span>
            <span>AI Product Builder</span>
          </h2>

          <p className="hero__description">
            I build modern, responsive and user-friendly web applications
            with clean code and great performance. Passionate about creating
            impactful digital experiences and AI-powered solutions.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
             <a href="/resume/Manish_Tandan_Resume.pdf" download className="primary-btn">Download Resume</a> 
            </button>

            <button className="secondary-btn">
              Hire Me <span>→</span>
            </button>
          </div>

          <p className="hero__footer">
            Let's build something amazing together! 
          </p>

        </div>

        {/* Right Side */}
        {/* <div className="hero-right">

          <div className="hero-image">

            <div className="image-circle">
              <img src={profile} alt="Manish Tandan" />
            </div>

          </div>

        </div> */}
<HeroImg />
      </div>
    </section>
  );
};

export default Hero;