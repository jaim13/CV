import ProjectCard from "./ProjectCard";
import React from "react";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <div id="projects">
      <h1>Projects</h1>
      <div
        id="carouselExampleInterval"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <ProjectCard
              title="Gym Project"
              description={
                <div>
                  <p className="card-text">
                    I'm pleased to present my latest personal project, a gym
                    simulator platform designed with passion and cutting-edge
                    technology. This project fuses a variety of technologies,
                    including JavaScript (Node.js), SQL, HTML, CSS, TypeScript,
                    Python, and AJAX, among others, to create an interactive and
                    dynamic experience.
                  </p>
                  <p className="card-text">
                    I also implemented several APIs made by me to showcase my
                    abilities in the backend environment. I've implemented the
                    Model-View-Controller (MVC) architecture, which guarantees
                    clean and modular code, as well as an intuitive user
                    experience.
                  </p>
                  <p className="card-text">
                    Additionally, to improve functionality and user convenience,
                    I've incorporated the ability to send emails and make
                    payments through PayPal in a test environment. This project
                    reflects my dedication to software development and my
                    commitment to creating innovative and practical solutions.
                  </p>
                  <p className="card-text">
                    There are a few things you should know. First of all, I want
                    to apologize if the website is a bit slow (it's because the
                    render server is free and also the Azure Server). After
                    registration, there will be a payment process. You can use
                    the test card number 123456789, and the expiration date is
                    2050-04-24. If you choose the Account method, you can use
                    the number 123456789. Sometimes there may be a timing issue,
                    so if the website keeps loading and there's a mistake, it
                    could be due to the response time. In that case, please try
                    again.
                  </p>
                </div>
              }
              link="https://costaricafitness.onrender.com"
              imageUrl="https://images.unsplash.com/photo-1590487988256-9ed24133863e?q=10&w=856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
          <div class="carousel-item" data-bs-interval="10000">
            <ProjectCard
              title="Mongo CRUD"
              description={
                <div>
                  <p className="card-text">
                    "Mongo CRUD" is a straightforward project focused on user
                    management, built to showcase my expertise in full-stack
                    development using AJAX and Node.js.
                  </p>
                  <p>
                    This application simplifies the process of creating,
                    reading, updating, and deleting user records stored in
                    MongoDB.
                  </p>
                  <p>
                    Despite its simplicity, "Mongo CRUD" highlights my ability
                    to implement essential CRUD functionalities effectively
                    while demonstrating proficiency in handling user data
                    securely. Dive into the project to witness how I've designed
                    an intuitive user interface and robust backend system,
                    reflecting my commitment to delivering practical and
                    efficient software solutions.
                  </p>
                </div>
              }
              link="https://usernode.onrender.com"
              imageUrl="https://images.unsplash.com/photo-1658204238967-3a81a063d162?q=100&w=1724&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
        </div>
        <button className={`carousel-control-prev ${styles.customControl}`} type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className={`carousel-control-next ${styles.customControl}`} type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
