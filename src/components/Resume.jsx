function Resume({ personalDetails, educationList, experienceList }) {
    return (
        <div className="resume">
            <h2 className="fullName">{personalDetails.fullName}</h2>
            <div className="personal-details">
                <p>{personalDetails.email}</p>
                <p>{personalDetails.phone}</p>
                <p>{personalDetails.address}</p>
            </div>
            <h2 className="education">Education</h2>
            <div className="education-list">
                {educationList.map((education) => {
                    return (
                        <div className="education-list-item">
                            <div className="education-info">
                                <p>
                                    {education.startDate} - {education.endDate}
                                </p>
                                <p>{education.location}</p>
                            </div>
                            <div className="education-main">
                                <h3>{education.school}</h3>
                                <h4>{education.degree}</h4>
                            </div>
                        </div>
                    );
                })}
            </div>
            <h2 className="experience">Experience</h2>
            <div className="experience list">
                {experienceList.map((experience) => {
                    return (
                        <div className="experience-list-item">
                            <div className="experience-info">
                                <p>
                                    {experience.startDate} -{" "}
                                    {experience.endDate}
                                </p>
                                <p>{experience.location}</p>
                            </div>
                            <div className="experience-main">
                                <h3>{experience.companyName}</h3>
                                <h4>{experience.position}</h4>
                                <p>{experience.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Resume;
