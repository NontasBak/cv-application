import arrowDown from "../assets/arrow-down.svg";

function PersonalDetails({ personalDetails, onChange, activeInput, changeActiveInput }) {
    if (activeInput !== "personal-details") {
        return (
            <button className="personal-details" onClick={changeActiveInput}>
                <h1>Personal Details</h1>
                <img src={arrowDown} alt="expand" className="arrow-down"/>
            </button>
        );
    }

    return (
        <div className="personal-details active">
            <h1>Personal Details</h1>
            <form action="">
                <label>
                    Full Name
                    <input
                        type="text"
                        name="fullName"
                        value={personalDetails.fullName}
                        onChange={onChange}
                    />
                </label>
                <label>
                    Email
                    <input
                        type="text"
                        name="email"
                        value={personalDetails.email}
                        onChange={onChange}
                    />
                </label>
                <label>
                    Phone Number
                    <input
                        type="text"
                        name="phone"
                        value={personalDetails.phone}
                        onChange={onChange}
                    />
                </label>
                <label>
                    Address
                    <input
                        type="text"
                        name="address"
                        value={personalDetails.address}
                        onChange={onChange}
                    />
                </label>
            </form>
        </div>
    );
}

export default PersonalDetails;
