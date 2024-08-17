import { useState } from "react";
import Education from "./Education";

function EducationList({ educationList, onChange }) {
    return (
        <div className="education-list">
            {educationList.map((education) => {
                return <Education key={education.id} education={education} onChange={onChange}/>;
            })}
        </div>
    );
}

export default EducationList;
