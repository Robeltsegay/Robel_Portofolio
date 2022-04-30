import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <>
      <nav className="nav">
        <a href="#Home" className="nav__brand">
          BlackLion
        </a>
        <ul className={active}>
          <li className="nav__item">
            <a href="#Home" className="nav__link">
              Home
            </a>
          </li>
          <li className="nav__item">
            <a href="#About" className="nav__link">
              About
            </a>
          </li>
          <li className="nav__item">
            <a href="#Services" className="nav__link">
              Services
            </a>
          </li>
          <li className="nav__item">
            <a href="#Portfolio" className="nav__link">
              Portfolio
            </a>
          </li>
          <li className="nav__item">
            <a href="#Contact" className="nav__link">
              Contact
            </a>
          </li>
        </ul>
        <div onClick={navToggle} className={icon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>

      <div className="container">
        <div className="home__content">
          <div className="home__meta">
            <h1 className="home__text pz__10">WELCOME TO MY WORLD</h1>
            <h2 className="home__text pz__10">Hi, I’m Robel</h2>
            <h3 className="home__text sweet pz__10">
              web and application Developer.
            </h3>
            {/* <h4 className="home__text pz__10">based in .</h4> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
