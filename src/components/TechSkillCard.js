// SkillCard.js
import React from "react";
import "./TechSkills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SkillCard({ icon, title, description, className, iconColor }) {
  return (
    <div className={`card ${className}`}>
      <FontAwesomeIcon icon={icon} size="2x" style={{ color: iconColor }} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default SkillCard;
