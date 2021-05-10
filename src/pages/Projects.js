import React, { useState } from "react";
import ColList from "../components/ColList";
import RowList from "../components/RowList";
import "../styles/Project.css";
import Social from "../components/social";

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
      <Social/>
      </div>
      <div style={{ margin: "15px" }} />
    </div>
  );
};

export default Projects;
