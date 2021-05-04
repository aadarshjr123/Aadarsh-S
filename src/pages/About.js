import React from "react";
import "../styles/About.css";
import me from '../assets/me.png';
import dribbble from '../assets/dribbble.png';
import email from '../assets/email.png';
import github from '../assets/github.png';
import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';

const About = () => {
  return (
    <div className="aboutDiv">
      <div className="aboutDiv1">
        <h1 className="first-about">Hi,there <span class="emoji wave" role="img" aria-label="hand wave"></span></h1>
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
        <img
          src={dribbble}
          // alt="Picture of the author"
          width={20}
          height={20}
          quality
          loading="lazy"
        />
        <div style={{ margin: "15px" }} />
        <img
          src={email}
          // alt="Picture of the author"
          width={20}
          height={20}
          quality
          loading="lazy"
        />
        <div style={{ margin: "15px" }} />
        <img
          src={github}
          // alt="Picture of the author"
          width={20}
          height={20}
          quality
          loading="lazy"
        />
        <div style={{ margin: "15px" }} />
        <img
          src={instagram}
          // alt="Picture of the author"
          width={20}
          height={20}
          quality
          loading="lazy"
        />
        <div style={{ margin: "15px" }} />
        <img
          src={linkedin}
          // alt="Picture of the author"
          width={20}
          height={20}
          quality
          loading="lazy"
        />
      </div>
      <div style={{ margin: "15px" }} />
    </div>
  );
};

export default About;
