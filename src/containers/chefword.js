import "./chefword.css";
import chef from "../asserts/chef.png";
import sign from "../asserts/sign.png";
import spoon from "../asserts/spoon.png";
import quote from "../asserts/quote.png";
const ChefWord = () => {
  return (
    <div className="chefword">
      <div className="chef">
        <img src={chef} alt="" />
      </div>

      <div className="chefw">
        <span className="s1">Chef's Word</span>
        <img className="spo" src={spoon} alt="" />
        <h1>What we Believe in</h1>
        <p>
          <img className="quote" src={quote} alt="" />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quaerat
          iste incidunt ad debitis, perferendis officia! A asperiores corrupti
          quasi veniam ab possimus minus!
        </p>

        <span>Kevin Luo</span>
        <h2>Chef & founder</h2>
        <img className="sign" src={sign} alt="" />
      </div>
    </div>
  );
};

export default ChefWord;
