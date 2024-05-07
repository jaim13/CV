// ProjectCard.js
import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ title, description, imageUrl, link }) => {
  return (
    <div className="project-card row">
  <div className="col-12 col-md-6">
    <div className="content">
      <h2>{title}</h2>
      <p>{description}</p>
      <button className="button-85" onClick={() => window.open(link, "_blank")} role="button">View Project</button>
    </div>
  </div>
  <div className="col-12 col-md-6">
    <div className="image">
      <img src={imageUrl} alt={title} className="img-fluid" />
    </div>
  </div>
</div>

  );
};

export default ProjectCard;
