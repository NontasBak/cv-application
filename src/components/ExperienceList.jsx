import Experience from "./Experience";
import { useState } from "react";
import arrowDown from "../assets/arrow-down.svg";

function ExperienceList({
    experienceList,
    onChange,
    activeInput,
    changeActiveInput,
    activeExperience,
    setActiveExperience,
}) {
    if (activeInput !== "experience-list") {
        return (
            <button className="experience-list" onClick={changeActiveInput}>
                <h1>Experience</h1>
                <img src={arrowDown} alt="expand" className="arrow-down"/>
            </button>
        );
    }

    if (activeExperience === null) {
        return (
            <div className="experience-list active">
                <h1>Experience</h1>
                {experienceList.map((experience) => {
                    return (
                        <button
                            key={experience.id}
                            className="experience"
                            onClick={() => setActiveExperience(experience.id)}
                        >
                            <h2>{experience.companyName}</h2>
                            <h3>{experience.position}</h3>
                        </button>
                    );
                })}
            </div>
        );
    }

    return (
        <div className="experience-list active">
            <h1>Experience</h1>
            {experienceList.map((experience) => {
                return (
                    experience.id === activeExperience && (
                        <Experience
                            key={experience.id}
                            experience={experience}
                            onChange={onChange}
                        />
                    )
                );
            })}
        </div>
    );
}

export default ExperienceList;
