import React from "react";
import "./about.css";

const About = () => {
  return (
    <div>
      <h1 className="headerabout">
        <span className="anime">About</span> Us
      </h1>

      <div className="Aboutpages">
        <div className="para">
          <p>
            Anime is hand-drawn and computer-generated animation originating
            from Japan. Outside of Japan and in English, anime refers
            specifically to animation produced in Japan. However, in Japan and
            in Japanese, anime describes all animated works, regardless of style
            or origin
          </p>
        </div>
        <div className="image">
          <img
            src="https://i.pinimg.com/236x/60/36/d9/6036d90eec846e5e94866a4a65119504.jpg"
            alt="img"
            width="500"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
