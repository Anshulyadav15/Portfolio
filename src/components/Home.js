import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import "../css/home.css";

function Home() {
  return (
    <section className="home-container" id="home">
      <div className="home-content">
        <div className="info-content">
          <div className="info">
            <h1>Front-End Developer</h1>
            <p>
              Hi,I'm Anshul Yadav. A passionate front-end developer based in
              Lucknow,India.
              <FontAwesomeIcon icon={faMapPin} style={{ color: "#ff0000" }} />
            </p>
            <FontAwesomeIcon
              className="icon"
              icon={faLinkedin}
              bounce
              style={{ color: "#003ca3", cursor: "pointer" }}
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  "https://www.linkedin.com/in/anshul-yadav-6524a4207/"
                );
              }}
            />
            <FontAwesomeIcon
              className="icon"
              icon={faGithub}
              bounce
              style={{ color: "#3a3a3b", cursor: "pointer" }}
              onClick={(e) => {
                e.preventDefault();
                window.open("https://github.com/Anshulyadav15");
              }}
            />
          </div>
          <div className="profile">
            <img src="../images/profile.jpg" alt="Profile" />
          </div>
        </div>
        <div className="tech-content">
          <h4>Tech Stach </h4>
          <FontAwesomeIcon
            className="tech-icon"
            icon={faHtml5}
            style={{ color: "#ff2600" }}
          />
          <FontAwesomeIcon
            className="tech-icon"
            icon={faCss3Alt}
            style={{ color: "#0692ea" }}
          />
          <FontAwesomeIcon
            className="tech-icon"
            icon={faJs}
            style={{ color: "#ffc905" }}
          />
          <FontAwesomeIcon
            className="tech-icon"
            icon={faReact}
            style={{ color: "#1fe5ff" }}
          />
          <FontAwesomeIcon
            className="tech-icon"
            icon={faBootstrap}
            style={{ color: "#af1aff" }}
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
