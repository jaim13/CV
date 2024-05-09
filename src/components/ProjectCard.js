// ProjectCard.js
import React from "react";
import styles from "./ProjectCard.module.css"; // Importa el módulo CSS

const ProjectCard = ({ title, description, imageUrl, link }) => {
  return (
    <div className={styles.container}>
      <div className={`${styles.projectCard} row`}>
      <div className="col-12 col-md-6">
        <div className={styles.content}>
          <h2>{title}</h2>
          <p>{description}</p>
          <button
            className={`${styles.button85} ${styles.button} button-85`}
            onClick={() => window.open(link, "_blank")}
            role="button"
          >
            View Project
          </button>
        </div>
      </div>
      <div className="col-12 col-md-6">
        <div className={styles.image}>
          <img src={imageUrl} alt={title} className={styles.img} />
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProjectCard;
