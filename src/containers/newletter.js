import "./newsletter.css";
import spoon from "../asserts/spoon.png";
import logo from "../asserts/gericht.png";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";

const NewsLetter = () => {
  return (
    <div className="newsletter">
      <div className="newsTop">
        <h3>Newsletter</h3>
        <img src={spoon} alt="" />
        <h1>Subscibe To Our Newsletter</h1>
        <p>And Never Miss Latest Updates!</p>
        <form action="">
          <input type="text" placeholder="Enter your email address" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      <div className="newbottom">
        <div>
          <h1>Contact Us</h1>
          <p>Some nice srteet in Takoradi,112 avenue</p>
          <ul>
            <li>+233 20 00000000</li>
            <li>+233 20 00000000</li>
          </ul>
        </div>
        <div className="ddle">
          <h1>GERICHT</h1>
          <p>
            "The Best Way to find Yourself Is to lose yourself in the <br />
            Service of Others"
          </p>
          <img src={spoon} alt="" />
          <ul>
            <li>
              <BsInstagram />
            </li>
            <li>
              <BsFacebook />
            </li>
            <li>
              <BsTwitter />
            </li>
          </ul>
        </div>
        <div className="ast">
          <h1>Working Hours</h1>

          <ul>
            <li>
              Mon - Fri <br /> 10:00Am - 2:00 Am
            </li>
            <li>
              Sat - Sun <br /> 10:00Am - 3:00Am
            </li>
          </ul>
        </div>
      </div>
      <div>2023 Gericht. All Rights Reserved</div>
    </div>
  );
};

export default NewsLetter;
