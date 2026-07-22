import "./SkillItem.css";

const SkillItem = ({ icon, name }) => {
  return (
    <div className="skill-item">
      <img src={icon} alt={name} />
      <p>{name}</p>
    </div>
  );
};

export default SkillItem;