//Languages.js
import React from "react";
import "./Languages.css";

function Languages(){
    return(
        <div className="languages-container">
            <h1>Languages</h1>
            <div className="card">
                <div className="card-header">
                    Spanish
                </div>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                    <p>I'm a native speaker</p>
                    </blockquote>
                </div>
            </div>
            <br></br>
            <br></br>
            <div className="card">
                <div className="card-header">
                    English
                </div>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                    <p>English- Level: B2+ BELT English, Idioma Internacional, February 2019</p>
                    </blockquote>
                </div>
            </div>
        </div>
    );
}

export default Languages;
