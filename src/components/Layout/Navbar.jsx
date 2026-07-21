import { useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import "./Navbar.css";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">

      <div className="navbar__container">

        {/* Logo */}

        <div className="navbar__logo">

          <div className="logo-circle">
            MT
          </div>

          <h2>Manish Tandan</h2>

        </div>

        {/* Navigation */}

        <nav>

  <div
    className="menu-icon"
    onClick={() => setMenuOpen(!menuOpen)}
  >
    {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
  </div>

  <ul className={menuOpen ? "navbar__menu active" : "navbar__menu"}>

    <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
    <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
    <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
    <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
    <li><a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a></li>
    <li><a href="#education" onClick={() => setMenuOpen(false)}>Education</a></li>
    <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
    <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>

  </ul>

</nav>

        {/* Button */}

        <button className="hire-btn">
          Hire Me →
        </button>

      </div>

    </header>
  );
};

export default Navbar;