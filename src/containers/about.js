import "./about.css";
import knife from "../asserts/knife.png";
import spoon from "../asserts/spoon.png";
import g from "../asserts/G.png";
const About = () => {
  return (
    <div className="about">
      <div className="aboutUs">
        <h1>About Us</h1>
        <img src={spoon} alt="" />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
          exercitationem voluptatibus cupiditate saepe quia, qui dignissimos est
          dolores accusantium
        </p>
      </div>
      <div className="knife">
        <h1 className="background">G</h1>
        <img src={knife} alt="" />
      </div>
      <div className="history">
        <h1>Our History</h1>
        <img src={spoon} alt="" />

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
          voluptas dignissimos dicta, assumenda fuga dolores. Aspernatur laborum
          dicta voluptate quis consequuntur tempore
        </p>
      </div>
    </div>
  );
};

export default About;
