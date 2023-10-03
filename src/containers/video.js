import "./video.css";
import vid from "../asserts/meal.mp4";

const Video = () => {
  return (
    <div className="video">
      <video id="myVideo" controls>
        <source src={vid} type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
