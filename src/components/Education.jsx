function Education({ education, onChange }) {
    return (
        <form className="education" id={education.id}>
            <label>
                School
                <input
                    type="text"
                    name="school"
                    value={education.school}
                    onChange={onChange}
                />
            </label>
            <label>
                Degree
                <input
                    type="text"
                    name="degree"
                    value={education.degree}
                    onChange={onChange}
                />
            </label>
            <label>
                Start Date
                <input
                    type="text"
                    name="startDate"
                    value={education.startDate}
                    onChange={onChange}
                />
            </label>
            <label>
                End Date
                <input
                    type="text"
                    name="endDate"
                    value={education.endDate}
                    onChange={onChange}
                />
            </label>
            <label>
                Location
                <input
                    type="text"
                    name="location"
                    value={education.location}
                    onChange={onChange}
                />
            </label>
        </form>
    );
}

export default Education;
