import React from "react";
import "../styles/Contact.css";
import dribbble from '../assets/dribbble.png';
import email from '../assets/email.png';
import github from '../assets/github.png';
import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';

const Contacts = () => {
  return (
    <div className="contactDiv">
      <div className="contactDiv1">
        <h1 className="first-contact">
          Say Hello
          {/* <div
            className={styles.contactDiv2}
          /> */}
        </h1>
      </div>
      <div className="contactDiv3">
        <h1 className="second-contact">
          Do you know Na'vi, no problem i know English 😄. Lets talk
        </h1>
      </div>
      <div style={{ margin: "15px" }} />
      <div style={{ margin: "15px" }} />
      <div style={{ margin: "15px" }} />
      <div className="contactDiv4">
        <a className="hyperlink">
          <h1 className="third-contact">Get in touch</h1>
        </a>
      </div>
      <div style={{ margin: "65px" }} />
      <div className="contactDiv5">
      <img
          src={dribbble}
          alt="Picture of the author"
          width={20}
          height={20}
          quality
          loading="lazy"
        />
        <div style={{ margin: "15px" }} />
        <img
          src={email}
          alt="Picture of the author"
          width={20}
          height={20}
          quality
          loading="lazy"
        />
        <div style={{ margin: "15px" }} />
        <img
          src={github}
          alt="Picture of the author"
          width={20}
          height={20}
          quality
          loading="lazy"
        />
        <div style={{ margin: "15px" }} />
        <img
          src={instagram}
          alt="Picture of the author"
          width={20}
          height={20}
          quality
          loading="lazy"
        />
        <div style={{ margin: "15px" }} />
        <img
          src={linkedin}
          alt="Picture of the author"
          width={20}
          height={20}
          quality
          loading="lazy"
        /> 
      </div>
    </div>
  );
};

export default Contacts;
