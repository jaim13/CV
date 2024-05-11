import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={`${styles["header-container"]} Header`}>
      <header className={`${styles["header"]} header`}>
        <nav
          className={`navbar fixed-top navbar-expand-lg ${styles["navbar-blur"]}`}
          style={{ backgroundAttachment: "fixed" }}
        >
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
            <div
              className="collapse navbar-collapse w-100"
              id="navbarSupportedContent"
              style={{ fontFamily: "Roboto, sans-serif" }}
            >
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a
                    className={`nav-link text-dark ${styles["nav-link"]}`}
                    href="#languages"
                  >
                    Languages
                  </a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link text-dark ${styles["nav-link"]}`} href="#education">
                    Education
                  </a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link text-dark ${styles["nav-link"]}`} href="#projects">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link text-dark ${styles["nav-link"]}`} href="#soft_skills">
                    Soft Skills
                  </a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link text-dark ${styles["nav-link"]}`} href="#Tech_Skills">
                    Tech Skills
                  </a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link text-dark ${styles["nav-link"]}`} href="#footer">
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
