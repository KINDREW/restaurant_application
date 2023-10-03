import "./home.css";
import spoon from "../asserts/spoon.png";

const Home = () => {
  return (
    <div className="home">
      <div className="home-left">
        <span>
          Chose The New Flavour <br /> <img src={spoon} alt="" />
        </span>

        <h1>The key to fine dinning</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis
          officia excepturi inventore perspiciatis vel recusandae necessitatibus
          deserunt, officiis eos quia?
        </p>
        <button>Explore Menu</button>
      </div>
      <div className="home-right"></div>
    </div>
  );
};

export default Home;
