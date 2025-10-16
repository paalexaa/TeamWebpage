import "../styles/navbar.css"
import logo from "../imgs/team_logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src={logo} alt="logo" className="navbar-logo" />
        <ul className="navbar-menu">
          <li><a href="#about" className="active">O PROJEKTE</a></li>
          <li><a href="#sprints">ŠPRINTY</a></li>
          <li><a href="#team">TÍM</a></li>
          <li><a href="#documents">DOKUMENTY</a></li>
          <li><a href="#contact">KONTAKTY</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
