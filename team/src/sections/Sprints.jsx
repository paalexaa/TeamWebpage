import "../styles/Sprints.css";
import Timeline from "../components/TimelineWinter"

const Sprints = () => {
  return (
    <section id="sprintSection" className="sprint">
      <div className="container">
        <h1>Šprinty</h1>
        <div className="divider"></div>
        <h2>Zimný semester</h2>
        <Timeline />
        <h2>Letný semester</h2>
      </div>
    </section>
  );
};

export default Sprints;
