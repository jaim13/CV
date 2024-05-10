import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header-container">
      <header className="header">
        <nav className="navbar navbar-expand-lg transparent-navbar">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src="/imgs/cv.png" alt="CV Logo" width="30" height="24" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse w-100" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link text-dark" href="#languages">
                    Languages
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="#education">
                    Education
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="#projects">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="#soft_skills">
                    Soft Skills
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="#Tech_Skills">
                    Tech Skills
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="#footer">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
