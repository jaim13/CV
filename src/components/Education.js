// Education.js
import React from "react";
import "./Education.css";

function Education() {
    return (
        <div className="education-container">
            <h1>Education</h1>
            <div className="education-cards">
                <div className="card">
                    <button className="btn btn-primary hvr-float-shadow" type="button" data-bs-toggle="collapse" data-bs-target="#cucCollapse" aria-expanded="false" aria-controls="cucCollapse">
                        CUC
                    </button>
                    <div className="collapse" id="cucCollapse">
                        <div className="card card-body">
                            Currently Studying an Information Technology degree at CUC, almost done.
                        </div>
                    </div>
                </div>
                <div className="card">
                    <button className="btn btn-primary hvr-float-shadow" type="button" data-bs-toggle="collapse" data-bs-target="#mepCollapse" aria-expanded="false" aria-controls="mepCollapse">
                        MEP
                    </button>
                    <div className="collapse" id="mepCollapse">
                        <div className="card card-body">
                            Highschool diploma done at Liceo San Nicolas de Tolentino.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;
