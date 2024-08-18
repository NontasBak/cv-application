import EducationList from "./EducationList";
import ExperienceList from "./ExperienceList";
import PersonalDetails from "./PersonalDetails";
import { useState } from "react";

function InputFields({
    personalDetails,
    educationList,
    setEducationList,
    experienceList,
    setExperienceList,
    onChange,
}) {
    const [activeInput, setActiveInput] = useState("personal-details");
    const [activeEducation, setActiveEducation] = useState(null);
    const [activeExperience, setActiveExperience] = useState(null);

    function changeActiveInput(e) {
        setActiveEducation(null);
        setActiveExperience(null);
        setActiveInput(e.target.closest("button").className);
    }

    return (
        <div className="input-container">
            <PersonalDetails
                personalDetails={personalDetails}
                onChange={onChange}
                activeInput={activeInput}
                changeActiveInput={changeActiveInput}
            />
            <EducationList
                educationList={educationList}
                setEducationList={setEducationList}
                onChange={onChange}
                activeInput={activeInput}
                changeActiveInput={changeActiveInput}
                activeEducation={activeEducation}
                setActiveEducation={setActiveEducation}
            />
            <ExperienceList
                experienceList={experienceList}
                setExperienceList={setExperienceList}
                onChange={onChange}
                activeInput={activeInput}
                changeActiveInput={changeActiveInput}
                activeExperience={activeExperience}
                setActiveExperience={setActiveExperience}
            />
            <button className="print" onClick={window.print}>Print CV</button>
        </div>
    );
}

export default InputFields;
