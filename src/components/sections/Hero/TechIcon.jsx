import "./TechIcon.css";

const TechIcon = ({ icon, className }) => {
  return (
    <div className={`tech-icon ${className}`}>
      <img src={icon} alt="" />
    </div>
  );
};

export default TechIcon;