import React from "react";

function SkillsRow({type, skills}){
    return(
    <div className="row">
        <div className="col-md-3">
            <h3 className = "text-center">{type}</h3>
        </div>
        {skills.map(skill =>(
            <div className="col-md-2">
                <div className="card shadow-lg p-2 m-1 bg-white rounded">
                    <p class="text-center">{skill}</p>
                </div>
            </div>
        ))}
    </div>
);
}

export default SkillsRow