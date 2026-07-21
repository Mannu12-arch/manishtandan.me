import "./About.css";
import AboutImg from "./AboutImg";
import InfoCard from "./InfoCard";

const About = () => {
  return (
    <section className="about" id="about">

      <div className="about-container">

        {/* Left */}
        <AboutImg />

        {/* Right */}
        <div className="about-content">

          <h2>About Me</h2>

          <h4>
            Passionate Frontend Developer & AI Product Builder
          </h4>

          <p>
            I'm Manish Tandan, a BCA student and Frontend Developer with a
            strong interest in building modern, responsive web applications
            using React.js.
          </p>

          <p>
            I enjoy creating clean UI, scalable projects and AI-powered
            products. Currently I'm building <strong>GyanTan.AI</strong>,
            an AI learning platform.
          </p>

          <div className="about-cards">

            <InfoCard
              icon="📍"
              text="Chhattisgarh, India"
            />

            <InfoCard
              icon="🎓"
              text="BCA Student"
            />

            <InfoCard
              icon="💼"
              text="Available for Work"
            />

          </div>

          <div className="goal">

            <h3>My Goal</h3>

            <p>
              To become a Full Stack Developer and AI Product Builder by
              building products that solve real-world problems.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;