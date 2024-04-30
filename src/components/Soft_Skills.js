import React from "react";
import "./Soft_Skills.css";

function Soft_Skills() {
  return (
<div id="soft_skills" className="accordion-container" style={{ fontFamily: 'Roboto, sans-serif' }}>
      <h1>Soft Skills</h1>
      <div className="accordion" id="accordionSoftSkills">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Effective Communication
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionSoftSkills">
            <div className="accordion-body">
              Effective communication is essential in any team or organization to ensure that information is clearly conveyed and understood by all stakeholders.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Teamwork
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionSoftSkills">
            <div className="accordion-body">
              Teamwork involves collaborating with others to achieve common goals, leveraging individual strengths, and fostering a supportive and cooperative environment.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Empathy
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionSoftSkills">
            <div className="accordion-body">
              Empathy is the ability to understand and share the feelings of others, allowing for better interpersonal connections and more effective communication.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
              Self Learning
            </button>
          </h2>
          <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionSoftSkills">
            <div className="accordion-body">
              Self-learning is the capability to acquire new knowledge and skills independently, demonstrating initiative and adaptability in personal and professional development.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFive">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
              Problem-Solving
            </button>
          </h2>
          <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionSoftSkills">
            <div className="accordion-body">
              Problem-solving involves analyzing complex situations, identifying issues, and devising effective strategies or solutions to overcome challenges and achieve desired outcomes.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Soft_Skills;
