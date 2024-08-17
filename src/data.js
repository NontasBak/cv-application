import { v4 as uuidv4 } from "uuid";

const defaultPersonalDetails = {
    fullName: "Christopher Miles",
    email: "christopher.miles@gmail.com",
    phone: "555-555-5555",
    address: "Cambdridge, UK",
};

const defaultEducationList = [
    {
        school: "University of Cambdridge",
        degree: "Masters in Linguistics",
        startDate: "2012",
        endDate: "2016",
        location: "Cambdridge, UK",
        id: uuidv4(),
    },
    {
        school: "Harvard University",
        degree: "Bachelors in Linguistics",
        startDate: "2017",
        endDate: "2021",
        location: "Boston, MA",
        id: uuidv4(),
    },
];

const defaultExperienceList = [
    {
        companyName: "Washington Post",
        position: "Technical Writer",
        startDate: "2020",
        endDate: "2021",
        location: "Washington, DC",
        description:
            "Researched various topics and created content for thousands of people. Also I edited and proofread content for accuracy and clarity.",
        id: uuidv4(),
    },
    {
        companyName: "New York Times",
        position: "Editor",
        startDate: "2022",
        endDate: "present",
        location: "New York, NY",
        description:
            "Worked as an editor for the front page news of the New York Times, with millions of readers across the world. I also managed a team of writers and editors to ensure the highest quality content.",
        id: uuidv4(),
    },
];

export { defaultPersonalDetails, defaultEducationList, defaultExperienceList };
