import "../styles/AboutProject.css";

const AboutProject = () => {
  return (
    <section id="aboutProjectSection" className="about-project">
      <div className="container">
        <h1>O projekte</h1>
        <div className="divider"></div>

        <p>
          Cieľom projektu <strong>CYRANO</strong> je vytvoriť systém, ktorý
          pomáha detekovať a analyzovať kybernetické útoky a správanie v sieti.
          Projekt sa zameriava na kombináciu umelej inteligencie, spracovania
          dát a sieťovej analýzy s cieľom zvýšiť bezpečnosť používateľov a
          organizácií.
        </p>

        <p>
          Tím študentov pracuje v rámci predmetu <strong>Team Project</strong> na
          FIIT STU a vytvára riešenie, ktoré integruje monitorovanie siete,
          spracovanie udalostí a vizualizáciu dát.
        </p>
      </div>
    </section>
  );
};

export default AboutProject;
