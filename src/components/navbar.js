import "./navbar.css";
import logo from "../asserts/gericht.png";
import { useEffect, useRef } from "react";

const Navbar = () => {
  const targetRef = useRef(null);

  const showMenu = () => {
    const navMenu = targetRef.current;

    if (navMenu) {
      if (navMenu.classList.contains("links")) {
        navMenu.classList.remove("links");
        navMenu.classList.add("disappear");
      } else {
        navMenu.classList.add("links");
        navMenu.classList.remove("disappear");
      }
    }
  };

  return (
    <div className="navbar">
      <nav>
        <img className="logo" src={logo} alt="" />

        <ul className="links" ref={targetRef}>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Awards</li>
          <li>Contact</li>
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
        <div class="bar" onClick={showMenu}>
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
