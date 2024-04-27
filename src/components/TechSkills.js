// TechSkills.js
import React from "react";
import "./TechSkills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Importa FontAwesomeIcon
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faPython } from "@fortawesome/free-brands-svg-icons";
import {  
  faJs,  
  faDatabase, 
  faCode, 
  faCodeBranch, 
  faServer, 
  faCogs 
} from '@fortawesome/free-solid-svg-icons';

import { 
  faReact, 
  faNodeJs, 
  faJava, 
  faCss3, 
  faDatabase as faDatabaseBrand, // Renombra este icono para evitar el conflicto
  faJsSquare 
} from '@fortawesome/free-brands-svg-icons';


function TechSkills() {
  return (
    <div>
        <h1>Tech Skills</h1>
    <div className="container">
        <div className="card">
            <i className="fas fa-lock"></i>
            <h3>Introduction to Cybersecurity (Cisco)</h3>
            <p>Introduction to cybersecurity concepts by Cisco</p>
        </div>
        <div className="card">
            <i className="fas fa-network-wired"></i>
            <h3>Basic Networking Concepts</h3>
            <p>Fundamental networking concepts and principles</p>
        </div>
        <div className="card">
        <FontAwesomeIcon icon={faHtml5} size="2xl" style={{ color: "#74C0FC" }} />
            <h3>HTML5</h3>
            <p>HyperText Markup Language version 5</p>
        </div>
        <div className="card">
        <FontAwesomeIcon icon={faNodeJs} size="2xl" style={{color: "#74C0FC",}} />
            <h3>JavaScript (Node.js)</h3>
            <p>JavaScript runtime environment for server-side development</p>
        </div>
        <div className="card">
        <FontAwesomeIcon icon={faCss3Alt} size="2xl" style={{color: "#74C0FC",}} />
            <h3>CSS3</h3>
            <p>Cascading Style Sheets version 3</p>
        </div>
        <div className="card">
            <i className="fas fa-cogs"></i>
            <h3>API's</h3>
            <p>Application Programming Interfaces</p>
        </div>
        <div className="card">
            <i className="fas fa-database"></i>
            <h3>MVC</h3>
            <p>Model-View-Controller architectural pattern</p>
        </div>
        <div className="card">
        <FontAwesomeIcon icon={faPython} size="2xl" style={{color: "#74C0FC",}} />
            <h3>Python</h3>
            <p>General-purpose programming language</p>
        </div>
        <div className="card">
            <i className="fas fa-code"></i>
            <h3>C#.NET</h3>
            <p>Object-oriented programming language developed by Microsoft</p>
        </div>
        <div className="card">
        <FontAwesomeIcon icon={faJava} size="2xl" style={{color: "#74C0FC",}} />
            <h3>Java</h3>
            <p>Object-oriented programming language</p>
        </div>
        <div className="card">
            <i className="fas fa-database"></i>
            <h3>SQL</h3>
            <p>Structured Query Language</p>
        </div>
        <div className="card">
        <FontAwesomeIcon icon={faReact} size="2xl" style={{color: "#74C0FC",}} />
            <h3>React</h3>
            <p>JavaScript library for building user interfaces</p>
        </div>
        <div className="card">
            <i className="fas fa-database"></i>
            <h3>Mongo</h3>
            <p>Open-source NoSQL database program</p>
        </div>
        <div className="card">
            <i className="fab fa-js"></i>
            <h3>TypeScript</h3>
            <p>Typed superset of JavaScript that compiles to plain JavaScript</p>
        </div>
        </div>

    </div>
  );
}

export default TechSkills;
