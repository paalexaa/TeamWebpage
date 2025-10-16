import "../styles/navbar.css"
import logo from "../imgs/team_logo.png";
import burger from "../imgs/icons-menu.png";
import closeIcon from "../imgs/icons-close.png"; 
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src={logo} alt="logo" className="navbar-logo" />

        {/* Desktop menu */}
        <ul className="navbar-menu">
          <li><a href="#about" className="active">O PROJEKTE</a></li>
          <li><a href="#sprints">ŠPRINTY</a></li>
          <li><a href="#team">TÍM</a></li>
          <li><a href="#documents">DOKUMENTY</a></li>
          <li><a href="#contact">KONTAKTY</a></li>
        </ul>

        {/* Burger button */}
         <button className="burger" onClick={() => setIsOpen(!isOpen)}>
          <img src={isOpen ? closeIcon : burger} alt="menu" className="icon" />
        </button>

        {/* Mobile menu */}
        <ul className={`menu ${isOpen ? "open" : ""}`}>
          <li><a href="#about" onClick={() => setIsOpen(false)}>O PROJEKTE</a></li>
          <li><a href="#sprints" onClick={() => setIsOpen(false)}>ŠPRINTY</a></li>
          <li><a href="#team" onClick={() => setIsOpen(false)}>TÍM</a></li>
          <li><a href="#documents" onClick={() => setIsOpen(false)}>DOKUMENTY</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>KONTAKTY</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
