import "./RaiseEvent.css"
import "./../LoginForm/LoginForm.css"

const RaiseEvent = () => {
    return (
        <div className={"raise-event-container"}>
            <div className="container">
                <div className="flex-container">
                    <div className="item">
                        <span>Event Name</span>
                        <input type={"text"} placeholder="Enter Event Name"/>
                    </div>
                    <div className="item">
                        <span>Organiser</span>
                        <input type={"text"} placeholder="Enter Organise Name"/>
                    </div>
                    <div className="item">
                        <span>Event Date</span>
                        <input type={"date"} placeholder="Pick Date"/>
                    </div>
                    <div className="item">
                        <span>Event Time</span>
                        <input type={"text"} placeholder="Choose a Time"/>
                    </div>
                    <div className="item">
                        <span>Location</span>
                        <input type={"text"} placeholder="Enter Event Location"/>
                    </div>
                    <div className="item">
                        <span>Government Event</span>
                        <select name="government-event">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="item">
                        <span>Candidate Details</span>
                        <input type="file" accept={".csv"} className="file-selector"/>
                    </div>
                    <div className="item">
                        <span>Notify Scribes PAN state</span>
                        <select name="pan-state">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-secondary col-lg-5 continue-button-bg submit-button"
                            onClick={() => console.log("sdcds")}>SUBMIT
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RaiseEvent