import EducationList from "./EducationList";
import ExperienceList from "./ExperienceList";
import PersonalDetails from "./PersonalDetails";

function InputFields({
    personalDetails,
    educationList,
    experienceList,
    onChange,
}) {
    return (
        <div className="input-container">
            <PersonalDetails
                personalDetails={personalDetails}
                onChange={onChange}
            />
            <EducationList educationList={educationList} onChange={onChange} />
            <ExperienceList
                experienceList={experienceList}
                onChange={onChange}
            />
        </div>
    );
}

export default InputFields;
