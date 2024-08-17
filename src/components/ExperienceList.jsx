import Experience from "./Experience";
import { useState } from "react";

function ExperienceList({ experienceList, onChange }) {
    return (
        <div className="experience-list">
            {experienceList.map((experience) => {
                return (
                    <Experience
                        key={experience.id}
                        experience={experience}
                        onChange={onChange}
                    />
                );
            })}
        </div>
    );
}

export default ExperienceList;
