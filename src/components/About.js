import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
import "../css/about.css";

function About() {
  return (
    <section className="about-container" id="about">
      <div className="about-content">
        <div className="about-img">
          <img src="../images/about.jpg" alt="about" />
        </div>
        <div className="about">
          <h4>About Me</h4>
          <h2>
            A dedicated Front-end Developer based in Lucknow, India{" "}
            <FontAwesomeIcon icon={faMapPin} style={{ color: "#ff0000" }} />
          </h2>
          <p>
            I'm a front-end developer who gained an extensive understanding of
            HTML, CSS, and JavaScript. By developing dynamic web applications
            using ReactJS, I am ready to contribute to creating engaging user
            interfaces and intuitive web applications. I am eager to apply my
            knowledge and passion to deliver outstanding results in front-end
            development.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
