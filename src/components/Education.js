//Education.js
import react from "react";
function Education(){
    return (
        <div>
            <h1>Education</h1>
            <p>
            <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                CUC
            </button>
            </p>
            <div style={{ minHeight: '120px' }}>
            <div class="collapse collapse-horizontal" id="collapseWidthExample">
            <div className="card card-body" style={{ width: '300px' }}>
                Currently Studying an Information Technology degree at CUC, almost done.
                </div>
            </div>
            </div>
        </div>
    );
}
export default Education;
