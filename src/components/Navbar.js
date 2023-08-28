import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "../css/navbar.css";

function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleShow = () => {
    setShowMenu(false);
  };

  return (
    <nav className="navbar">
      <div className="title">
        <h2>Anshul.dev</h2>
      </div>

      <div className={showMenu ? "mobile-nav-link" : "nav-link"}>
        <Link
          to="#home"
          smooth
          onClick={() => handleShow()}
          className={
            scrollPosition >= 0 && scrollPosition < 450 ? "active-link" : ""
          }
        >
          Home
        </Link>
        <Link
          to="#about"
          smooth
          onClick={() => handleShow()}
          className={
            scrollPosition >= 450 && scrollPosition < 1256 ? "active-link" : ""
          }
        >
          About
        </Link>
        <Link
          to="#projects"
          smooth
          onClick={() => handleShow()}
          className={
            scrollPosition >= 1256 && scrollPosition < 3450 ? "active-link" : ""
          }
        >
          Projects
        </Link>
        <Link
          to="#contact"
          smooth
          onClick={() => handleShow()}
          className={
            scrollPosition >= 3450 && scrollPosition > 3450 ? "active-link" : ""
          }
        >
          Contact
        </Link>
      </div>

      <div className="menu-icon">
        {!showMenu ? (
          <FontAwesomeIcon
            icon={faBars}
            style={{ color: "#000000" }}
            onClick={() => setShowMenu(!showMenu)}
          />
        ) : (
          <FontAwesomeIcon
            icon={faXmark}
            style={{ color: "#000000" }}
            onClick={() => setShowMenu(!showMenu)}
          />
        )}
      </div>
    </nav>
  );
}

export default Nav;
