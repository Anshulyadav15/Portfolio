import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandPointDown,
  faMapLocation,
  faEnvelopeOpenText,
} from "@fortawesome/free-solid-svg-icons";
import "../css/contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h4 className="title">CONTACT</h4>
        <h2>
          Don't be shy! Feel free to contact{" "}
          <FontAwesomeIcon
            icon={faHandPointDown}
            style={{ color: "#ffd60a" }}
          />
        </h2>

        <div className="content-container">
          <div className="content">
            <FontAwesomeIcon
              className="icon"
              icon={faMapLocation}
              style={{ color: "#2470f5", cursor: "pointer" }}
            />
            <div className="contact-details">
              <h4>Location</h4>
              <p>Lucknow, India</p>
            </div>
          </div>

          <div className="content">
            <FontAwesomeIcon
              className="icon"
              icon={faEnvelopeOpenText}
              style={{ color: "#2470f5", cursor: "pointer" }}
              onClick={(e) => {
                e.preventDefault();
                window.open("mailto:anshulyadav1512@gmail.com");
              }}
            />
            <div className="contact-details">
              <h4>Mail</h4>
              <p>anshulyadav1512@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
