// TechSkills.js
import React from "react";
import SkillCard from './TechSkillCard.js'
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
import {faLaptop} from '@fortawesome/free-solid-svg-icons';
import { 
  faUbuntu,
  faReact, 
  faNodeJs, 
  faJava
} from '@fortawesome/free-brands-svg-icons';

function TechSkills() {
  return (
<div id="Tech_Skills">
<h1>Tech Skills</h1>
<div className="container">
  <SkillCard icon={faLock} title="Introduction to Cybersecurity (Cisco)" description="Introduction to cybersecurity concepts by Cisco" />
  <SkillCard icon={faNetworkWired} title="Basic Networking Concepts" description="Fundamental networking concepts and principles" />
  <SkillCard icon={faHtml5} title="HTML5" description="HyperText Markup Language version 5" />
  <SkillCard icon={faNodeJs} title="JavaScript (Node.js)" description="JavaScript runtime environment for server-side development" />
  <SkillCard icon={faCss3Alt} title="CSS3" description="Cascading Style Sheets version 3" />
  <SkillCard icon={faGears} title="API's" description="Application Programming Interfaces" />
  <SkillCard icon={faDatabase} title="MVC" description="Model-View-Controller architectural pattern" />
  <SkillCard icon={faPython} title="Python" description="General-purpose programming language" />
  <SkillCard icon={faCode} title="C#.NET" description="Object-oriented programming language developed by Microsoft" />
  <SkillCard icon={faJava} title="Java" description="Object-oriented programming language" />
  <SkillCard icon={faDatabase} title="SQL" description="Structured Query Language" />
  <SkillCard icon={faUbuntu} title="Linux" description="Linux(Ubuntu)" />
  <SkillCard icon={faLaptop} title="Virtualization" description="Virtual Machines(Virtualization)" />
  <SkillCard icon={faReact} title="React (Learning)" description="JavaScript library for building user interfaces" />
  <SkillCard icon={faDatabase} title="Mongo (Basic)" description="Open-source NoSQL database program" />
  <SkillCard icon={faJs} title="TypeScript (Basic)" description="Typed superset of JavaScript that compiles to plain JavaScript" />
</div>
</div>
);
}

export default TechSkills;