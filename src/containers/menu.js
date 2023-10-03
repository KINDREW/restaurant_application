import "./menu.css";
import cup from "../asserts/menu.png";

import spoon from "../asserts/spoon.png";
import data from "../constants/data";

const Menu = () => {
  return (
    <div className="menu">
      <div className="header">
        <div>Menu that fits your palatte</div>
        <img src={spoon} alt="" />
        <h1>Today's Special</h1>
      </div>
      <div className="specials">
        <div className="beer">
          <h1>Wine & Beer</h1>
          {data.wines.map((wines) => (
            <div className="b">
              <div className="b1">
                <span>{wines.title} </span>
                <span className="tags"> {wines.tags}</span>
              </div>
              <div className="b2">.....{wines.price}</div>
            </div>
          ))}
        </div>
        <div className="picture"></div>
        <div className="beer">
          <h1>Cocktails</h1>
          {data.cocktails.map((cocktails) => (
            <div className="b">
              <div className="b1">
                <span>{cocktails.title} </span>
                <span className="tags"> {cocktails.tags}</span>
              </div>
              <div className="b2">.....{cocktails.price}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="more">Explore Menu</div>
    </div>
  );
};

export default Menu;
