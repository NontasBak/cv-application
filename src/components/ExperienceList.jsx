import Experience from "./Experience";
import { useState } from "react";
import arrowDown from "../assets/arrow-down.svg";
import arrowLeft from "../assets/arrow-left.svg";
import { v4 as uuidv4 } from "uuid";

function ExperienceList({
    experienceList,
    setExperienceList,
    onChange,
    activeInput,
    changeActiveInput,
    activeExperience,
    setActiveExperience,
}) {
    function addExperienceHandler() {
        const newExperience = {
            school: "",
            degree: "",
            startDate: "",
            endDate: "",
            location: "",
            description: "",
            id: uuidv4(),
        };
        setExperienceList([...experienceList, newExperience]);
        setActiveExperience(newExperience.id);
    }

    function deleteExperienceHandler() {
        const newExperienceList = experienceList.filter(
            (experience) => experience.id !== activeExperience
        );
        setExperienceList(newExperienceList);
        setActiveExperience(null);
    }

    if (activeInput !== "experience-list") {
        return (
            <button className="experience-list" onClick={changeActiveInput}>
                <h1>Experience</h1>
                <img src={arrowDown} alt="expand" className="arrow-down" />
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
                <button className="add" onClick={addExperienceHandler}>
                    Add
                </button>
            </div>
        );
    }

    return (
        <div className="experience-list active">
            <div className="experience-title-container">
                <button
                    className="arrow-left"
                    onClick={() => setActiveExperience(null)}
                >
                    <img src={arrowLeft} alt="Go back" />
                </button>
                <h1>Experience</h1>
            </div>
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
            <button className="delete" onClick={deleteExperienceHandler}>Delete</button>
        </div>
    );
}

export default ExperienceList;
