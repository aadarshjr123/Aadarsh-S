import React from "react";
import "../styles/Contact.css";
import Social from "../components/social";

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
        <a className="hyperlink" href="mailto: aadarshsasikumar@gmail.com">
          <h1 className="third-contact">Get in touch</h1>
        </a>
      </div>
      <div style={{ margin: "65px" }} />
      <div className="contactDiv5">
      <Social/>
      </div>
    </div>
  );
};

export default Contacts;
