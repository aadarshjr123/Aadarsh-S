import React from "react";
import "../styles/About.css";
import me from '../assets/me.png';
import Social from "../components/social";


const About = () => {
  return (
    <div className="aboutDiv">
      <div className="aboutDiv1">
        <h1 className="first-about">Hey,there <span class="emoji wave" role="img" aria-label="hand wave"></span></h1>
      </div>
      <div className="aboutDiv2">
        <img src={me} className="Image" quality loading="lazy" />
      </div>
      <div className="aboutDiv3">
        <h1 className="second-about">
          I’m
          {/* <div className="aboutDiv4" /> */}
        </h1>
        <h1 className="second-about1">
          Aadarsh
          {/* <div className="aboutDiv4" /> */}
        </h1>
      </div>
      <div className="aboutDiv5">
        <h1 className="third-about">⚡ More of an visual person</h1>
      </div>
      <div className="aboutDiv6">
        <h1 className="fourth-about">Or enjoy the changes.</h1>
      </div>
      <div style={{ margin: "15px" }} />
      <div style={{ margin: "15px" }} />
      <div style={{ margin: "15px" }} />
      <div className="aboutDiv7">
      <Social/>
      </div>
      <div style={{ margin: "15px" }} />
    </div>
  );
};

export default About;
