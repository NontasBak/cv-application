import { useState } from "react";
import Education from "./Education";
import arrowDown from "../assets/arrow-down.svg";
import arrowLeft from "../assets/arrow-left.svg";
import { v4 as uuidv4 } from "uuid";

function EducationList({
    educationList,
    setEducationList,
    onChange,
    activeInput,
    changeActiveInput,
    activeEducation,
    setActiveEducation,
}) {
    function addEducationHandler() {
        const newEducation = {
            school: "",
            degree: "",
            startDate: "",
            endDate: "",
            location: "",
            id: uuidv4(),
        };
        setEducationList([...educationList, newEducation]);
        setActiveEducation(newEducation.id);
    }

    function deleteEducationHandler() {
        const newEducationList = educationList.filter(
            (education) => education.id !== activeEducation
        );
        setEducationList(newEducationList);
        setActiveEducation(null);
    }

    if (activeInput !== "education-list") {
        return (
            <button className="education-list" onClick={changeActiveInput}>
                <h1>Education</h1>
                <img src={arrowDown} alt="expand" className="arrow-down" />
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
                <button className="add" onClick={addEducationHandler}>
                    Add
                </button>
            </div>
        );
    }

    return (
        <div className="education-list active showing-education">
            <div className="education-title-container">
                <button
                    className="arrow-left"
                    onClick={() => setActiveEducation(null)}
                >
                    <img src={arrowLeft} alt="Go back" />
                </button>
                <h1>Education</h1>
            </div>
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
            <button className="delete" onClick={deleteEducationHandler}>Delete</button>
        </div>
    );
}

export default EducationList;
