// TechSkills.js
import React from "react";
import "./TechSkills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Importa FontAwesomeIcon
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faPython } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faGears } from '@fortawesome/free-solid-svg-icons';
import { faNetworkWired } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';

import { 
  faReact, 
  faNodeJs, 
  faJava, 
  faCss3, 
  faJsSquare 
} from '@fortawesome/free-brands-svg-icons';


function TechSkills() {
  return (
    <div id="Tech_Skills">
        <h1>Tech Skills</h1>
    <div className="container">
        <div className="card">
        <FontAwesomeIcon icon={faLock} size="2xl" style={{color: "#74C0FC",}} />
            <h3>Introduction to Cybersecurity (Cisco)</h3>
            <p>Introduction to cybersecurity concepts by Cisco</p>
        </div>
        <div className="card">
        <FontAwesomeIcon icon={faNetworkWired} size="2x" style={{color: "#74C0FC"}} />
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
        <FontAwesomeIcon icon={faGears} size="2x" style={{color: "#74C0FC"}} />
            <h3>API's</h3>
            <p>Application Programming Interfaces</p>
        </div>
        <div className="card">
        <FontAwesomeIcon icon={faDatabase} size="2x" style={{color: "#74C0FC"}} />
            <h3>MVC</h3>
            <p>Model-View-Controller architectural pattern</p>
        </div>
        <div className="card">
        <FontAwesomeIcon icon={faPython} size="2xl" style={{color: "#74C0FC",}} />
            <h3>Python</h3>
            <p>General-purpose programming language</p>
        </div>
        <div className="card">
        <FontAwesomeIcon icon={faCode} size="2x" style={{color: "#74C0FC"}} />
            <h3>C#.NET</h3>
            <p>Object-oriented programming language developed by Microsoft</p>
        </div>
        <div className="card">
        <FontAwesomeIcon icon={faJava} size="2xl" style={{color: "#74C0FC",}} />
            <h3>Java</h3>
            <p>Object-oriented programming language</p>
        </div>
        <div className="card">
        <FontAwesomeIcon icon={faDatabase} size="2x" style={{color: "#74C0FC"}} />
            <h3>SQL</h3>
            <p>Structured Query Language</p>
        </div>
        <div className="card">
        <FontAwesomeIcon icon={faReact} size="2xl" style={{color: "#74C0FC",}} />
            <h3>React (Basic)</h3>
            <p>JavaScript library for building user interfaces</p>
        </div>
        <div className="card">
        <FontAwesomeIcon icon={faDatabase} size="2x" style={{color: "#74C0FC"}} />
            <h3>Mongo (Basic)</h3>
            <p>Open-source NoSQL database program</p>
        </div>
        <div className="card">
        <FontAwesomeIcon icon={faJs} size="2x" style={{color: "#74C0FC"}} />
            <h3>TypeScript (Basic)</h3>
            <p>Typed superset of JavaScript that compiles to plain JavaScript</p>
        </div>
        </div>

    </div>
  );
}

export default TechSkills;
