import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./footer.css";

function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>About Me</h3>
            <p>
              Hi, I'm Jaim Martínez. I'm a passionate web developer with a strong background in IT. I love building creative and innovative web applications that make a difference.
            </p>
            <p>
              Feel free to contact me at jaimmartinez13@gmail.com or connect with me on <a href="https://www.linkedin.com/in/jaim-mart%C3%ADnez-144b73230/" target="_blank" rel="noopener noreferrer">LinkedIn</a> to discuss potential collaborations or projects.
            </p>
          </div>
          <div className="col-md-6">
            <h3>Contact Information</h3>
            <ul className="list-unstyled">
              <li>Email: jaimmartinez13@gmail.com</li>
              <li>Phone: +506 64700712</li>
              <li>Address: Avenida 23, Cartago, Costa Rica.</li>
              <li>
                <a href="https://www.linkedin.com/in/jaim-mart%C3%ADnez-144b73230/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
                </a>
                <a href="https://github.com/jaim13" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} className="social-icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
