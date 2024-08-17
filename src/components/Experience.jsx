function Experience({ experience, onChange }) {
    return (
        <form className="experience" id={experience.id}>
            <label>
                Company Name
                <input
                    type="text"
                    name="companyName"
                    value={experience.companyName}
                    onChange={onChange}
                />
            </label>
            <label>
                Position Title
                <input
                    type="text"
                    name="position"
                    value={experience.position}
                    onChange={onChange}
                />
            </label>
            <label>
                Start Date
                <input
                    type="text"
                    name="startDate"
                    value={experience.startDate}
                    onChange={onChange}
                />
            </label>
            <label>
                End Date
                <input
                    type="text"
                    name="endDate"
                    value={experience.endDate}
                    onChange={onChange}
                />
            </label>
            <label>
                Location
                <input
                    type="text"
                    name="location"
                    value={experience.location}
                    onChange={onChange}
                />
            </label>
            <label>
                Description
                <input
                    type="text"
                    name="description"
                    value={experience.description}
                    onChange={onChange}
                />
            </label>
        </form>
    );
}

export default Experience;
