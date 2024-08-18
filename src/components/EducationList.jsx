import { useState } from "react";
import Education from "./Education";
import arrowDown from "../assets/arrow-down.svg";

function EducationList({
    educationList,
    onChange,
    activeInput,
    changeActiveInput,
    activeEducation,
    setActiveEducation,
}) {
    if (activeInput !== "education-list") {
        return (
            <button className="education-list" onClick={changeActiveInput}>
                <h1>Education</h1>
                <img src={arrowDown} alt="expand" className="arrow-down"/>
            </button>
        );
    }

    if (activeEducation === null) {
        return (
            <div className="education-list active">
                <h1>Education</h1>
                {educationList.map((education) => {
                    return (
                        <button
                            key={education.id}
                            className="education"
                            onClick={() => setActiveEducation(education.id)}
                        >
                            <h2>{education.school}</h2>
                            <h3>{education.degree}</h3>
                        </button>
                    );
                })}
            </div>
        );
    }

    return (
        <div className="education-list active">
            <h1>Education</h1>
            {educationList.map((education) => {
                return (
                    education.id === activeEducation && (
                        <Education
                            key={education.id}
                            education={education}
                            onChange={onChange}
                        />
                    )
                );
            })}
        </div>
    );
}

export default EducationList;
