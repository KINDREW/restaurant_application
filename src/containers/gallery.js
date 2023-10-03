import "./gallery.css";
import spoon from "../asserts/spoon.png";
import one from "../asserts/gallery01.png";
import two from "../asserts/gallery02.png";
import three from "../asserts/gallery03.png";
import four from "../asserts/gallery04.png";

import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="photo">
        <h3>Instagram</h3>
        <img src={spoon} alt="" />
        <h1>Photo Gallery</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet esse
          similique consequatur facilis laudantium. Placeat quos doloremque
          perferendis quidem harum vel!
        </p>
        <div className="vuew">View More</div>
      </div>

      <div className="inst">
        <img src={one} alt="" />
        <img src={two} alt="" />
        <img src={three} alt="" />
        <img src={four} alt="" />
        <BsInstagram className="insta" />
      </div>
    </div>
  );
};

export default Gallery;
