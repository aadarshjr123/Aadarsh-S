import React, { useState } from "react";
import ColList from "../components/ColList";
import RowList from "../components/RowList";
import "../styles/Project.css";
import email from '../assets/email.png';
import github from '../assets/github.png';
import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';
import dribbble from '../assets/dribbble.png';

const Projects = () => {
  return (
    <div className="projectDiv">
      <div className="projectDiv1">
        <h1 className="first-project">
          Some Things I've Built
          {/* <div className={styles.projectDiv2} /> */}
        </h1>
      </div>
      <ColList />
      {/* <Demo/> */}
      <div className="projectDiv3">
        <h1 className="second-project">
          Other Noteworthy Projects
          {/* <div className={styles.projectDiv4} /> */}
        </h1>
      </div>
      <RowList />
      <div style={{ margin: "15px" }} />
      <div style={{ margin: "15px" }} />
      <div style={{ margin: "15px" }} />
      <div className="projectDiv5">
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

export default Projects;
