import "./navbar.css";
import logo from "../asserts/gericht.png";
import { useEffect, useRef } from "react";

const Navbar = () => {
  const targetRef = useRef(null);
  const targetRef2 = useRef(null);

  const showMenu = () => {
    const navMenu = targetRef.current;
    const bar = targetRef2.current;

    if (navMenu) {
      if (navMenu.classList.contains("links")) {
        navMenu.classList.remove("links");
        navMenu.classList.add("disappear");
        bar.classList.remove("change");
      } else {
        navMenu.classList.add("links");
        navMenu.classList.remove("disappear");
        bar.classList.add("change");
      }
    }
  };

  return (
    <div className="navbar">
      <nav>
        <img className="logo" src={logo} alt="" />

        <ul className="links" ref={targetRef}>
          <li onClick={showMenu}>Home</li>
          <li onClick={showMenu}>About</li>
          <li onClick={showMenu}>Menu</li>
          <li onClick={showMenu}>Awards</li>
          <li onClick={showMenu}>Contact</li>
          <div className="top-right1">
            <span>Login</span>
            <span className="not">/</span>
            <span>Register</span>
            <span className="not">|</span>
            <span>
              Book table<table></table>
            </span>
          </div>
        </ul>
        <div class="bar" onClick={showMenu} ref={targetRef2}>
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </div>
        <div className="top-right">
          <span>Login</span>
          <span>/</span>
          <span>Register</span>
          <span>|</span>
          <span>
            Book table<table></table>
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
