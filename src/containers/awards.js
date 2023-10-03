import "./awards.css";
import laurel from "../asserts/laurels.png";
import data from "../constants/data";
import spoon from "../asserts/spoon.png";

const Awards = () => {
  return (
    <div className="awards">
      <div className="laurels">
        <h3>Our Awards & Recognition</h3>
        <img src={spoon} alt="" />
        <h1>Our Laurels</h1>
        <div className="viv">
          {data.awards.map((awards) => (
            <div>
              <span className="x">{awards.title}</span>
              <br />
              <span>{awards.subtitle}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="Gwards">
        <img src={laurel} alt="" />
      </div>
    </div>
  );
};

export default Awards;
