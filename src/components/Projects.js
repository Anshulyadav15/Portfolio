import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPuzzlePiece,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "../css/projects.css";

function Projects() {
  return (
    <section id="projects" className="project-container">
      <div className="project-content">
        <h4 className="title">PROTFOLIO</h4>
        <h2>
          Each project is a unique piece of development{" "}
          <FontAwesomeIcon icon={faPuzzlePiece} style={{ color: "#1dad01" }} />
        </h2>

        <div className="project">
          <div className="project-img">
            <img src="../images/netflix.png" alt="" />
          </div>
          <div className="project-desc">
            <h4>Netflix Clone </h4>
            <p>
              Designed & developed a clone website using HTML, CSS & React.js.
              Axios, movie-trailer e.t.c tech-stack is used. Check the movie
              trailer by just clicking on the movie poster.
            </p>
            <div className="code">
              <a href="https://github.com/Anshulyadav15/Netflix_Clone">
                Code{" "}
                <FontAwesomeIcon icon={faGithub} style={{ color: "#232424" }} />
              </a>
              <a href="https://anshul-yadav-netflix-clone-8e8bf0.netlify.app/">
                Live Demo{" "}
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  style={{ color: "#232424" }}
                />
              </a>
            </div>
          </div>
        </div>

        <div className="project">
          <div className="project-desc">
            <h4>Shopping Cart </h4>
            <p>
              Designed & developed a website using HTML, CSS & React.js. Context
              & Reducer is implemented for state control. Users can add, view,
              edit, and remove items from their shopping cart, as well as filter
              products based on prices, categories, and ratings.
            </p>
            <div className="code">
              <a href="https://github.com/Anshulyadav15/Shopping-Cart">
                Code{" "}
                <FontAwesomeIcon icon={faGithub} style={{ color: "#232424" }} />
              </a>
              <a href="https://anshul-yadav-ecommerce-1c4573.netlify.app/">
                Live Demo{" "}
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  style={{ color: "#232424" }}
                />
              </a>
            </div>
          </div>
          <div className="project-img">
            <img src="../images/shopping-cart.png" alt="" />
          </div>
        </div>

        <div className="project">
          <div className="project-img">
            <img src="../images/disneyPlus-clone.png" alt="" />
          </div>
          <div className="project-desc">
            <h4>Disney+ Clone </h4>
            <p>
              Designed & developed a Disney+ clone website using HTML, CSS &
              React.js. Using Styled Components for styling purpose. Also, check
              details by clicking on the movie poster.
            </p>
            <div className="code">
              <a href="https://github.com/Anshulyadav15/Disney-Plus-Clone">
                Code{" "}
                <FontAwesomeIcon icon={faGithub} style={{ color: "#232424" }} />
              </a>
              <a href="https://anshul-yadav-disney-plus-clone-b5a27e.netlify.app/">
                Live Demo{" "}
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  style={{ color: "#232424" }}
                />
              </a>
            </div>
          </div>
        </div>

        <div className="project">
          <div className="project-desc">
            <h4>Color Generator </h4>
            <p>
              Designed & developed a website using HTML, CSS & React.js. Users
              can search different shades of colors by entering hex values also
              copied values by just clicking on the shade.
            </p>
            <div className="code">
              <a href="https://github.com/Anshulyadav15/Color-Generator">
                Code{" "}
                <FontAwesomeIcon icon={faGithub} style={{ color: "#232424" }} />
              </a>
              <a href="https://anshul-yadav-color-generator-546180.netlify.app/">
                Live Demo{" "}
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  style={{ color: "#232424" }}
                />
              </a>
            </div>
          </div>
          <div className="project-img">
            <img src="../images/color-generator.png" alt="" />
          </div>
        </div>

        <div className="project">
          <div className="project-img">
            <img src="../images/weather.png" alt="" />
          </div>
          <div className="project-desc">
            <h4>Weather App </h4>
            <p>
              Designed & developed a web application using HTML, CSS &
              JavaScript. Fetch API is used for fetching data.Used Bootstrap for
              styling this web application
            </p>
            <div className="code">
              <a href="https://github.com/Anshulyadav15/Weather-App">
                Code{" "}
                <FontAwesomeIcon icon={faGithub} style={{ color: "#232424" }} />
              </a>
              <a href="https://anshulyadav15.github.io/Weather-App/">
                Live Demo{" "}
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  style={{ color: "#232424" }}
                />
              </a>
            </div>
          </div>
        </div>

        <div className="project">
          <div className="project-desc">
            <h4>Auto-Mob Mechanic</h4>
            <p>
              A web application designed and developed using HTML, CSS &
              JavaScript for an automobile service company. This application
              offers various services for car repair and maintenance. Using JSON
              data for login validation, there are two ways to log in as an
              admin or as a user, and the navbar change accordingly.
            </p>
            <div className="code">
              <a href="https://github.com/Anshulyadav15/AutoMob-Mechanic">
                Code{" "}
                <FontAwesomeIcon icon={faGithub} style={{ color: "#232424" }} />
              </a>
              <a href="https://anshul-yadav-automob-mechanic-3ecdfe.netlify.app/">
                Live Demo{" "}
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  style={{ color: "#232424" }}
                />
              </a>
            </div>
          </div>
          <div className="project-img">
            <img src="../images/auto-mob.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
