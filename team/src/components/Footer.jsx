import "../styles/Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer-nav">
        <a href="#about">O PROJEKTE</a>
        <a href="#sprints">ŠPRINTY</a>
        <a href="#team">TÍM</a>
        <a href="#documents">DOKUMENTY</a>
        <a href="#contact">KONTAKTY</a>
      </nav>

      <p className="footer-text">
        © {new Date().getFullYear()}. Návrh od <strong>NAO</strong>, Tím 19, FIIT STU.
      </p>
    </footer>
  );
};

export default Footer;
