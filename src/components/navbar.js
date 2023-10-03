import "./navbar.css";
import logo from "../asserts/gericht.png";
import { useEffect } from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <img className="logo" src={logo} alt="" />

        <ul className="links">
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Awards</li>
          <li>Contact</li>
        </ul>

        <div className="top-right">
          <span>Login</span>
          <span>/</span>
          <span>Register</span>
          <span>|</span>
          <span>
            Book table<table></table>
          </span>
        </div>
        <div class="bar">
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
