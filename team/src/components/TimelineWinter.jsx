import "../styles/Timeline.css";
import point from "../imgs/sprint_point.png";

const Timeline = () => {
  const items = [
    "texttttttttttttttttttttttttttttttttttttttttttt",
    "texttttttttttttttttttttttttttttttttttttttttttt",
    "texttttttttttttttttttttttttttttttttttttttttttt",
    "texttttttttttttttttttttttttttttttttttttttttttt"
  ];

  return (
    <div className="timeline">
      {items.map((text, index) => (
        <div key={index} className="timeline-block">
          <div className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}>
            <div className="timeline-content">
              <p>{text}</p>
            </div>
          </div>
          <div className="timeline-icon">
            <img src={point} alt="icon" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
