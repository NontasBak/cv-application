import InputFields from "./components/InputFields";
import Resume from "./components/Resume";
import "./styles/reset.css";
import "./styles/app.css";
import { useState } from "react";
import {
    defaultEducationList,
    defaultPersonalDetails,
    defaultExperienceList,
} from "./data";

function App() {
    const [personalDetails, setPersonalDetails] = useState(
        defaultPersonalDetails
    );
    const [educationList, setEducationList] = useState(defaultEducationList);
    const [experienceList, setExperienceList] = useState(defaultExperienceList);

    function handleChange(e) {
        if (e.target.closest(".personal-details")) {
            setPersonalDetails({
                ...personalDetails,
                [e.target.name]: e.target.value,
            });
        } else if (e.target.closest(".education")) {
            const updatedEducationList = educationList.map((education) => {
                if (education.id === e.target.closest(".education").id) {
                    return {
                        ...education,
                        [e.target.name]: e.target.value,
                    };
                }
                return education;
            });
            setEducationList(updatedEducationList);
        } else {
            const updatedExperienceList = experienceList.map((experience) => {
                if (experience.id === e.target.closest(".experience").id) {
                    return {
                        ...experience,
                        [e.target.name]: e.target.value,
                    };
                }
                return experience;
            });
            setExperienceList(updatedExperienceList);
        }
    }

    return (
        <div className="app">
            <InputFields
                personalDetails={personalDetails}
                educationList={educationList}
                experienceList={experienceList}
                onChange={handleChange}
            />
            <Resume
                personalDetails={personalDetails}
                educationList={educationList}
                experienceList={experienceList}
            />
        </div>
    );
}

export default App;
