import "./InfoCard.css";

const InfoCard = ({ icon, text }) => {
  return (
    <div className="info-card">

      <span className="info-icon">
        {icon}
      </span>

      <span className="info-text">
        {text}
      </span>

    </div>
  );
};

export default InfoCard;