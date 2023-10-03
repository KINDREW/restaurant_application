import "./Findus.css";
import cheers from "../asserts/findus.png";
import spoon from "../asserts/spoon.png";

const FindUs = () => {
  return (
    <div className="findus">
      <div className="find">
        <h3 className="con">Contact</h3>
        <img src={spoon} alt="" />
        <h1>Find Us</h1>

        <p>Location,Some Nice sTREET IN takoradi ,112 Avenue</p>
        <h3 className="sd">Opening Hours</h3>
        <ul>
          <li>Mon-Fri 10:00Am - 02:00Am</li>
          <li>Sat-Sun 10:00Am - 03:00Am</li>
        </ul>

        <div>Visit Us</div>
      </div>
      <div className="ind">
        <img src={cheers} alt="" />
      </div>
    </div>
  );
};

export default FindUs;
